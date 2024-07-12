const Post = require("../model/Post");
const express = require('express');
const Comment = require('../model/Comments')
const router = express.Router();


router.post('/comments', async (req, res) => {
    try {
        

        const post = await Post.findById(req.body.post);
        const commentRes = await Comment.create(req.body);
        post.comments.push(commentRes._id);

        post.save()
    
        res.status(201).json(commentRes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;