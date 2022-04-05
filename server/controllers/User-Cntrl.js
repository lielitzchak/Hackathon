const Users = require("../model/User-Model");

module.exports ={
    getAllUsers: (req, res) => {
        try{
            Users.find((err, users) => {
                if(err){
                    res.status(404).json({message: 'Error getting users'})
                }
                console.log("Get all users")
                res.status(200).json(users)
            })
        }
        catch(err){
            res.status(500).json({message: 'Error getting users'})
        }
    },
    getUserId: (req, res) => {
        try{

        }
        catch(err){
            
        }
    },
    postUser: async(req, res) => {
        try{
            await Users.create(req.body).then(() =>
                res.status(200).json({ message: 'Post added successfully' })
              )
              .catch(err => res.status(500).json("err"))
            }
        catch(err){
            res.status(500).json({message: 'Error post users'})
            console.log(err);
        }
    },
    putUserId: (req, res) => {
        try{

        }
        catch(err){
            
        }
    },
    deleteUserId: (req, res) => {
        try{

        }
        catch(err){
            
        }
    },
}

// spec

