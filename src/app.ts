import express from 'express'
import config from 'config'
import connect from './utils/db';
import userRoute from './routes/user.routes';


const app = express();
const PORT = config.get<number>("port");

app.use(express.json())

app.listen(PORT,async()=>{

    console.log(`connected to port ${PORT}`)
   
    await connect()

    app.use('/api/user',userRoute)

});

