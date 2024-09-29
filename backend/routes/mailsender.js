
import nodemailer from 'nodemailer'; 
  
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vishalqw78@gmail.com',
        pass: 'tkgcewknsvifcgge'
    }
}); 
 const sendVerificationEmail =  async (toEmail, url) => {
    const mailConfigurations = {
        from: 'vishalqw78@gmail.com', // Your sender email
        to: toEmail,
        subject: 'Email Verification',
        text: `Hi! There, You have recently visited 
               our website and entered your email.
               Please follow the given link to verify your email
               ${url} 
               Thanks`
    };

    try {
        const info = await transporter.sendMail(mailConfigurations);
        console.log('Email Sent Successfully');
        console.log(info);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
export default sendVerificationEmail;