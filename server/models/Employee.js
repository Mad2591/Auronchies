const mongoose= require('mongoose')

const EmployeeSchema =new mongoose.Schema({
    email:String,
    password:String,
    confirmPassword:String

})

const EmployeeModel =mongoose.model("users",EmployeeSchema)
module.exports=EmployeeModel