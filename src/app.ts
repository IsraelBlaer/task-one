import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connect from './utils/db';
import userRoute from './user/routes/user.routes';
import resetPasswordRoute from './user/routes/resetPassword';


const app = express();
const PORT = process.env.PORT

app.use(express.json())

app.listen(PORT,async()=>{

    console.log(`app listening on http://${process.env.HOST}:${PORT}`)
    
    await connect()
    
    app.use('/api/user',userRoute)
    app.use('/api/user/reset-password',resetPasswordRoute)
    
});

