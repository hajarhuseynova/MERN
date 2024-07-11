const fs = require('fs')
const path = require('path')

const getAbout = (res) => {
    const parentFolder1 = path.join(__dirname, '..')
    const dbJsonPath1 = path.join(parentFolder1, 'db.json')
    const data = fs.readFile(dbJsonPath1, 'utf-8', (err,data) => {
        const countData1 = JSON.parse(data).about
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(countData1))
        res.end()
    })
}

module.exports = {getAbout}