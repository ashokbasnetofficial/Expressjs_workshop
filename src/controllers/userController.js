const   User = require('../models/userModel')
module.exports ={
index : async (req, res)=>{
const data = await User.findAll();
console.log(data);
res.render('/user/index',data)
}


}