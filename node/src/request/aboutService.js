import ApiRequest from "./baseRequest.js";
import { About_Endpoint } from "../url_helper.js";

const _service= new ApiRequest()

export const getAboutDetail = async()=>{
    const res=await _service.get(About_Endpoint)
    return res.json()
}