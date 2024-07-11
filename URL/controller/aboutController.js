const parseRequestBody = require("../helpers/parser")
const generateResponse= require("../helpers/responseGenerator")
const aboutService =require("../services/aboutService")

const getAboutInfo= async (req,res) => {
    const result= await aboutService.getAbout()
    generateResponse(res,200,result)
}

const createAboutInfo=async (req,res) => {
    const body= await parseRequestBody(req)
    const addNewRecord= await aboutService.createAbout(body)
    generateResponse(res,201,addNewRecord)
}
const updateAboutInfo = async (req, res) => {
    const {url} = req
    const id = url.split("/")[2]
    const newID = id.replace("/","")

    const body = await parseRequestBody(req)
    const updatedText = await aboutService.updateAbout(body, newID)

    if (updatedText) {
        generateResponse(res, 200, updatedText)
    }
    else {
        generateResponse(res, 404, {"message":"No information"})
    }

}
const deleteAboutInfo = async (req, res) => {
    const {url} = req
    const id = url.split("/")[2]
    const newId = id.replace("/","")

    const deletedId = await aboutService.deleteAbout(newId)
    console.log(`DeleteId Result: ${deletedId ? "Success" : "Not Found"}`);

    if (deletedId) {
        generateResponse(res, 200, {"message": "Sucessfully Deleted"})
    }
}

module.exports={ getAboutInfo,createAboutInfo,updateAboutInfo,deleteAboutInfo}
