const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,(err) =>
{
    if (!err) {console.log('Mongo DB Connection Succeeded');}
    else {
        console.log('Error in Mongo DB connection  : ' + JSON.stringify(err,undefined,2));
}
}
)

require('../models/customer.model')
require('../models/customerdata.model')
require('../models/grid.model')