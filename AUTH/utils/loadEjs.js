const path = require('path')
const ejs = require('ejs')
const fs = require('fs')
const getRootPath = require('./routPath')
const generateResponse = require('./responseGenerator')
const { CONTENT_TYPES } = require('./constants')

const loadEjs = (filename, req, res, datas) => {
    const filePath = path.join(getRootPath(), 'views', 'pages', `${filename}.ejs`)

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            generateResponse({
                res: res,
                status: 500,
                header: CONTENT_TYPES['.txt'],
                data: 'Internal Server Error',
            })
        }
        else {
            const renderedHtml = ejs.render(data, { rootPath: getRootPath(), ...datas })
            generateResponse({
                res: res,
                status: 200,
                header: CONTENT_TYPES['.html'],
                data: renderedHtml
            })
        }
    })
}

module.exports = loadEjs;