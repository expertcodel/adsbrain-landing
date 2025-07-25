import { NextResponse } from "next/server";
import { course_registrationModel } from "../../models/course_registration.model";

export async function GET(request) {


    const input = new URL(request.url).searchParams;
    const email = decodeURIComponent(input.get('email'));
    const download_url = decodeURIComponent(input.get('url'));
    const course_registrationmodel = course_registrationModel();
 
    try {

        const downloaddetail = await course_registrationmodel.findOne({
            where: { email ,download_url}
        });

        if (downloaddetail) {

            return NextResponse.json({
                status: true,
                downloaddetail
            });
        }

        return NextResponse.json({ status: false, message: "not found" });



    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}

export async function POST(request) {

    const { email, download_url, download_status } = await request.json();
    const course_registrationmodel = course_registrationModel();

    try {

        await course_registrationmodel.update({ download_status }, {
            where: { email,download_url:decodeURIComponent(download_url) }

        });

        return NextResponse.json({ status: true, message: "updated successfully" });

    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}

