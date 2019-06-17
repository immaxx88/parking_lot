const mongoose = require('mongoose')

var customerDataSchema = new mongoose.Schema(
    {
        custid :
        {
            type : Number
        },
        slot :
        {
            type : Number
        },
        color :
        {
            type : String
        },
        regisno :
        {
            type : String
        },
        modelno : 
        {
            type : String
        }
    }
)

mongoose.model('customerdata',customerDataSchema);
