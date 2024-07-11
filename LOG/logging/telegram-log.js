const axios=require("axios")
class TelegramLogger{
    constructor(){
    }
    async log(logModel){
        const taken="7394219574:AAG8cgX0VfZ7lHe5hnQUOkWYMD8zf28VCvY";
        const chatID=1619925767;
        const message= JSON.stringify(logModel)
        const url= `https://api.telegram.org/bot${token}/sendMessage`
        axios.post(url,{
            chat_id:chatID,
            text:message,
            parse_mode:"Markdown"
        }).then(response=>{
            if(response.status!==200){
                console.log("Error",response)
            }
        }).catch(error=>{
            console.log("error solving",error)
        })
    }
}

module.exports=TelegramLogger