from cs50 import SQL
import pprint as pp
db = SQL("sqlite:///calebBestOf.db")

authors = db.execute("SELECT * FROM author;")
print(authors)
# List of all the quotes to insert into db
quotes = []
    # {
    #     'author': "", 
    #     'quote': "",
    #     'isChalk': [bool, bool],
    #     'isAction': [bool, ""],
    #     'timestamp': ""
    #     }

# Ok, so...
# For each quote, I can have the terminal prompt me yes or no questions and then insert into database depending on answer
    # If still have quotes left, prompt for quote
    # Fill up this dict first, then will go through database and insert each quote in each table according to info provided

prompt = "\n°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸ Insert quote! (q to quit) °º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸\n"
print(prompt)

#Gathering data...
quote_list = []
def gather_quotes():
    quotes_remaining = True
    while quotes_remaining:
        current_quote = input("Quote: ")
        if current_quote == "q":
            quotes_remaining = False
            break

        # this is... fucking hilarious
        options = ["y", "n"]
        while True:
            author = input("Is this caleb? (y/n): ")
            if author in options:
                if author == "y":
                    author = "caleb"
    
                else:
                    author = "al"
                    al_stats = {
                        "author": 'al',
                        "quote": current_quote, 
                        "is_chalk": False,
                        "dropped": False,
                        "is_action": False,
                        "description": None,
                        "timestamp": None
                        }
                    quote_list.append(al_stats)
                    break
            if author == "caleb":
                caleb_stats = {
                        "author": 'caleb',
                        "quote": current_quote,
                        "is_chalk": False,
                        "dropped": False,
                        "is_action": False,
                        "description": None,
                        "timestamp": None
                        }
                while True:
                    is_chalk = input("Does it pertain to chalk? y/n: ")
                    if is_chalk in options:
                        if is_chalk == "y":
                            # Gonna be isChalk[0] = True
                            caleb_stats["is_chalk"] = True
                            while True:
                                # Check if it's a dropped instance
                                dropped = input("Did he drop the chalk? (y/n): ")
                                if dropped in options:
                                    if dropped == "y":
                                        # Gonna be like...isChalk[1] = True
                                        caleb_stats["dropped"] = True
                                    else:
                                        caleb_stats["dropped"] = False
                                    break 
                        else:
                            caleb_stats["is_chalk"] = False
                            caleb_stats["dropped"] = False
                        break
                    
                    # See if quote is an action
                while True:
                    is_action = input("Is it an action? (y/n): ")
                    if is_action in options:
                        if is_action == "y":
                            caleb_stats["is_action"] = True
                            description = input("Description of action: ")
                            if description:
                                caleb_stats["description"] = description
                            else:
                                caleb_stats["description"] = None
                        else:
                            caleb_stats["is_action"] = False    
                            caleb_stats["description"] = None
                        break
                # See if quote has timestamp
                while True:
                    has_timestamp = input("Got timestamp? (y/n): ")
                    if has_timestamp in options:
                        if has_timestamp == "y":
                            caleb_stats["timestamp"] = input("Insert timestamp: ")
                        else:
                            caleb_stats["timestamp"] = None
                    break
                
            quote_list.append(caleb_stats)
            break
            

def insert_sql(quote_list):
    """We finally puttin this mf into a database"""
    for current_quote in quote_list:
        author = current_quote["author"]
        quote = current_quote["quote"]
        isChalk = current_quote["is_chalk"]
        dropped = current_quote["dropped"]
        isAction = current_quote["is_action"]
        description = current_quote["description"]
        timestamp = current_quote["timestamp"]

        print(f"author: {author}\nquote: {quote}\nisChalk: {isChalk}\ndropped:{dropped}\nisAction:{isAction}\ndescription:{description}\ntimestamp: {timestamp}")
        
        # Make sure doesn't log empty quote
        if current_quote != 'q':
            print("inside loop")
            options = ['al', 'caleb']
            current_author = db.execute("SELECT name FROM author WHERE name = ?;", author)
            # Make sure it has a valid author
            print(f"current author: {current_author}\n")
            current_author = current_author[0]['name']
            print(current_author + "\n")
            if current_author in options:
                print("INSIDE CURRENT AUTHOR IN OPTIONS LOOP")
                author_id = db.execute("SELECT author_id FROM author WHERE name = ?;", author)
                author_id = author_id[0]['author_id']
                print(author_id)
                # Enter into quotes table
                db.execute("INSERT INTO quote (author_id, quote, is_chalk_instance, is_action, timestamp) VALUES (?, ?, ?, ?, ?)""", author_id, quote, isChalk, isAction, timestamp)
                quote_id = db.execute("SELECT quote_id FROM quote WHERE quote = ?;", quote)
                quote_id = quote_id[0]['quote_id']
                check = db.execute("SELECT * FROM quote WHERE quote_id = ?", quote_id)
                print(check)
                if isChalk:
                    db.execute("INSERT INTO chalk (quote_id, is_dropped) VALUES (?, ?);", quote_id, dropped)

                if isAction:
                    db.execute("INSERT INTO action (quote_id, description) VALUES (?, ?);", quote_id, description)
        else:
            break
if __name__ == "__main__":
    gather_quotes()
    insert_sql(quote_list)
    # pp.pprint(quote_list)