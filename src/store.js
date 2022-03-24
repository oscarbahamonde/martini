import * as jq from 'jquery'
import axios from 'axios'

export const post = async (url,data, config)=>{return await axios.post(url,data,config).
    then(res)=>res.json()}
export const $j = jq
export const range = (start, end) =>{
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }

