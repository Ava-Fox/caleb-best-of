### Hey

This is a collection of quotes I found to bring me absolute delight while watching [Caleb Curry's 8 hour compilation video series on database design](https://www.youtube.com/watch?v=h0j0QN2b57M&t=0h0m0s). I thought it proper to just store it in a database itself. I'd been casually collecting these quotes while following along, and got the idea to create a database 7 hours in, so timestamps are only available for quotes collected during the last hour. I highly reccomend just clicking through for a good laugh. Caleb, if you're watching this: please marry me I love you 💕

##### NEXT STEPS:
    - [x] set up ssh on new computer
    - [x] manually adding stuff to db
    - [x] add a route that displays data from db
        - get list of all best moments, and render template that loops over all of them and shows on page
    - [x] post route to send data to (adding more moments to db form)
    - [ ] avafox.net/calebcurrywillyoumarryme
    - [x] initial page load get all author names/id

###### Problems
    - [x] Created an automatic virtual env while downloading cs50 library and now can't access or open it because I don't know the name
        - Just created new one called calebEnv
            - still not entering into db though
    - [x] Does being in a virtual environment and shifting
          files around screw with the npx serve dev ? Now 
          it says safari can't connect with the server??

        HTTP  6/12/2024 1:27:54 PM ::1 GET /
        HTTP  6/12/2024 1:27:54 PM ::1 Returned 404 in 15 ms

        - can't quit the environment now: permissions denied

        - tried giving terminal full access to disk but no cigar.
        - Did moving files around mess it completely up?
        - can't find the src files when I go to run it
        - Like it can't even find the current directory

        * WAS RUNNING WRONG COMMAND: NPX SERVE RATHER THAN: NPM SERVE GOLLY JEEZ

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
    - [x] Navbar Left side of screen:
        - [x] Author
            - [x] Al
                - [x] The one Al quote
            - [x] Caleb
                - [x] All quotes
                    - All quotes excluding chalk and moments
                - [x] Dropped chalk
                    - All ones in chalk table
                - [x] Video clips
                    - If timestamps
    - [ ] SQL
        - [x] schema
        - [x] insert quotes and whatnot
            - [x] python tool
                - [x] general structure
                - [x] enter info into dict
                - [x] go through dict info and enter into db

        - Concatinated string for timestamps? Same link but add &t=?h?m?s

    - [x] "Caleb is Baeleb"

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

    - NPX temporary
    - npm run dev
        - comes with node so can use other ppls code
        - shortcut
    - all npm projects run npm install
    - CREATED VIRTUAL ENVIRONMENT calebEnv TO INSTALL CS50 TOOLS
    https://www.npmjs.com/package/better-sqlite3

    SQLITE: .mode table

    
        

###### Credits:
    Huge shoutout to Will W., Al Sweigart, Peter Kang, Allie Jones, Evan Lane, and Charlie Volow for pairing with me on this!