### Hey

This is a collection of quotes I found to bring me absolute delight while watching [Caleb Curry's 8 hour compilation video series on database design](https://www.youtube.com/watch?v=h0j0QN2b57M&t=0h0m0s). I thought it proper to just store it in a database itself. I'd been casually collecting these quotes while following along, and got the idea to create a database 7 hours in, so timestamps are only available for quotes collected during the last hour. I highly reccomend just clicking through for a good laugh. Caleb, if you're watching this: please marry me I love you 💕

###### Ideas:
    - [x] Bouncing head lol
    - [ ] Create a password login for something only he would know and upon entry I give him my contact info and social security number (for the marriage contract)
        - COntact info is accessed via database download 
            - table full of info
            - [ ] talk to someone who actually knows security 
                - fake SSN lol 0000-00000-000000...
            - Thx Peter
    - [ ] add image of him holding sword as cursor, where the tip of sword is where click
    - [ ] Chrome extension where it will sometimes (1/10 times?) open to a random best-of timestamp moment ( thx Emily this is a good one <3 )
        - bookmarklet
            - put in bookmarks bar, but don't gotta install it
            - while watching youtube could click it and it would save to the database
            - form for other info
    - [ ] Navbar Left side of screen:
        - [ ] Author
            - [ ] Al
                - [ ] The one Al quote
            - [ ] Caleb
                - [ ] All quotes
                    - All quotes excluding chalk and moments
                - [ ] Dropped chalk
                    - All ones in chalk table
                - [ ] Video clips
                    - If timestamps
    - [ ] SQL
        - [x] schema
        - [ ] insert quotes and whatnot
            - [ ] python tool
                - [x] general structure
                - [x] enter info into dict
                - [ ] go through dict info and enter into db

        - Concatinated string for timestamps? Same link but add &t=?h?m?s

    ###### NEXT STEPS:
    - [ ] manually adding stuff to db
    - [ ] add a route that displays data from db
        - get list of all best moments, and render template that loops over all of them and shows on page
    - [ ] post route to send data to (adding more moments to db form)
    - [ ] avafox.net/calebcurrywillyoumarryme

###### Random tips learned
    - BITCHIN' HOTKEYS 
        - CMD L
        - OPTION ARROW
        - ls -a
            - shortcut show hidden files
        - CMD P 
            - Fuzzyfind/ goto
            - put in file name and it will go to and open
        - git commit --amend --no-edit
    - prettify dictionary output
        - pprint.pprint(quotes)
    - fake tables
        - Mockaroo.com
    - Is this code running on server or browser?
        - have access to completely dif things
            - server code has access to db
            - browser no access to db
        - way talk to each other http requests
        - browser/client same thing
            - client more generic term
                - might not control
                - browser type of client that talks to server
            - server is computer you control
                - your middleman
                    - use urls to say dif actions can do on server
        - browser speeks http and also runs html
        - terminal doesn't know html but can speak http
        - want seperation
            - app w/ multiple users
                - don't want everyone be able read every entry in db
            - can give Caleb access to src file once he enters pw
    - Always draw db as a cylander idk why
    - REST
        - API
            - a thing computers do
            - all things letting other ppl do w your code
        - specific set of rules for designing API
        - representational state transfer
        - no one really follows this academic concept but good general idea
        - *(GET / POST) / PATCH / PAIR
             - 99% time get/post lol
    - "Idempotent"
        - Programmers love this word:
        - comes from math
        - if call it more than once, has same effect as only calling it one time

    
        

###### Credits:
    Huge shoutout to Will W., Al Sweigart, Peter Kang, Allie Jones, and Charlie Volow for pairing with me on this!