const axios=require("axios")
class DiscordLogger{
    constructor(){
    }
    async log(logModel){
        const message= {content:JSON.stringify(logModel)}
        axios.post('url')
        .then(response=>{
        }).catch(error=>{
        })
    }
}

module.exports=DiscordLogger