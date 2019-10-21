const express =require('express');
const router = express.Router();

const Dinosaure =require('../models/Dinosaure');
const User =require('../models/user');

//get
router.get('/Dinosaures',(req,res,next)=>{
    Dinosaure.find(function(err,Dinosaures){
      res.json(Dinosaures);
  }) 
});


//add contact 
router.post('/Dinosaure',(req,res,next)=>{
    let newDinosaure=new Dinosaure({
        age:req.body.age,
        famille:req.body.famille,
        race:req.body.race,
        nourriture:req.body.nourriture
    });

    newDinosaure.save((err,Dinosaure)=>{
      if(err)
      {
          res.json({msg:'Failed to add Dinosaure'});
      }
      else{
          res.json(Dinosaure);
      }
    });
});


//delete contact

router.delete('/Dinosaure/:id',(req,res,next)=>{
    Dinosaure.remove({_id: req.params.id},function(err,result){
        if(err)
        {
           res.json(err); 
        }

        else{
            res.json(result);
        }
    });
});

//update contact
router.put('/Dinosaure/:id',(req,res,next)=>{
    Dinosaure.findOneAndUpdate({_id:req.params.id},{
        $set:{
            age:req.body.age,
            famille:req.body.famille,
            race:req.body.race,
            nourriture:req.body.nourriture
        }
    },
    function(err,result){
        if (err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    }
    )
});
module.exports=router;