const {Sequelize} = require('sequelize');
const sequelize = new Sequelize ('user','postgres','admin',{
    host:'localhost',
    dialect:'postgres'
})
module.exports=sequelize;
