import {model,Schema,Types} from "mongoose";

let collection = "activities";
let schema = new Schema ({
    itinerary_id: {type:Types.ObjectId,ref:'itineraries',required:true},
    name: {type:String,required:true},
    photo: {type:String},
})

let Activity = model(collection,schema)
export default Activity