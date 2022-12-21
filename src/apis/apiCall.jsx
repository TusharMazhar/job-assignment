import axios from 'axios'
export const getApiResponse = async (url)=>{
    return await axios.get(url);
}