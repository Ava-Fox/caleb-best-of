from cs50 import SQL
import pprint as pp
db = SQL("sqlite:///calebBestOf.db")

# List of all the quotes to insert into db
# Should I add frontend to this?? I mean, could be awesome to have in the digigarden!
# Maybe actually do in javascript??
# Concatinated string for timestamps? Same link but add &t=?h?m?s
# Mockaroo.com fake tables
# pprint pprint.pprint(quotes)
# list.append()

# Ok, now it friggen adds an empty insert_statement to quotes when you put q

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
def gather_quotes():
    quotes_remaining = True
    while quotes_remaining:
        current_quote = input("Quote: ")
        # Not fully breaking out of loop? OR is 
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
                
                # for quote in quotes.keys():
                #     if quote["author"] == author:

                break
        if author == "caleb":
            while True:
                is_chalk = input("Does it pertain to chalk? y/n: ")
                if is_chalk in options:
                    if is_chalk == "y":
                        # Gonna be isChalk[0] = True
                        is_chalk = True
                        while True:
                            # Check if it's a dropped instance
                            dropped = input("Did he drop the chalk? (y/n): ")
                            if dropped in options:
                                if dropped == "y":
                                    # Gonna be like...isChalk[1] = True
                                    dropped = True
                                else:
                                    dropped = False
                                break 
                    else:
                        is_chalk = False
                        dropped = False
                    break

            while True:
                is_action = input("Is it an action? (y/n): ")
                if is_action in options:
                    if is_action == "y":
                        is_action = True
                        description = input("Description of action: ")
                    else:
                        is_action = False
                        description = None
                    break

            while True:
                has_timestamp = input("Got timestamp? (y/n): ")
                if has_timestamp in options:
                    if has_timestamp == "y":
                        timestamp = input("Insert timestamp: ")
                    else:
                        timestamp = None
                    break
        else:
            is_chalk = False
            dropped = False
            is_action = False
            description = None
            timestamp = None

        insert_dictionary([author, current_quote, is_chalk, dropped, is_action, description, timestamp])

def insert_dictionary(data):
        author = data[0]
        current_quote = data[1]
        is_chalk = data[2]
        dropped = data[3]
        is_action = data[4]
        description = data[5]
        timestamp = data[6]
        
     # Now we insert everything into dictionary
        # Right now just replaces current value and doesn't add more things... need to update dict
        # Cuz we're adding a new quote in "quotes" dict
        # Insert quote... bruh is quote even a word anymore????
        # Is this legal? This is fucking breaking my brain... it needs a different structure
        # car.update({"color": "White"})
        insert_statement = {
            "author": author,
            "quote": current_quote,
            "isChalk": [is_chalk, dropped],
            "isAction": [is_action, description],
            "timestamp": timestamp
        }
        
        quotes.append(insert_statement) # this is so fuckng dumb
            
    

if __name__ == "__main__":
    gather_quotes()
    pp.pprint(quotes)