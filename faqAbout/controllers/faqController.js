const fs = require('fs')
const path = require('path')

const getFaq = (res) => {
    const parentFolder = path.join(__dirname, '..')
    const dbJsonPath = path.join(parentFolder, 'db.json')
    const data = fs.readFile(dbJsonPath, 'utf-8', (err,data) => {
        const countData = JSON.parse(data).faq
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(countData))
        res.end()
    })

}


module.exports = {getFaq}