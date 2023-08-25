import {Router} from 'express';
import create from '../controllers/itineraries/create.js';
import read from '../controllers/itineraries/read.js';
import readone from '../controllers/itineraries/readOne.js';
import update from '../controllers/itineraries/update.js';
import destroy from '../controllers/itineraries/destroy.js';

let itineraryRouter = Router();

itineraryRouter.post('/', create )
itineraryRouter.get('/', read)
itineraryRouter.get('/:itinerary_id',readone)
itineraryRouter.put('/:u_id', update)
itineraryRouter.delete('/:id', destroy)

export default itineraryRouter