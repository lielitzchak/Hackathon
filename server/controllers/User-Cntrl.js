const Users = require("../model/User-Model");
const Jobs = require("../model/Job-Model");

module.exports ={

    putUserId: (req, res) => {
        try{

        }
        catch(err){
            
        }
    },
    deleteUserId:async (req, res) => {
        try{
         const deleteUser = await Users.findByIdAndRemove({_id : req.params.id})
         Jobs.findOne({userId : deleteUser._id}).then()
        }
        catch(err){
            
        }
    },
}

// spec

