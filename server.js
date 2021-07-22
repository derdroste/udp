require('./dist/server/bundle.js')

const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.get('/', (req, res) => res.redirect('./index.html'))

app.use(express.static('./dist/client'))

server.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
