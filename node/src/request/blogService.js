import ApiRequest from "./baseRequest.js";
import { Blog_Endpoint } from "../url_helper.js";

const _service= new ApiRequest()

export const getBlogDetail = async()=>{
    const res=await _service.get(Blog_Endpoint)
    return res.json()
}