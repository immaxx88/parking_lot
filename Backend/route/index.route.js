const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')
const Customer = mongoose.model('customer')
const CustomerData = mongoose.model('customerdata')
const Grid = mongoose.model('grid')
const _ = require('lodash')
require('../models/customer.model')
require('../models/customerdata.model')
require('../models/grid.model')

const countCustomers = 1

router.post('/registercustomer',function(req,res)
{
   var customer = new Customer();
   customer._id = countCustomers++;
   customer.name = req.body.name;
   customer.username = req.body.username;
   customer.password = req.body.password;
   //customer.custid = customer.getValueForNextSequence('custid');
 
   customer.save((err,doc) =>
   {
    if(!err)
    {     
        res.send(doc)
    }   
   })
})
//Sequence Generator



router.get('/getgridno',function(req,res)
{
        Grid.findOne({ _id : '5cfe52da09b6e540b43d636b'},
        (err,user) => 
        {
            if(!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
                else if (err)
                return res.status(400).json(err)
                else
                return res.status(200).json({ status: true, user : _.pick(user,['gridno']) });
        })
})

router.get('/getslotdetails',function(req,res)
{
    CustomerData.findOne({slot : req.body.slot},
        (err,user)=>
        {
            if(!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
                else if (err)
                return res.status(400).json(err)
                else
                return res.status(200).json({ status: true, user : _.pick(user,['custid','slot','color','regisno','modelno']) });
        }
        )
})

router.get('/getcustomerdetails',function(req,res)
{
    CustomerData.find({custid : req.body.custid},(function (err, result) {
        if (err) {
            res.send(err);
        } else 
        {
            res.send(JSON.stringify(result));
        }
    }))
})  

router.put('/griddata',function(req,res)
{
    Grid.findOneAndUpdate(
        { "_id": "5cfe52da09b6e540b43d636b"},
        { $set : {gridno : req.body.gridno} },
        { new: true },
        function (err, documents) {
            res.send({ error: err, affected: documents });
          
        }
    );
}
)



router.post('/registercustomerdata',function(req,res)
{
   var custdata = new CustomerData();
   custdata.custid =  req.body.custid;
   custdata.slot = req.body.slot;
   custdata.color = req.body.color;
   custdata.regisno = req.body.regisno;
   custdata.modelno = req.body.modelno;
   custdata.save((err,doc) =>
   {
    if(!err)
    {
        res.send(doc)
    }
   })
})

router.post('/logincustomer', function(req, res) 
{
passport.authenticate('local',(err,user,info)=>{
    if(err) return res.status(400).json(err);

    else if (user) return res.status(200).json(user);

    else return res.status(404).json(info)
})(req,res)   
}
);





module.exports = router