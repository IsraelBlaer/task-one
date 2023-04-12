import mongoose from "mongoose";
import config from 'config'


const connect =  async()=>{
   mongoose.connect(config.get<string>("dbUri"))
   .then(()=>{console.log("connected to mongoDb sucessfully")})
   .catch((e:any)=>{console.error(e)});
}

export default connect;