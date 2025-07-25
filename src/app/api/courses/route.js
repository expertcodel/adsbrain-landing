import { NextResponse } from "next/server";
import { courseModel } from "../../models/course.model";
import { course_categoryModel } from "../../../app/models/course_category.model";
import { connectTodb } from '../../../utils/database';
import { Op } from "sequelize";
export async function GET(request) {

  const input = new URL(request.url).searchParams;
  const name = input.get('name');
  const page = input.get('page');
  const course_name = input.get('course_name');
  const sort = input.get('sort');
  const hours = input.get('hours');
  const coursemodel = courseModel();
  const categorymodel = course_categoryModel();



  try {

    if (course_name === 'null') {
      const { rows, count } = await coursemodel.findAndCountAll({ where: { status: 1, [Op.or]: { title: { [Op.like]: `%${name}%` } }, duration: { [Op.gte]: hours } }, offset: (page - 1) * 12, limit: 12, attributes: ['id', 'image', 'slug', 'title', 'sub_title'], order: sort === "1" ? [['created_at', 'DESC']] : sort === "0" ? [['created_at', 'ASC']] : [['serial_number', 'ASC']], });
      return NextResponse.json({ status: true, courselist: rows, totalItems: count });
    }
    else {

      const { id } = await categorymodel.findOne({ where: { slug: course_name }, attributes: ['id'] })
      const { rows, count } = await coursemodel.findAndCountAll({ where: { course_category_id: id, duration: { [Op.gt]: hours }, status: 1, [Op.or]: { title: { [Op.like]: `%${name}%` } } }, offset: (page - 1) * 12, limit: 12, attributes: ['id', 'image', 'slug', 'title', 'sub_title'], order: sort === "1" ? [['created_at', 'DESC']] : sort === "0" ? [['created_at', 'ASC']] : [['serial_number', 'ASC']], });
      return NextResponse.json({ status: true, courselist: rows, totalItems: count });

    }



  } catch (error) {

    console.log(error, "error");
    return NextResponse.json({ status: false, message: "some error occured" });

  }
}


export async function POST(request) {

  const { slug } = await request.json();
  const coursemodel = courseModel();
  
  try {

    const coursedetail = await coursemodel.findOne({
      where: { slug }

    });

    return NextResponse.json({
      status: true,
      coursedetail
    });



  } catch (error) {

    console.log(error, "error");
    return NextResponse.json({ status: false, message: "some error occured" });

  }
}

