const baseService = require('./base-service')

async function getAllBlogs() {
    const result = await baseService.getAllJSONData()
    return result.blogs;
}

module.exports = {
    getAllBlogs
}