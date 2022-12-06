const http = require('http')
const data = require('./urls.json')
const URL = require('url')

http.createServer((req, res) => {
    res.end(JSON.stringify(data))
    console.log(URL.parse(req.url, true).query)
    console.log(URL.parse(req.url, true).query)
}).listen(3000, () => console.log('API is running'))

