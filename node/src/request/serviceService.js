import ApiRequest from "./baseRequest.js";
import { Service_Endpoint } from "../url_helper.js";

const _service= new ApiRequest()

export const getServiceDetail = async()=>{
    const res=await _service.get(Service_Endpoint)
    return res.json()
}