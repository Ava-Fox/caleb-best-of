#from cs50 import SQL
import pprint as pp
# db = SQL("sqlite:///calebBestOf.db")

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
     # {
    #     'author': "", 
    #     'quote': "",
    #     'isChalk': [bool, bool], [Is it about chalk, did he drop it]
    #     'isAction': [bool, ""], [Is it an action, description]
    #     'timestamp': ""
    #     }

    # Maybe schema fucked up bc no autoincrement
    for current_quote in quote_list:
        author = current_quote["author"]
        quote = current_quote["quote"]
        isChalk = current_quote["isChalk"]
        isAction = current_quote["isAction"]
        timestamp = current_quote["timestamp"]

        # current_author = db.execute("SELECT name FROM author WHERE name = ?;", author)
        # if current_author:
            
        # Determine author:
            # If it's al:
                
        if author == 'al':
            # Insert quote into quote table, everything else is null, and skip
            # INSERT INTO table (column1,column2 ,..)
            # VALUES( value1,	value2 ,...);
            db.execute("INSERT INTO author (name) VALUES (?);", author)
            author_id = db.execute("SELECT author_id FROM author WHERE name = ?;", author)
            author_id = int(author_id['author_id'])
            db.execute("INSERT INTO quote (quote, is_chalk_instance, is_action, timestamp, author_id) VALUES (?, ?, ?, ?, ?);", quote, isChalk[0], isAction[0], timestamp, author_id)
            continue
        # Instert quote into quotes table
        # If it pertains to chalk
            # Insert quote_id into chalk table
            # Create a chalk instance PK
            # Enter boolean of if dropped
        # If it's an action
            # Insert into action table
            # And insert description
        # Add timestamp




if __name__ == "__main__":
    gather_quotes()
    # insert_sql(quotes)
    pp.pprint(quote_list)