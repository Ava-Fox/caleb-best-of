from cs50 import SQL
db = SQL("sqlite:///calebBestOf.db")

# List of all the quotes to insert into db
# Should I add frontend to this?? I mean, could be awesome to have in the digigarden!
# Maybe actually do in javascript??
# Concatinated string for timestamps? Same link but add &t=?h?m?s
# Mockaroo.com fake tables

quotes = {
    "author": {
        "caleb": {
            "quotes": {
                "quote": "",
                "isChalk": bool,
                "isAction": bool,
                "timestamp": ""
                },
        },
        "al": {
            "quotes": {
                "quote": "",
                "isChalk": bool,
                "isAction": bool,
                "timestamp": ""
                }
        }
    }
}

# Wait, why am I doing this again??
    # Like that's literally a database up there right, like that's the thing right... like what.

# Ok, so...

# For each quote, I can have the terminal prompt me yes or no questions and then insert into database depending on answer
    # If still have quotes left, prompt for quote
    # Fill up this dict first, then will go through database and insert each quote in each table according to info provided
prompt = "Insert quote, (q to quit)"
print(prompt)

quotes_remaining = True
while quotes_remaining:
    current_quote = input("Quote: ")
    if current_quote == "q":
        quotes_remaining = False
        break
    