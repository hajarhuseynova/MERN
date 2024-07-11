const fs=require("fs")
const path=require("path")
const util=require("util")
const generateUniqueId=require("../helpers/generateUniqueId")

const readFileAsync=util.promisify(fs.readFile)
const writeFileAsync=util.promisify(fs.writeFile)

const parentFolder=path.join(__dirname,"..")
const databasePath=path.join(parentFolder,"database/db.json")

//GetAll
async function getAbout(){
       const result=await readFileAsync(databasePath)
        const myAllData= JSON.parse(result)
        return myAllData.abouts
}
//Create
async function createAbout(about){
     const result=await readFileAsync(databasePath)
     const myAllData= JSON.parse(result)
       const newAbout={"id":generateUniqueId(myAllData.abouts), 
    ...about
}
myAllData.abouts.push(newAbout)
await writeFileAsync(databasePath,JSON.stringify(myAllData,null,2))
return newAbout
}
async function updateAbout(newAbout, id) {
    const result = await readFileAsync(databasePath)
    const myAllData = JSON.parse(result)
    const updatedAbout = newAbout

    myAllData.abouts.map(about => {
        if (about.id === id) {
            about.name = updatedAbout.name
            about.surname = updatedAbout.surname
            about.age = updatedAbout.age
            about.email = updatedAbout.email
        }
    })

    await writeFileAsync(databasePath, JSON.stringify(myAllData, null, 2))
    const updatedName = myAllData.abouts.find((about) => about.id === id)
    if (updatedName){
        return updatedName
    }
    throw new Error("No info")
}
async function deleteAbout(id) {
    const result = await readFileAsync(databasePath)
    const myAllData = JSON.parse(result)

    const deletedId = myAllData.abouts.find(about => about.id === id)
    const deleteAbout = myAllData.abouts.indexOf(deletedId)

    myAllData.abouts.splice(deleteAbout, 1)
    await writeFileAsync(databasePath, JSON.stringify(myAllData, null, 2))

    return deletedId
}

module.exports={ getAbout,createAbout,updateAbout,deleteAbout}
