const User = require('../models/userModel')
module.exports = {
    index:  async (req, res) => {
        const data = await User.findAll();
      
        res.render('user/index', {data})
    },
    new: async (req, res) => {
        res.render('user/index',{});
    },
    newUser: async (req, res) => {
       
        const { id, username, password, name, email, phone } = req.body; 
        console.log(req.body)
        const user = await User.build({ id, username, password, name, email, phone })
        await user.save();
        // res.send('success!')
        res.redirect('/user/new');
    },
    edit: async(req,res)=>{
        let id =req.body.id;
        let user = await User.findByPk(id);
        res.render('user/index',{user});
    }
    ,
    editUser: async (req,res)=>{
        let id = req.params.id;
        let user = await User.findByPk(1);
        let {username,password,name,email,phone}= req.body;
        user.username=username;
        user.password=password;
        user.name =name;
        user.email=email;
        user.phone =phone;
        user.update();
        await user.save();
        res.redirect('/user/new')
    }
}
