import express from 'express';
import create from '../controllers/cities/create.js';
import read from '../controllers/cities/read.js';
import readone from '../controllers/cities/readOne.js';
import update from '../controllers/cities/update.js';
import destroy from '../controllers/cities/destroy.js';

let cityRouter = express.Router();

cityRouter.post('/', create )
cityRouter.get('/', read)
cityRouter.get('/:city_id',readone)
cityRouter.put('/:u_id', update)
cityRouter.delete('/:id', destroy)

export default cityRouter