const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jabrahamik@gmail.com',
        subject: 'Welcome to Task Manager',
        text: `Welcome to the App, ${name}. Let me know how you get along with the App`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jabrahamik@gmail.com',
        subject: 'Account deleted Successfully',
        text: `Hello ${name}, you account was the Task Manager App has been successfully deleted. If you don't 
        mind we would like to know why you deleted the account`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}