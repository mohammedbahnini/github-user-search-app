import axios from "axios";

const API_BASE_URL = 'https://api.github.com/users/';


export const getUser = async (username) => {

    try {

        const result = await axios.get(`${API_BASE_URL + username}`);
        return {
            error : false , 
            data : result.data
        };
    }
    catch (error) {
        return {
            error : true , 
            data :error
        };
    }
}