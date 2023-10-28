import mongoose, {Schema, model} from "mongoose";

// a schema is a json document that allows us to define the shape and content of documents in a collection; 
const UserSchema = new Schema({
  username: {type: String, required : true, unique: true, min: 4 }, 
  password: {type: String, required: true}, 
}); 

const User = model('User', UserSchema);

export default User; // Export UserModel as the default export