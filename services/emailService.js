const nodemailer = require('nodemailer');
async function sendMail({from,to,subject,text,html}){
    let transport = nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        port:process.env.MAIL_PORT,
        secure:false,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }
    })
    let info = await transport.sendMail({from:`EzShare <${from}>`,to:to,subject:subject,text:text,html:html});

}


module.exports = sendMail;