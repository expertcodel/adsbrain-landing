import { NextResponse } from "next/server";
import { bookModel } from "../../models/book.model";
import { testimonialModel } from "../../models/testimonial.model";
import { courseModel } from "../../models/course.model";
import { connectTodb } from "../../../utils/database";
export async function GET() {

    const bookmodel = bookModel();
    const testimonial = testimonialModel();
    const course = courseModel();
    const connection = connectTodb();
    try {

//bookmodel.findAll({ limit: 4, attributes: [`id`, `description`, `title`, `image`, `publish_date`, `author`, `slug`], order: [['created_at', 'DESC']] })
//connection.query(`SELECT * FROM sliders ORDER BY serial_number ASC`)

        const data = await Promise.all([course.findAll({ offset:0,limit: 5, where: { status: 1 }, order: [['serial_number', 'ASC']], attributes: ['id', 'image', 'slug', 'title', 'sub_title'] }),course.findAll({ offset:5,limit: 15, where: { status: 1 }, order: [['serial_number', 'ASC']], attributes: ['id', 'image', 'slug', 'title', 'sub_title'] }), testimonial.findAll({ limit: 5, attributes: ['id', 'image', 'name', 'rank', 'comment'], order: [['serial_number', 'ASC']] }),course.findAll({ offset:10,limit: 5, where: { status: 1 }, order: [['serial_number', 'ASC']], attributes: ['id', 'image', 'slug', 'title', 'sub_title'] })]);
       

        return NextResponse.json({ status: true, sliderlist: data[0], booklist: data[1], testimoniallist: data[2],courselist: data[3]});

    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}