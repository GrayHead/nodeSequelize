let mailer = require('nodemailer');
module.exports = async (mail) => {

    let transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ss.zhuravlov@gmail.com',
            pass: '1111'

        }
    });

    let info = await transport.sendMail({
        from: 'ss.zhuravlov@gmail.com',
        to: mail,
        subject: 'our service mail',
        html: `<a href ='http://localhost:3000/someUrlToconfirm'>confirm </a>`

    });


    return info.response;
};
