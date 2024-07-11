const fs = require('fs')
const path = require('path')
const getRootPath = require('../utils/root-path')
const ejs = require('ejs')
const blogService = require('../services/blog-service')

const getDefaultPage = async (req,res) => {

    const blogs =  await blogService.getAllBlogs()
    const ejsFilePath = path.join(getRootPath(), 'views','pages','default.ejs')
    
    fs.readFile(ejsFilePath, 'utf-8', (err,data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'})
            res.end('Internal server error')
        }
        const datas = {
            rootPath: getRootPath(),
            myRandomText: 'Some description',
            blogs: blogs
        }

        const renderedHTML = ejs.render(data,datas)
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end(renderedHTML)
    })
}

module.exports = {getDefaultPage}