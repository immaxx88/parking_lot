const mongoose = require('mongoose')

var customerSchema = new mongoose.Schema(
    {
        _id : 
        {
            type : Number
        },
        name :
        {
            type : String
        },
        username :
        {
            type : String
        },
        password :
        {
            type : String
        }
    }
)
customerSchema.methods.verifyPassword = function(password)
{
    if(password == this.password)
        return true
    else 
        return false 
}



mongoose.model('customer',customerSchema);
