import express from 'express'
import nunjucks from 'nunjucks'
// import Database from 'better-sqlite3'


// const db = new Database('./posts.db',
//   { fileMustExist: true }
// )

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

nunjucks.configure('./src/templates', { express: app })

app.get('/', (_req, res) => {
  // res = response (resp)
  // _req = request
  // express convention
  res.render('bestof.njk')
})

console.log('now listening on http://localhost:3000')
app.listen(3000)