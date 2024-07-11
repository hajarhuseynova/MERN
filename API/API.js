class API{
constructor(method,url,responseType, success,error,xmlh){
this.method=method;
this.url=url;
this.responseType=responseType;
this.success=success;
this.error=error
this.xmlh= new XMLHttpRequest()
    }
    get(){
        this.xmlh.onreadystatechange=()=>{
            if (this.xmlh.readyState == 4) {
                if (this.xmlh.status == 200) {
                    this.success(this.xmlh.responseText);
                } 
                else {
                    this.error(this.xmlh.statusText);
                }
            }
        }
        this.xmlh.open(this.method,this.url)
        this.xmlh.responseType = this.responseType;
        this.xmlh.send()
    }

}
function success(response){
    console.log("success",response)
    word(response)
}
function error(response){
    console.log("error",response)
}
function word(response) {
    const words = response.split(/\s+/);
    console.log(words)
    const filteredWords = words.filter(word => word.includes('m') && word.length < 6);
    console.log(filteredWords);
}
const call= new API("GET","text.txt","text", success, error)
call.get()