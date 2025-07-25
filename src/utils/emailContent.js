// Email Content Component
export function generateWelcomeContent(name,download_url) {
    return `
        <tr>
            <td style="padding:0;Margin:0;padding-top:15px;padding-left:40px;padding-right:40px;background-color:#fff"
                align="left" bgcolor="#ffffff">
                <table cellpadding="0" cellspacing="0"
                    style="border-collapse:collapse;border-spacing:0"
                    width="100%">
                    <tbody>
                        <tr>
                            <td style="padding:0;Margin:0;width:520px"
                                align="center" valign="top">
                                <table cellpadding="0" cellspacing="0"
                                    style="border-collapse:collapse;border-spacing:0"
                                    width="100%" role="presentation">
                                    <tbody>
                                        <tr>
                                            <td style="padding:0;Margin:0;padding-bottom:10px"
                                                align="left">
                                                <p
                                                    style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px">
                                                    Dear ${name[0].toUpperCase() + name.slice(1, name.length)},
                                                    <br>
                                                    <br> Thank you for
                                                    Contacting adsbrain.in
                                                    <br>
                                                    <br> here is your download link :
                                                    <br>
                                                    <a href="${download_url}" target="_blank">Download</a>
                                                </p>
                                            </td>
                                        </tr>
                                      
                                        <tr>
                                            <td style="padding:0;Margin:0;padding-bottom:10px"
                                                align="left">
                                                <p
                                                    style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px">
                                                    Our platform is
                                                    accessible anytime
                                                    through your browser—no
                                                    app needed! If you need
                                                    any assistance, feel
                                                    free to reach us at:
                                                    <a href="mailto:expertcodelab@gmail.com"
                                                        style="text-decoration:none;color:#1650e2;font-size:14px"
                                                        target="_blank">expertcodelab@gmail.com</a>
                                                </p>
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

        <tr>
            <td style="padding:0;Margin:0;padding-left:40px;padding-right:40px;background-color:#fff"
                align="left" bgcolor="#ffffff">
                <table cellpadding="0" cellspacing="0"
                    style="border-collapse:collapse;border-spacing:0"
                    width="100%">
                    <tbody>
                        <tr>
                            <td style="padding:0;Margin:0;width:520px"
                                align="left">
                                <table cellpadding="0" cellspacing="0"
                                    style="border-collapse:collapse;border-spacing:0"
                                    width="100%" role="presentation">
                                    <tbody>
                                        <tr>
                                            <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"
                                                align="left">
                                                <p
                                                    style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px">
                                                    We're here to support
                                                    your learning and
                                                    professional
                                                    growth—every step of the
                                                    way.
                                                    <br>
                                                    <br>
                                                </p>
                                                <p
                                                    style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px">
                                                    <b>Stay informed, stay
                                                        empowered.</b>
                                                </p>
                                                <p
                                                    style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px">
                                                    <b>– Team
                                                        adsbrain.in</b>
                                                </p>
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
        <tr>
            <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-color:#fff"
                align="left" bgcolor="#ffffff">
                <table cellpadding="0" cellspacing="0"
                    style="border-collapse:collapse;border-spacing:0"
                    width="100%">
                    <tbody>
                        <tr>
                            <td style="padding:0;Margin:0;width:560px"
                                align="left">
                                <table cellpadding="0" cellspacing="0"
                                    style="border-collapse:collapse;border-spacing:0"
                                    width="100%" role="presentation">
                                    <tbody>
                                        <tr>
                                            <td style="padding:0;Margin:0"
                                                align="center" height="15">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>`;
}