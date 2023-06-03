const {Sequelize,DataTypes,Model}     =require('sequelize')
const sequelize = new Sequelize('@root/sequelize-config')
console.log(sequelize)
class User extends Model{}

User.init({
    id:{
       type:DataTypes.INTEGER,
       autoIncrement:true,
       primaryKey:true 
    },
    username:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    password:{
        type:DataTypes.INTEGER,
        allowNull:true
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
    modelName:User,
    tableName:users

}
)
User.sync({alter:true})
module.exports=User;