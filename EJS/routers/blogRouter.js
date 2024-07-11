const { BLOG_ENDPOINT } = require('../utils/urlHelper')

const blogContoller=require("../controllers/blogContoller")

const handleBlogRouter = (req, res) => {
    
    const { url } = req

    switch(url) {
        case BLOG_ENDPOINT:
            blogContoller.getBlogPage(req,res)
            break;
    }

}

module.exports = {
    handleBlogRouter
}