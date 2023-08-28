import express from 'express';
import userRouter from './users.js'
import cityRouter from './cities.js'
import itinerariesRouter from './itineraries.js';

let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.use ('/users',userRouter)
router.use ('/cities',cityRouter)
router.use ('/itineraries', itinerariesRouter)

export default router