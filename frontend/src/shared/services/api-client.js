// Network Call (HTTP/HTTPS)
import axios from 'axios';
//HTTP Call (HTTP Methods)
//GET - Read
//POST- Write (Insert/Create)
//PUT - Update
//Delete - Remove
//CRUD Operations

const apiClient = {
    async get(URL){try{
        const response = await axios.get(URL);
        return response;
    }
    catch(err){
        throw err;
    }},
    async post(URL, data){
        try{
            const response = await axios.post(URL, data);
            return response;
        }
        catch(err){
            throw err;
        }
    },
    put(){},
    delete(){}
}

export default apiClient;