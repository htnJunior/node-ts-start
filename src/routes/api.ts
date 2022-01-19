import { Router } from 'express'

const router = Router();



router.get('/ping', (req, res) => {
    res.json({pong: true});
})

router.get('/random', (req, res) => {
    let randomNumber: number = Math.floor(Math.random() * 100)

    res.json({number: randomNumber}) 
})

router.get('/name/:name', (req, res) => {
    let name: string = req.params.name;
    res.json({name: name})
})

export default router;