
import Razorpay from "razorpay";
import { course_registrationModel } from "../../../models/course_registration.model";
import { book_registrationModel } from "../../../models/book_registration.model";
import { testseries_registrationModel } from "../../../models/test-series_registration.model";
function generate13DigitNumber() {
  const min = 1e12; // 1000000000000
  const max = 9.999999999999e12; // Just under 10 trillion
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}
export async function POST(req) {


  const {name,phone_number,email,amount,course_id,path} = await req.json();

  const course_registrationmodel = course_registrationModel();
  const book_registrationmodel = book_registrationModel();
  const testseries_registrationmodel = testseries_registrationModel();

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: amount * 100, // in paise
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {

    const order = await razorpay.orders.create(options);
    if (path === '/register-course') {
     
       const registration = await course_registrationmodel.create({
       name,phone_number,email,amount,course_id, currency_code: 'INR', registration_number: generate13DigitNumber(), learning_type: 'course', created_at: new Date(), actual_amount: amount
      
      })
      return Response.json({ order, id: registration.id,status:true});
    }
    else if (path === '/book-checkout') {

      const registration = await book_registrationmodel.create({
        name, phone_number, email, address, city, post_code, country, amount, book_id, currency_code: 'INR', created_at: new Date()

      })
      return Response.json({ order, id: registration.id,status:true});
    }
    else {

      const registration = await testseries_registrationmodel.create({
        name, phone_number, email, dob, address, city, post_code, country, designation, college_name, gender, amount, level, course_id, mode_of_study, currency_code: 'INR', registration_number: generate13DigitNumber(), learning_type: 'course', created_at: new Date(), actual_amount: amount

      })
      return Response.json({ order, id: registration.id,status:true});
    }

  } catch (err) {

    console.log(err);

    return new Response(
      JSON.stringify({ error: "Order creation failed", details: err.message,status:false}),
      { status: 500 }
    );
  }
}
