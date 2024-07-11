const ENDPOINTS=require("../helpers/urlHelper")
const generateResponse=require("../helpers/responseGenerator")
const aboutRouter=require("../routes/about-router")
const handleRoutes=(req,res)=>{
const {url}=req

switch(url){
    case ENDPOINTS.DEFAULT_ENDPOINT:
        console.log("home")
        break;
    case ENDPOINTS.ABOUT_ENDPOINT:
         aboutRouter.handleAboutRoutes(req,res)
        break;
    default:
         generateResponse(res,404,{"message":"no error"})
         break;
             
}
}
module.exports={ handleRoutes}