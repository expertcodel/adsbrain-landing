"use server"
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { course_registrationModel } from '../../models/course_registration.model'
import { generateEmailHeader } from '../../../utils/emailHeader.js'
import { generateEmailFooter } from '../../../utils/emailFooter.js'
import { generateWelcomeContent } from '../../../utils/emailContent.js'

const transport = nodemailer.createTransport({

  service: 'gmail',
  auth: {

    user: "rohitkumarchau656@gmail.com",
    pass: "pihc knoi rbca lrif"

  }
})



const sendMail = async (name, email, download_url) => {

  const config = {

    from: { name: "adsbrain.in", address: 'rohitkumarchau656@gmail.com' },
    to: email,
    subject: "Thankyou for contacting adsbrain.in",
    html: `<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Welcome Emailer</title>
</head>

<body>
    <div style="width:100%;font-family:arial,'helvetica neue',helvetica,sans-serif;padding:0;Margin:0">
        <div style="background-color:#fff">
            <table cellpadding="0" cellspacing="0"
                style="border-collapse:collapse;border-spacing:0;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#fff"
                width="100%">
                <tbody>
                    <tr>
                        <td style="padding:0;Margin:0" valign="top">
                            <table cellpadding="0" cellspacing="0"
                                style="border-collapse:collapse;border-spacing:0;table-layout:fixed!important;width:100%"
                                align="center">
                                <tbody>
                                    <tr>
                                        <td style="padding:0;Margin:0;background-color:#f7f7f7" align="center"
                                            bgcolor="#f7f7f7">
                                            <table cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:600px"
                                                align="center">
                                                <tbody>
                                                    ${generateEmailHeader()}
                                                    ${generateWelcomeContent(name,download_url)}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            ${generateEmailFooter()}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>`

  }

  try {

    await transport.sendMail(config);
    return true;

  } catch (error) {

    console.log(error);
    return false;
  }

}



export async function POST(request) {
 
  const { name, email, contact_number ,download_url,plans} = await request.json();
  const course=course_registrationModel()
  
  try {

  const response = await sendMail(name, email, download_url );
 
  if (!response) {
    return NextResponse.json({ status: false, message:"Please send again!"});
  }

  await course.update({download_url,download_status:[{allowed:0,url:plans.plan1},{allowed:0,url:plans.plan2},{allowed:0,url:plans.plan3}]},{where:{email}})


  return NextResponse.json({ status: true, message: "successfully sent!" });

  } catch (error) {

    console.log(error);
    return NextResponse.json({ status: false, message: "some error occured!" });

  }

}