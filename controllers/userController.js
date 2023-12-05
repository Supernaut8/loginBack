const bcryptjs = require('bcryptjs')
const Users = require('../models/userModel')
const User = require('../models/userModel')


const { google } = require("googleapis")
const Oauth2 = google.auth.OAuth2
const crypto = require("crypto")
const nodemailer = require("nodemailer")
const jwt = require("jsonwebtoken")
// const nodemailer = require('nodemailer') 
// const {google} = require ('googleapis')
// const OAuth2 = google.auth.OAuth2



// const sendMail = async (mail, uniqueString) => {
//     const myOAuth2Client = new OAuth2(
//         process.env.GOOGLE_CLIENTID,
//         process.env.GOOGLE_SECRET,
//         "https://developers.google.com/oauthplayground"
//     )

//     myOAuth2Client.setCredentials(refresh_token:process.env.GOOGLE_REFRESHTOKEN)

//     const accesToken = myOAuth2Client.getAccessToken()

//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth:{
//             user:"air.dance88@gmail.com",
//             type: "OAuth2",
//             clientId: process.env.GOOGLE_CLIENTID,
//             clientSecret: process.env.GOOGLE_SECRET,
//             refreshToken: process.env.GOOGLE_REFRESHTOKEN,
//             accessToken: accesToken
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//     })

//     const mailOptions = {
//         from:"air.dance88@gmail.com",
//         to: email,
//         subject: "Validacion de mail",
//         html:`
//         <div>
//             <h1><a> href=http://localhost:5000/api/users/auth/verifyEmail/${uniqueString}</a></h1>   
//         </div>
//         `
//     }

//     transporter.sendMail(mailOptions, function(error, response)) {
//         if(error){console.log(error)}
//         else(console.log("Mensaje enviado"))
//     }
// }



const sendEmail = async (mailUser, uniqueString) => {

    //crea/configura un oauth2
    const oauth2Client = new Oauth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    )
    //config el token de actualizacion en el oauth2
    oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_TOKEN_REFRESH })

    const accessToken = oauth2Client.getAccessToken()//await agregado por chatgpt
    const transporter = nodemailer.createTransport({

        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "diegodesarrollotest@gmail.com",//desde donde se enviaran los mails a los usuarios
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            refreshToken: process.env.GOOGLE_TOKEN_REFRESH,
            accessToken: accessToken
        },
        tls: { rejectUnauthorized: false }//no verif certificado SSL/TLS

    });


    const mail = {
        from: "diegodesarrollotest@gmail.com",
        to: mailUser,
        subject: "Email validation. Doctor Finder",
        html:
            `
            <!DOCTYPE html>
            <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
            
            <head>
                <title></title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
                <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet" type="text/css"><!--<![endif]-->
                <style>
                    * {
                        box-sizing: border-box;
                    }
            
                    body {
                        margin: 0;
                        padding: 0;
                    }
            
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: inherit !important;
                    }
            
                    #MessageViewBody a {
                        color: inherit;
                        text-decoration: none;
                    }
            
                    p {
                        line-height: inherit
                    }
            
                    .desktop_hide,
                    .desktop_hide table {
                        mso-hide: all;
                        display: none;
                        max-height: 0px;
                        overflow: hidden;
                    }
            
                    .image_block img+div {
                        display: none;
                    }
            
                    @media (max-width:620px) {
                        .desktop_hide table.icons-inner {
                            display: inline-block !important;
                        }
            
                        .icons-inner {
                            text-align: center;
                        }
            
                        .icons-inner td {
                            margin: 0 auto;
                        }
            
                        .mobile_hide {
                            display: none;
                        }
            
                        .row-content {
                            width: 100% !important;
                        }
            
                        .stack .column {
                            width: 100%;
                            display: block;
                        }
            
                        .mobile_hide {
                            min-height: 0;
                            max-height: 0;
                            max-width: 0;
                            overflow: hidden;
                            font-size: 0px;
                        }
            
                        .desktop_hide,
                        .desktop_hide table {
                            display: table !important;
                            max-height: none !important;
                        }
                    }
                </style>
            </head>
            
            <body style="margin: 0; background-color: #fff; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
                <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;">
                    <tbody>
                        <tr>
                            <td>
                                <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f6f5;">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 600px; margin: 0 auto;" width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                <table class="empty_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                    <tr>
                                                                        <td class="pad">
                                                                            <div></div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f6f5;">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #072b52; color: #000; width: 600px; margin: 0 auto;" width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                    <tr>
                                                                        <td class="pad" style="text-align:center;width:100%;">
                                                                            <h1 style="margin: 0; color: #1e0e4b; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 42px; font-weight: 700; letter-spacing: 8px; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><span style="color: #f5f9f9;"><span class="tinyMce-placeholder">&nbsp;Doctor</span> Finder</span></h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <div class="spacer_block block-3" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f6f5;">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 600px; margin: 0 auto;" width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                <div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;">&#8202;</div>
                                                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                    <tr>
                                                                        <td class="pad" style="text-align:center;width:100%;">
                                                                            <h1 style="margin: 0; color: #072b52; direction: ltr; font-family: 'Lora', Georgia, serif; font-size: 50px; font-weight: normal; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>thank you.</strong></h1>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f6f5;">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 600px; margin: 0 auto;" width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                <div class="spacer_block block-1" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                                                                <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                    <tr>
                                                                        <td class="pad" style="padding-bottom:10px;padding-left:15px;padding-right:15px;padding-top:10px;">
                                                                            <div style="color:#222222;font-family:'Lato',Tahoma,Verdana,Segoe,sans-serif;font-size:16px;line-height:150%;text-align:center;mso-line-height-alt:24px;">
                                                                                <p style="margin: 0;">We are committed to providing the highest quality medical care to our patients. We take pride in being your healthcare provider and are here to deliver the best possible care. We appreciate your trust in Doctor Finder and look forward to continuing to provide you with the exceptional medical attention you deserve.</p>
                                                                                <p style="margin: 0;">&nbsp;</p>
                                                                                <p style="margin: 0;">Please confirm your email by clicking <a href=http://localhost:5000/api/users/auth/verifyEmail/${uniqueString} >here</a>.</p>
                                                                                <p style="margin: 0; word-break: break-word;"><span>We would like to take this time to thank you for your accomodation</span></p>
                                                                                <p style="margin: 0; word-break: break-word;"><span>and we hope to see you again soon.</span></p>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <div class="spacer_block block-3" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f6f5;">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #072b52; color: #000; width: 600px; margin: 0 auto;" width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                    <tr>
                                                                        <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                            <div style="color:#f7f6f5;font-family:'Lato',Tahoma,Verdana,Segoe,sans-serif;font-size:12px;line-height:120%;text-align:left;mso-line-height-alt:14.399999999999999px;">&nbsp;</div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                    <tr>
                                                                        <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                                                            <div style="color:#f7f6f5;font-family:'Lato',Tahoma,Verdana,Segoe,sans-serif;font-size:12px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
                                                                                <p style="margin: 0; word-break: break-word;"><a title="http://www.example.com/" href="http://www.example.com/" target="_blank" style="text-decoration: underline; color: #f7f6f5;" rel="noopener">Terms & Conditions</a></p>
                                                                                <p style="margin: 0; word-break: break-word;">Integer eget nibh vel massa gravida ullamcorper. Sed a viverra ante. Nullam posuere pellentesque lectus, nec vehicula felis rutrum ac. Maecenas porta facilisis turpis, eget imperdiet purus.</p>
                                                                                <p style="margin: 0; word-break: break-word;"><span style="color: #c0c0c0;"><br><br></span></p>
                                                                                <p style="margin: 0; word-break: break-word;">© Copyright 2021. YourBrand All Rights Reserved.</p>
                                                                                <p style="margin: 0; word-break: break-word;"><a title="http://www.example.com" href="http://www.example.com/" target="_blank" rel="noopener" style="color: #f7f6f5;">Manage Preferences</a> | <a title="http://www.example.com" href="http://www.example.com/" target="_blank" rel="noopener" style="color: #f7f6f5;">Unsubscribe</a></p>
                                                                                <p style="margin: 0; word-break: break-word;"><span style="color: #c0c0c0;">&nbsp;</span></p>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 600px; margin: 0 auto;" width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                                <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                    <tr>
                                                                        <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                                <tr>
                                                                                    <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                        <!--[if !vml]><!-->
                                                                                        <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
                                                                                            <tr>
                                                                                                <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Beefree Logo" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                                                                                <td style="font-family: 'Inter', sans-serif; font-size: 15px; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="http://designedwithbeefree.com/" target="_blank" style="color: #1e0e4b; text-decoration: none;">Designed with Beefree</a></td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table><!-- End -->
            </body>
            
            </html>
        `

    }

    transporter.sendMail(mail, function (error, response) {

        if (error) {
            console.log(error)

        } else {
            console.log("mensaje enviado a usuario")
        }
    })
}

const userController = {
    SignUp: async (req, res) => {
        const { fullName, email, password, from, aplication } = req.body.userData
        const contraseñaHash = bcryptjs.hashSync(password, 10)

        const emailVerify = false
        const uniqueString = crypto.randomBytes(15).toString("hex")
        try {
            const userExist = await Users.findOne({ email })

            if (userExist) {
                if (userExist.from.indexOf(from) !== -1) {
                    res.json({
                        success: false,
                        from: from,
                        message: "You have already signed up with " + from + " please sign in"
                    })
                }
                else {
                    userExist.from.push(from)
                    userExist.password.push(contraseñaHash)

                    await userExist.save()

                    res.json({
                        success: true,
                        from: from,
                        message: "the new method was added: " + from
                    })
                }
            }
            else {
                const newUser = new User({
                    fullName,
                    email,
                    password: [contraseñaHash],
                    from: [from],
                    aplication,
                    emailVerify,
                    uniqueString
                })

                if (from === "signUp-form") {
                    sendEmail(email, uniqueString)
                    await newUser.save()
                    res.json({
                        success: true,
                        from: from,
                        message: "review your email to validate sing up"
                    })
                } else {

                    newUser.emailVerify = true
                    await newUser.save()

                    res.json({
                        success: true,
                        from: from,
                        message: "Congratulations, we created your user with" + from,
                    })
                }

            }
        } catch (error) {
            console.log(error, "error en controlador signup")
            res.json({ sucess: false, message: "Something has gone wrong, try it in a few minutes." })
        }
    },
    SignIn: async (req, res) => {

        const { email, password, from } = req.body.logedUser
        try {
            const usuario = await Users.findOne({ email }).populate("planesSuscrip")

            if (!usuario) {
                res.json({
                    success: false,
                    from: from,
                    message: "You have not signed up with this email, do so before signing in"
                })
            } else {
                const contraseñaCoincide = usuario.password.filter(pass => bcryptjs.compareSync(password, pass))
                const dataUser = {
                    id: usuario._id,
                    fullName: usuario.fullName,
                    email: usuario.email,
                    from: from,
                    planesSuscrip: usuario.planesSuscrip
                }

                if (from !== 'signUp-form') {
                    if (contraseñaCoincide.length > 0) {
                        const tokenUser = jwt.sign({ ...dataUser }, process.env.SECRET_TOKEN, { expiresIn: "1h" })
                        res.json({
                            success: true,
                            from,
                            response: { dataUser, tokenUser },
                            message: "Welcome again " + dataUser.fullName
                        })
                    } else {
                        const contraseñaHash = bcryptjs.hashSync(password, 10)
                        usuario.from.push(from)
                        usuario.password.push(contraseñaHash)

                        await usuario.save()
                        const tokenUser = jwt.sign({ ...dataUser }, process.env.SECRET_TOKEN, { expiresIn: "1h" })
                        res.json({
                            success: true,
                            from,
                            response: { dataUser, tokenUser },
                            message: "We add the method " + from
                        })
                    }
                } else {
                    if (contraseñaCoincide.length > 0) {
                        const tokenUser = jwt.sign({ ...dataUser }, process.env.SECRET_TOKEN, { expiresIn: "1h" })
                        res.json({
                            success: true,
                            from,
                            response: { dataUser, tokenUser },
                            message: "Welcome again " + dataUser.fullName
                        })
                    } else {
                        res.json({
                            success: false,
                            from,

                            message: "Username or password do not match"
                        })
                    }
                }
            }
        } catch (error) {
            res.json({
                sucess: false,
                message: "Oops something went wrong, try again in a few minutes",
                response: error
            })
        }
    },
    verifyMail: async (req, res) => {
        const { string } = req.params
        const user = await Users.findOne({ uniqueString: string })


        try {
            if (user) {
                user.emailVerify = true
                await user.save()

                res.redirect("http://localhost:3000/signIn")
                // res.json({
                //     success: true,
                //     from: "verify",
                //     message: "Email verificado correctamente"
                // })

            } else {
                res.json({
                    success: false,
                    from: "verify",
                    message: "User email could not be verified"
                })
            }
        } catch (err) {
            console.log(err, " error catcheado en signIn")
        }
    },
    verifyTokenSession: async (req, res) => {
        const user = await User.findOne({ _id: req.user.id }).populate("planesSuscrip")
        if (req.user && user !== null) {
            console.log("renovar token con planes:", user)
            res.json({
                success: true,
                response: {
                    id: req.user.id,
                    fullName: req.user.fullName,
                    email: req.user.email,
                    planesSuscrip: user.planesSuscrip,
                    // from: "token",
                    aplication: req.user.aplication
                },
                message: "Welcome " + req.user.fullName
            })
        } else {
            res.json({
                success: false,
                message: "Session expired. Please sign in again"
            })
        }

    },
    suscripcionPlan: async (req, res) => {

        const { idPlan, idUser } = req.body.dataSuscripcion
        console.log("se respondio", idUser, idPlan)
        const userToUpDate = await User.findOne({ _id: idUser }).populate("planesSuscrip")
        
        if (userToUpDate !== null) {
            const planExist = userToUpDate.planesSuscrip.find((plan => plan.equals(idPlan)))

            if (!planExist) {
                userToUpDate.planesSuscrip.push(idPlan);
                await userToUpDate.save();
                const userWithPlanes = await User.findOne({ _id: idUser }).populate("planesSuscrip");

                res.json({
                    success: true,
                    from: "suscription",
                    response: {
                        dataUser: {
                            fullName: userWithPlanes.fullName,
                            email: userWithPlanes.email,
                            id: userWithPlanes._id,
                            planesSuscrip: userWithPlanes.planesSuscrip,
                        },
                    },
                    message: "Congratulations, successful subscription",
                });
            } else {
                res.json({
                    success: false,
                    from: "suscription",
                    response: { dataUser: userToUpDate },
                    message: "You already have this subscription"
                });
            }
        } else {
            res.json({
                success: false,
                from: "suscription",
                response: { dataUser: userToUpDate },
                message: "Fail with subscription",
            });
        }
    },

}

module.exports = userController;


