class Router {
    constructor(){
        this.routes = {}
    }
   //categories/detail/5
    addRoute(path,handler,isExtractId=false){
        this.routes[path] = {handler, isExtractId}
    }
    handleRoute(req,res) {
        //categories/10
        const {url} = req;
        let splittedUrl = url;
        if(this.isParameterPath(url)) {
            splittedUrl = this.getBasePath(url)
        }
        // categories/5  
        const route = this.routes[splittedUrl]  

        if(!route) 
            return false;

        const {handler,isExtractId} = route
        const id = isExtractId ? this.extractUrl(url) : null;

        handler(req,res,id);
        return true
    }

    isParameterPath(url) {
        const lastPartOfUrl = url.split('/').pop()
        // categories/1
        return !isNaN(+lastPartOfUrl)  
    }

    getBasePath(url) {
        const splittedUrl = url.split('/')
        splittedUrl.pop()
        return `${splittedUrl.join('/')}/`
        // categories/detail/
    }
    extractUrl(url) {
        return +(url.split('/').pop())
    
    }

}

module.exports = Router