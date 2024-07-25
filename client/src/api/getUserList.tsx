import axios from "axios";
const server = process.env.REACT_APP_API_URL;

export const getUsersList = async () => {
    try {
        const response = await axios.get(`${server}/api/users`)
        console.log(response)
        return response;
    }
    catch (error){
        console.log("ERROR!")
        console.log(error)
    }
    return null
}