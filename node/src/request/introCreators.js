import ApiRequest from "./baseRequest.js";
import { Intro_Endpoint } from "../url_helper.js";

const _service= new ApiRequest()

export const getIntroDetail = async()=>{
    const res=await _service.get(Intro_Endpoint)
    return res.json()
}