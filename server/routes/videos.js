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
router.get('/', (req, res) => {
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
    const {title, description} = req.body

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
        timestamp: new Date(),
        comments: []
    }
    videos.push(video)

    fs.writeFile('./data/videos.json', JSON.stringify(videos), (err) => {
        if(err)
            res.status(500).send(err)
        
        console.log('File written successfully')
        res.status(201).json(video)
    })
})

module.exports = router