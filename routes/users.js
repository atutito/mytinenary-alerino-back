import express from 'express';
import passport from '../middlewares/passport.js';
import updatePassHash from '../middlewares/updatePassHash.js'
import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js'
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';

let router = express.Router();

router.post('/signup', create)
router.get('/', read)
router.get('/:user_id', readOne)
router.put('/', passport.authenticate("jwt",{ session:false }), updatePassHash, update)
router.delete('/:id', destroy)

export default router