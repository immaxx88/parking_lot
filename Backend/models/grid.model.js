const mongoose = require('mongoose')

var gridSchema = new mongoose.Schema(
    {
       gridno : Number
    }
)

mongoose.model('grid',gridSchema);