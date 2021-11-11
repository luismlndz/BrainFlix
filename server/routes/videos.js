const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

let videosData = []

getVideos = () => {
    fs.readFile('./data/videos.json', (err, data) => {
        if(err) {
            console.log(err)
            return
        }
        videosData = JSON.parse(data)
    })
}

//Invoke
getVideos()

//Retrive some data for each video
router.get('/', (_req, res) => {
    const videos = videosData.map(({ id, title, channel, image }) => {
        return { id, title, channel, image }
    })
    res.json(videos)
})

//Retrive all data for specific video
router.get('/:id', (req, res) => {
    let video = videosData.find((video) => {
        return video.id === req.params.id
    })
    if(video)
        res.json(video)
    else {
        res.status(404).send('Video with that ID was not found')
    }
})

//Post new video
router.post('/', (req,res) => {
    let videos = videosData
    const { title, description } = req.body

    if(!title || !description) {
        res.status(400).send('Please provide a title and description in your body')
    }

    const video = {
        title: title,
        description: description, 
        image: '../public/images/image0',
        channel: 'Brainstation Man',
        id: uuidv4(),
        views: 0,
        likes: 0,
        timestamp: new Date().getTime(),
        comments: []
    }
    videos.push(video)

    fs.writeFile('./data/videos.json', JSON.stringify(videos), (err) => {
        if(err)
            res.status(500).send(err)
        
        console.log('Video uploaded successfully')
        res.status(201).json(video)
    })
})

//Post new comment (Diving Deeper)
router.post('/:id/comments', (req, res) => {
    const { comment } = req.body
    let video = videosData.find((video) => {
        return video.id === req.params.id
    })
    
    if(!video)
        res.status(404).send('Video with that ID was not found')

    if(!comment)
        res.status(400).send('Please provide a video comment in your body')

    const newComment = {
        name: 'Brainstation Man',
        comment: comment,
        id: uuidv4(),
        timestamp: new Date().getTime()
    }
    video.comments.push(newComment)
    video.comments.sort((x, y) => {
        y.timestamp - x.timestamp
    })

    fs.writeFile('./data/videos.json', JSON.stringify(videosData), (err) => {
        if(err)
            res.status(500).send(err)
        
        console.log('Comment added successfully')
        res.status(201).json(newComment)
    })
})

//Delete comment (Diving Deeper)
router.delete('/:videoId/comments/:commentId', (req, res) => {
    let video = videosData.find((video) => {
        return video.id == req.params.videoId
    })

    video.comments = video.comments.filter((comment) => {
        return comment.id !== req.params.commentId
    })
    
    fs.writeFile('./data/videos.json', JSON.stringify(videosData), (err) => {
        if(err)
            res.status(500).send(err)
        
        console.log('Comment deleted successfully')
        res.status(201).json(video.comments)
    })
})


module.exports = router