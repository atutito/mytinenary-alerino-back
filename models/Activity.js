import {model,Schema} from "mongoose";

let collection = "activities";
let schema = new Schema ({
    name: {type:String,required:true},
    photo: {type:String},
    itinerary_id: {type:String,required:true, ref:'itineraries'},
})

let Activity = model(collection,schema)
export default Activity