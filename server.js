const http = require("http")
const { fileURLToPath } = require("url")
const fs = require("fs")

const server = http.createServer(function (req, res) {
    let filePath;
    const url = req.url;
    if (url === '/') {
        filePath = 'home.html'
    }
    else if (url === '/about') {
        filePath = 'about.home'
    }
    else {
        filePath = 'error.html'
    }
    fs.readFile(filePath, function (err, content) {
        if (err) {
            res.end('Server Error')
        }
        else {
            res.end(content)
        }
    })

})

server.listen(10000)
