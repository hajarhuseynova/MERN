class Router {
    constructor() {
      this.routes = {};
    }

    addRoute( handler,path, isExtractId = false) {
      this.routes[path] = [handler, isExtractId];
    }
    
    handleRoute(req, res) {
        const {
            url
        } = req;
        let splittedUrl = url;
      if (this.isParameterPath(url)) {
        splittedUrl = this.getBasePath(url);
      }

      const route = this.routes[splittedUrl];
      if (!route) {
        return false;
      }
      const [handler, isExtractId] = route;
      const id = isExtractId ? this.extractUrl(url) : null;
      handler(req, res, id);
      return true;
    }

    isParameterPath(url) {
      const endOfUrl = url.split('/').pop();
      return !isNaN(+endOfUrl);
    }

    getBasePath(url) {
      const splittedUrl = url.split('/');
      splittedUrl.pop();
      return `${splittedUrl.join('/')}/`;
    }

    extractUrl(url) {
      return +url.split('/').pop();
    }

  };
  module.exports = Router;