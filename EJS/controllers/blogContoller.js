const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const getRootPath = require('../utils/root-path')

const getBlogPage = (req,res) => {
    const htmlFilePath = path.join(getRootPath(), 'views', 'pages', 'blogs.ejs')
    fs.readFile(htmlFilePath, 'utf-8', (err,data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'})
            res.end('Internal server error')
        }
        const renderedHTML = ejs.render(data,{rootPath:getRootPath()})
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end(renderedHTML)
    })
}

module.exports = {getBlogPage}