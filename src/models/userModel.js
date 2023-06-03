const {Sequelize,DataTypes,Model}     =require('sequelize')
class User extends Model{}

User.init({
    id:{
       type:DataTypes.INTEGER,
       autoIncrement:true,
       primaryKey:true 
    },
    name:{
        type:DataTypes.STRING,
         allowNull:false
    },
    email:{
        type:DataTypes.STRING,
         allowNull:false
    }


})
