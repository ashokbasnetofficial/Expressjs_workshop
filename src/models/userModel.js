const {Sequelize,DataTypes,Model} =require('sequelize')
const sequelize = require('@root/sequelize-config')
class User extends Model{}

User.init({
    id:{
       type:DataTypes.INTEGER,
       autoIncrement:true,
       primaryKey:true 
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
         allowNull:false
    },
    email:{
        type:DataTypes.STRING,
         allowNull:false
    },
    phone:{
        type:DataTypes.BIGINT,
        allowNull:false
    }
},
{
    sequelize,
    tableName:'user',
    modelName:'User',

}
)
User.sync({alter:true})
module.exports=User;