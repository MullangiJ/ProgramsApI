const express = require('express')
const router = express.Router()
const Define = require('../models/posts')
var uuid=require('uuid')
const {request}=require('express')
router.get('/', async(req,res) => {
    try{
           const data = await Define.find()
           res.json(data)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:uuid', async(req,res) => {
    try{
           const posts = await Define.find({uuid:req.params.uuid})
           res.json(posts)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const posts= new Define({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
        uuid:uuid.v4(),
        
    })

    try{
        const a1 =  await posts.save() 
        res.json({uuid:a1.uuid})
    }catch(err){
        res.send('Error')
    }
})

router.get('/:postsId',async(req,res)=> {
    try{
        const posts = await Define.findById(req.params.postsId) 
        posts.sub = req.body.sub
        const a1 = await posts.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})


module.exports = router