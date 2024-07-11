const http=require("http");
const router= require("./routes/router");
const useCors = require("./middlwares/cors-middleware");
const PORT=4444;

const server=http.createServer((req,res)=>{
useCors(req,res,()=>{
    router.handleRoutes(req,res)
})
})

server.listen(PORT,()=>{
    console.log(`listen ${PORT}`);
})