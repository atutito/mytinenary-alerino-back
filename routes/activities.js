import {Router} from 'express';
import read from '../controllers/activities/read.js';

let activitiesRouter = Router();

activitiesRouter.get('/', read)

export default activitiesRouter