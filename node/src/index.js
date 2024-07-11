import { getAboutDetail } from "./request/aboutService.js";
import { bindAboutPart } from "./creators/aboutCreators.js";
import { getServiceDetail } from "./request/serviceService.js";
import { bindServiceData } from "./creators/serviceCreators.js";
import { getBlogDetail } from "./request/blogService.js";
import { bindBlogData } from "./creators/blogCreators.js";
import {getTestinomialDetail} from "./request/testinomialService.js"
import { bindTestinomialData } from "./creators/testinomialCreators.js";
import { getNumbersDetail } from "./request/numbersService.js";
import { bindNumbersData } from "./creators/numbersCreators.js";
import { getIntroDetail } from "./request/introCreators.js";
import { bindIntroData } from "./creators/introCreators.js";

async function loadMyData(){
    let aboutResult= await getAboutDetail()
    bindAboutPart(aboutResult[0])
    let serviceResult = await getServiceDetail();
    console.log(serviceResult)
    bindServiceData(serviceResult);
    let blogResult = await getBlogDetail();
    bindBlogData(blogResult);
    let testinomialResult = await getTestinomialDetail();
    console.log(testinomialResult)
    bindTestinomialData(testinomialResult);
    let numbersResult = await getNumbersDetail();
    console.log(numbersResult)
    bindNumbersData(numbersResult);
    let introResult = await getIntroDetail();
    console.log(introResult)
    bindIntroData(introResult);
}
document.addEventListener("DOMContentLoaded",loadMyData)