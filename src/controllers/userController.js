const User = require('../models/userModel')
module.exports = {
    index: async (req, res) => {
        const data = await User.findAll();
        console.log(data);
        res.render('/user/index', data)
    },
    new: async (req, res) => {
        res.render('user/new');
    },
    newUser: async (req, res) => {
        const { id, username, password, name, email, phone } = req.body;
        const user = await User.build({ id, username, password, name, email, phone })
        await user.save();
        res.redirect('/user')
    }


}
