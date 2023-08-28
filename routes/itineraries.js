import {Router} from 'express';
import create from '../controllers/itineraries/create.js';
import read from '../controllers/itineraries/read.js';
import readone from '../controllers/itineraries/readOne.js';
import update from '../controllers/itineraries/update.js';
import destroy from '../controllers/itineraries/destroy.js';

let itinerariesRouter = Router();

itinerariesRouter.post('/', create )
itinerariesRouter.get('/', read)
itinerariesRouter.get('/:id',readone)
itinerariesRouter.put('/:id', update)
itinerariesRouter.delete('/:id', destroy)

export default itinerariesRouter