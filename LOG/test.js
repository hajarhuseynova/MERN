const { LOGGING_TYPES } = require("./constants/constants")
const LogModel=require("./logging/log-model")
const Logger=require("./logging/logger")

const  newTestMethod= async()=>{
    try {
      const logger= new Logger(LOGGING_TYPES.WARNING)
      await logger.log(new LogModel({
        name:"Hajar"
      }))
    } catch (error) {
    const logger= new Logger(LOGGING_TYPES.ERROR)
    await logger.log(new LogModel({
        error:error.stack
    }))
   }
}
newTestMethod()