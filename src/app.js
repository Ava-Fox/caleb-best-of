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
  const quotes = db.prepare("SELECT quote_id, quote FROM quote;");
  quotes.run;
  console.log(quotes.quote_id, quotes.quote);
  console.log(quotes);
  console.log("Hi");
  res.render('bestof.njk');
})

// quote page
app.get('/quotes', (_req, res) => {
  // When click on quote in sidebar, takes 
  // to this page with quote_id from button clicked
  // and if it has a video it displays video, if not
  // just renders quote
  res.render("quotes.njk")
})

console.log('now listening on http://localhost:3000')
app.listen(3000)