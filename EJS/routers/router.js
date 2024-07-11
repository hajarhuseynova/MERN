const generateResponse = require('../utils/responseGenerator')
const urlhelper = require('../utils/urlHelper')
const { handleBlogRouter } = require('./blogRouter')
const { handleDefaultRouter } = require('./defaultRouter')

const handleRoutes = (req,res) => {
    const {url} = req

    let newUrl = `/${url.split('/')[1]}`
    
    switch(newUrl){
        case urlhelper.DEFAULT_ENDPOINT:
            handleDefaultRouter(req,res)
            break;
        case urlhelper.BLOG_ENDPOINT:
            handleBlogRouter(req,res)
            break;
        default:
            generateResponse(res,404,{"message": 'Any error occured'})
 
    }
}

module.exports = handleRoutes 