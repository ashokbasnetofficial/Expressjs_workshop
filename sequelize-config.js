const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('test', 'postgres', 'admin', {
    host: 'localhost',
    dialect:'postgres' 
  });
  module.exports=sequelize
  
  