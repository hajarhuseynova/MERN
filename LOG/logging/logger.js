const {LOGGING_TYPES}=require("../constants/constants")
const DatabaseLogger = require("./database-log")
const DiscordLogger = require("./discord-log")
const TelegramLogger = require("./telegram-log")

class Logger{
  constructor(logTypes){
   this.logTypes=logTypes
  }
  
  async log(logModel){
        switch(this.logTypes){
          case LOGGING_TYPES.INFO:
            const dbLogger=new DatabaseLogger(logModel)
            await dbLogger.log()
            break
          case LOGGING_TYPES.ERROR:
             const telegramLogger=new TelegramLogger()
             await telegramLogger.log(logModel)
             break
          case LOGGING_TYPES.WARNING:
             const discordLogger=new DiscordLogger()
             await discordLogger.log(logModel)
             break
        }
  }
}

module.exports=Logger