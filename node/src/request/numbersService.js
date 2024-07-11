import ApiRequest from "./baseRequest.js";
import { Numbers_Endpoint } from "../url_helper.js";

const _service= new ApiRequest()

export const getNumbersDetail = async()=>{
    const res=await _service.get(Numbers_Endpoint)
    return res.json()
}