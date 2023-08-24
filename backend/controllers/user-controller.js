import UserModel from "../db/models/user-schema.js";
import hashing from "../utils/encrypt.js";
const userController = {
    async login(request, response){
        const userInfo = request.body;
        const doc = await UserModel.findOne({'email':userInfo.email}).exec();
        try{
            if(doc && doc._id){
                const plainPassword = userInfo.password;
                const dbPassword = doc.password;
                if(hashing.matchPassword(plainPassword, dbPassword)){
                    response.json({message:'Welcome '+doc.name})
                }
                else{
                    response.json({message:'Invalid UserId or Password'});
                }
            }
        }
        catch(err){
            console.log("Error in login", err);
            response.json({message:'Invalid UserId or Password'});
        }
        // console.log(userInfo.userid);
        //console.log('Request Body is ', body);
        // if(userInfo.userid == userInfo.password){
        //     response.json({message:' Welcome '+userInfo.userid});
        // }
        // else{
        //     response.json({message:'Invalid UserId or Password'});
        // }
    },
    async register(request, response){
        const userInfo = request.body;
        userInfo.password = hashing.passwordHash(userInfo.password);
        try{
            const doc = await UserModel.create(userInfo);
            if(doc && doc._id){
                response.json({message:'Register Successfully'});
            }
            else{
                response.json({message:'Unsuccessful Registration'});
            }
        }
        catch(err){
            console.log("Error in Registration ",err);
            response.json({message:'Error during Registration'});
        }
    },
    profile(request, response){
        const userName = request.params.username;
        console.log("all params",userName);
        response.json({message:userName+" Profile"});
    },
    changePassword(request, response){
        response.json({message:"Change-Password"});
    }
}

export default userController;