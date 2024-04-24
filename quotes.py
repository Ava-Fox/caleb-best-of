from cs50 import SQL
db = SQL("sqlite:///calebBestOf.db")

# List of all the quotes to insert into db
# Should I add frontend to this?? I mean, could be awesome to have in the digigarden!
# Maybe actually do in javascript??
# Concatinated string for timestamps? Same link but add &t=?h?m?s
# Mockaroo.com fake tables

quotes = {
    "caleb": {
        quotes: [""],
        timestamp:[]
    },
    "al": {
        quotes: [""],
        timestamp:[]
    }
}