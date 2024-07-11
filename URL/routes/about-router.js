const {HTTP_METHODS}=require("../helpers/enums")
const aboutContoller=require("../controller/aboutController")

const handleAboutRoutes=(req,res)=>{
 const {method}=req
 switch(method){
    case HTTP_METHODS.GET:
        aboutContoller.getAboutInfo(req,res)
        break;
    case HTTP_METHODS.POST:
        aboutContoller.createAboutInfo(req,res)
        break;
    case HTTP_METHODS.PUT:
        aboutContoller.updateAboutInfo(req,res)
        break;
    case HTTP_METHODS.DELETE:
         aboutContoller.deleteAboutInfo(req,res)
        break;
 }
}

module.exports={ handleAboutRoutes}