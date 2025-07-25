import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();

  const { name, contact, email, query } = body;

  const transporter = nodemailer.createTransport({
    service: "Gmail", // or another SMTP service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO, // your receiving email
    subject: `inquiry from ${name}`,
    html: `
        <div style="/* justify-content: center; */font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;max-width:600px;display:block;margin:0 auto;padding:20px;/* display: flex; *//* align-items: center; */">
            <div class="adM"></div>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;border-radius:3px;margin:0;border:none">
                <tbody>
                    <tr style="font-family:'Roboto',sans-serif;font-size:14px;margin:0">
                        <td style="font-family:'Roboto',sans-serif;box-sizing:border-box;color:#495057;font-size:14px;vertical-align:top;margin:0;padding:30px;border-radius:7px;background-color:#f1f1f1" valign="top">

                            <table width="100%" cellpadding="0" cellspacing="0" style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                <tbody>
                                    <tr style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0;width: 100%;">
                                        <td style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0 0 20px" valign="top">
                                            <div style="text-align:center;margin-bottom:15px">
                                                <img src="https://www.expertcodelab.com/assets/front/img/logo.png" alt="" height="79" width="205" class="CToWUd" data-bit="iit">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                        <td style="font-family:'Roboto',sans-serif;box-sizing:border-box;line-height:1.5;font-size:24px;vertical-align:top;margin:0;padding:0 0 10px;text-align:left;font-weight:500" valign="top">
                                            Inquiry From ${name.charAt(0).toUpperCase() + name.slice(1, name.length)}
                                        </td>
                                    </tr>
                                    <tr style="align-items: center;font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0;display: flex;/* align-content: center; */">
                                        <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:top;margin:0;padding:0 0 24px;text-align:left; width: 100%;" valign="top">

                                            <table width="100%" cellpadding="0" cellspacing="0" border="1" style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                <tr style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:middle;margin:0;padding:8px 16px; text-align:left; white-space: nowrap;">Name</td>
                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:middle;margin:0;padding:8px 16px; text-align:left">
                                                        ${name}
                                                    </td>
                                                </tr>
                                                <tr style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:middle;margin:0;padding:8px 16px; text-align:left; white-space: nowrap;">Contact Number</td>
                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:middle;margin:0;padding:8px 16px; text-align:left">
                                                        ${contact}
                                                    </td>
                                                </tr>
                                                <tr style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:middle;margin:0;padding:8px 16px; text-align:left; white-space: nowrap;">Email</td>
                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:middle;margin:0;padding:8px 16px; text-align:left">
                                                        ${email}
                                                    </td>
                                                </tr>
                                                <tr style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:middle;margin:0;padding:8px 16px; text-align:left; white-space: nowrap;">Message</td>
                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:middle;margin:0;padding:8px 16px; text-align:left">
                                                        ${query}
                                                    </td>
                                                </tr>
                                            </table>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="height: 20px; font-size: 0;">&nbsp;</td>
                                    </tr>
                                    <tr style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0;border-top:1px solid #b6b7b7;display: flex;">
                                        <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:top;margin:0;padding:0;text-align:left; width: 100%;" valign="top">
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                <tr>
                                                    <td style="color:#878a99;text-align:center;font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0;padding-top:15px" valign="top">
                                                        <p style="color:#000000; margin-bottom: 8px; font-size:18px;">Our Office</p>
                                                        <p style="margin 0;">C-50, Sector-2, Noida -201301 (India)</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:top;margin:0;padding:0 0 24px;text-align:left; width: 100%;" valign="top">
                                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                            <tr>
                                                                <td style="color:#878a99;text-align:center;font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0;" valign="top">
                                                                    <p style="color:#000000; margin-bottom: 8px; font-size:18px;">Call Center</p>
                                                                    <p style="margin 0;">+91 73037 98986</p>
                                                                </td>

                                                                <td style="color:#878a99;text-align:center;font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin:0;padding:0;" valign="top">
                                                                    <p style="color:#000000; margin-bottom: 8px; font-size:18px;">Contact Email</p>
                                                                    <p style="margin 0;"><a href="mailto:info@expertcodelab.com" target="_blank">info@expertcodelab.com</a></p>
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
            <div class="yj6qo"></div>
            <div class="adL"></div>
        </div>
    `
    // text: `Name: ${name}\nContact: ${contact}\nEmail: ${email}\nQuery: ${query}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
