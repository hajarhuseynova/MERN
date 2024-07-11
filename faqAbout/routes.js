const faqAction = require('./controllers/faqController')
const aboutAction = require('./controllers/aboutController')

const routes = {
    "/": {
        "GET": () => {},
    },

    "/faq": {
        "GET": faqAction.getFaq
    },

    "/about": {
        "GET": aboutAction.getAbout
    }
}

module.exports = routes