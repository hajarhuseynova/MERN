const fs=require("fs")
const path=require("path")
const util=require("util")

const DB_PATH=path.join(__dirname,"..",'database/db.json')

const READFILEASYNC = util.promisify(fs.readFile)
const WRITEFILEASYNC = util.promisify(fs.writeFile)

class DatabaseLogger{
    constructor(logModel){
      this.logModel=logModel
    }
    async log(){
          const AllData= await READFILEASYNC(DB_PATH)
          const myJsonData= JSON.parse(AllData)
          myJsonData.logs.push(this.logModel)
          await WRITEFILEASYNC(DB_PATH, JSON.stringify(myJsonData,null,2))
    }
}

module.exports=DatabaseLogger