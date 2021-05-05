const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/',(req,res) => {
    res.send('We are family');
});

router.post('/', async (req,res) => {
    // console.log(req.body);
    
    try{
        data = req.body;
        let add = await initialData.build(data).save();
        res.json({
        status: "success",
        payload: {
        projects: add,
      },
    });
        // const post = await Post({

        //     title:req.body.title,
        //     description:req.body.description

        // }).save();

        // res.status(200).send({data:post});

    }catch(err){

        res.status(500).send({data:err});
    }  
});
 
module.exports = router;
