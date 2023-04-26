import nodemailer from 'nodemailer'

const transPort = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.COMPANY_EMAIL,
      pass: process.env.EMAIL_PASS
    }
})


export async function sendResetPasswordEmail(code:number, recievereMail:string, name:string){
    const mailOptions = {
        from:process.env.COMPANY_EMAIL ,
        to: recievereMail,
        subject: 'Password Reset Request',
        text: `Dear ${name}, your six digit reset otp code is ${code}. code expires in 5 minutes, do not disclose code to anyone`,
      };
      try {
        transPort.sendMail(mailOptions)
        console.log('email sent sccesfully')
      } catch (error:any) {
        throw new Error(error)
        
      }      
}

export async function sendWelcomeEmail(recievereMail:string, name:string){
  const mailOptions = {
      from:process.env.COMPANY_EMAIL ,
      to: recievereMail,
      subject: 'Welcome to our platform!',
      text: `Dear ${name}, We are thrilled to have you on our platform! `,
    };
    try {
      transPort.sendMail(mailOptions)
      console.log('email sent sccesfully')
    } catch (error:any) {
      throw new Error(error)
      
    }      
}