const express = require('express')
const helmet = require('helmet')
const path = require('path')
const static = path.resolve(__dirname, '../static')
const app = express()

app.use(helmet())
app.use(express.static(static))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(static, './index.html'))
})
app.listen(4200, () => {
  console.log('up on 4200')
})
