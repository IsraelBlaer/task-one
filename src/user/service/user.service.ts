import UserModel, { IUser } from "../model/user.model";



export async function createUser(userInput: IUser) {
    try {
        const user = await UserModel.create(userInput)
        return user
    }
    catch (e: any) {
        throw new Error(e)
    }
    
}


export async function validateUser({ email, password }: { email: string, password: string }) {
    
    const user = await UserModel.findOne({ email: email }) 
    
    if (!user) throw new Error("Invalid email or password")
    const isValid = await user.comparePassword(password)
     
    if (!isValid) throw new Error("Invalid email or password")
     
    
      //  return (omit(user.toJSON(), "password"))
  const newuser = {
    _id:user._id,
    name:user.name,
    email:user.email,
  }
  
  return newuser;
}

export async function fetchUserByEmail(email:string){

  const user = await UserModel.findOne({ email: email })

  if(!user) return true;

  return false;
}



  