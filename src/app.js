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
  console.log(authorId)
  let videos = []
  if (authorId){
    videos = db.prepare("SELECT clip, quote FROM quote WHERE author_id = ?;").all(authorId);
    console.log(videos);
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
  res.render("add.njk");
})

app.post("/add", (req, res) => {
  res.send("Got a post request")
})

console.log('now listening on http://localhost:3000')
app.listen(3000)