import mongoose from "mongoose";


const connect =  async()=>{
   mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.4ysg0je.mongodb.net/${process.env.MONGO_DATABASE}`)
   .then(()=>{console.log("connected to mongoDb Atlas successfully")})
   .catch((e:any)=>{console.error(e)});
}

export default connect;