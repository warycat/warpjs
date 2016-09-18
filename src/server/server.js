import express from 'express'

const server = express()
const port = process.env.PORT || 3000

server.get('/', (req, res) => {
  res.send('hello world')
})

server.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
