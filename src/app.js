// wont run in browser
import express from 'express'
import nunjucks from 'nunjucks'
import Database from 'better-sqlite3'


const db = new Database('./calebBestOf.db',
  { fileMustExist: true }
)
const row = db.prepare("SELECT * FROM quote WHERE author_id = ?")
const info = row.run(2)
console.log(info)
// const row = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
// console.log(row.firstName, row.lastName, row.email);

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

nunjucks.configure('./src/templates', { express: app })

// home page
app.get('/', (req, res) => {
  // When click on quote in sidebar, takes 
  // to this page with quote_id from button clicked
  // and if it has a video it displays video, if not
  // just renders quote
  const authors = db.prepare("SELECT name, author_id FROM author;").all()
  const authorId = req.query.author_id
  let quotes = []
  if (authorId){
    quotes = db.prepare("SELECT quote, clip  FROM quote WHERE author_id = ?;").all(authorId);
  }
  res.render("quotes.njk", {authors, quotes}) // if name of key/object matches variable can just do once

  // localhost:3000/quotes
  // localhost:3000/quotes?author_id=1
})

app.get('/videos', (req,res) => {
  const authors = db.prepare("SELECT author_id, name FROM author;").all()
  let authorId;
  for (let i = 0; i < authors.length; i++){
    if (authors[i].name === 'caleb') {
      authorId = authors[i]['author_id']
    }
  }
  let videos = []
  if (authorId){
    videos = db.prepare("SELECT clip, quote FROM quote WHERE author_id = ?;").all(authorId);
  }
  res.render("videos.njk", {authors, videos})
})

app.get('/chalk', (_req, res) => {
  const authors = db.prepare("SELECT author_id, name FROM author;").all()
  let authorId;
  for (let i = 0; i < authors.length; i++){
    if (authors[i].name === 'caleb') {
      authorId = authors[i]['author_id']
    }
  }
  let quotes = [];
  if (authorId) {
    quotes = db.prepare("SELECT quote FROM quote JOIN chalk ON chalk.quote_id = quote.quote_id WHERE author_id = ?;").all(authorId)
  }
  res.render("chalk.njk", {authors, quotes})
})

app.get("/add", (req, res) => {
  const authors = db.prepare("SELECT author_id, name FROM author;").all()
  res.render("add.njk", {authors});
})


app.post("/add", (req, res) => {
  /* 
  If author is new, create new author id
  If author in current authors:
    insert new quote with their id
  */
  const authors = db.prepare("SELECT author_id, name FROM author;").all()

  const body = req.body
  const author = body.author.toLowerCase()
  const quote = body.quote
  let chalk = body.chalk
  let dropped = body.dropped
  const clip = body.clip
  let action = 0

  if (chalk === "y") {
    chalk = 1
  }
  else {
    chalk = 0
  }

  if (dropped === "y") {
    dropped = 1
  }
  else {
    dropped = 0
  }

  // GET AUTHOR ID
  let authorId;
  for (let i = 0; i < authors.length; i++){
    if (authors[i]['name'] === author) {
      authorId = authors[i]["author_id"]
    }
  }

  if (!authorId) {
    let statement = db.prepare("INSERT INTO author (name) VALUES (?);")
    statement.run(author)
    authorId = db.prepare("SELECT author_id FROM author WHERE name = ?;").run(author)
  }
  // INSERT QUOTE INTO DATABASE
  db.prepare("INSERT INTO quote (author_id, quote, is_chalk_instance, is_action, clip) VALUES (?, ?, ?, ?, ?);").run(authorId, quote, chalk, action, clip)
  
  let quoteId = db.prepare("SELECT quote_id FROM quote WHERE quote = ?;").all(quote)
  quoteId = quoteId[0]['quote_id']
  if (chalk) {
    db.prepare("INSERT INTO chalk (quote_id, is_dropped) VALUES (?, ?);").run(quoteId, dropped)
  }

  res.header("Location", `/?author_id=${authorId}`)
  res.sendStatus(303)
})

app.get("/password", (_req, res) => { 
  res.render("password.njk")
})

app.post("/password", (req, res) => {
  const body = req.body
  let password = "whoopsIdroppedmychalk"
  if (body.password === password) {
    let quotes = db.prepare("SELECT * FROM quote").all()
    res.render("database.njk", {quotes})
  }
  else {
    res.render("evil.njk")
  }
  //  -access database (load file (csv file))
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});