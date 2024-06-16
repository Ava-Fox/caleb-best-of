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
app.get('/', (_req, res) => {
  // res = response (resp)
  // _req = request
  // express convention

  // if action == "post", see which button clicked then send author options/quote data for specific set
  const quotes = db.prepare("SELECT quote_id, quote, timestamp FROM quote;").all();
  let onlyQuotes = []
  for (let i = 0; i < quotes.length; i++){
    let timestamp = "0h0m0s"
    let link = 'https://www.youtube.com/watch?v=h0j0QN2b57M&t='
    if (quotes[i].timestamp) {
      timestamp = quotes[i].timestamp;
    }
    link += timestamp;
    onlyQuotes.push({quote: quotes[i].quote, link})
  }
  res.render('bestof.njk', {quotes: onlyQuotes});
})

// quote page
app.get('/quotes', (req, res) => {
  // When click on quote in sidebar, takes 
  // to this page with quote_id from button clicked
  // and if it has a video it displays video, if not
  // just renders quote
  const authors = db.prepare("SELECT name, author_id FROM author;").all()
  const authorId = req.query.author_id
  let quotes = []
  if (authorId){
    quotes = db.prepare("SELECT quote FROM quote WHERE author_id = ?;").all(authorId);
  }
  res.render("quotes.njk", {authors, quotes}) // if name of key/object matches variable can just do once

  // localhost:3000/quotes
  // localhost:3000/quotes?author_id=1
})

console.log('now listening on http://localhost:3000')
app.listen(3000)