import ApiRequest from "./baseRequest.js";
import { Testinomial_Endpoint } from "../url_helper.js";

const _service= new ApiRequest()

export const getTestinomialDetail = async()=>{
    const res=await _service.get(Testinomial_Endpoint)
    return res.json()
}