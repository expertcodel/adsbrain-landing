import { Client } from "@/component/Client";
import Image from "next/image";


export default async function CheckoutPage({params}) {

    const { slug } = await params;
    let courseDetail = {};
 
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses`, {

            method: 'POST',
            cache: 'no-store',
            body: JSON.stringify({ slug })
        })

        const res = await response.json();
        if (res.status) {
            courseDetail = res.coursedetail;
          
           
        }

    } catch (error) {

        console.log(error);
    }

   


    return (
        <>
            {/* Start Courses Details Area */}
            <div className="courses-details-area pb-100">
                <div className="courses-details-image">
                    <Image width={1920} height={500} src="/images/courses/course-details.jpg" alt="image" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="courses-details-desc">
                                <h5>
                                    Details
                                </h5>
                                <div className="cart-table table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Unit Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <span>
                                                       
                 <img  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/course/featured/${courseDetail?.image}`} alt="image" />
                                                    </span>
                                                </td>
                                                <td className="product-name">
                                                    <em>{courseDetail?.title}</em>
                                                </td>
                                                <td className="product-price">
                                                    <span className="unit-amount">&#8377; {courseDetail?.price_level_1}</span>
                                                </td>
                                            </tr>
                                         
                                         
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                       <Client amount1={parseFloat(courseDetail.price_level_1)} amount2={parseFloat(courseDetail.price_level_2)} amount3={parseFloat(courseDetail.price_level_3)} id={courseDetail.id} video_id={courseDetail.video_id} plan1={courseDetail.plan_1} plan2={courseDetail.plan_2} plan3={courseDetail.plan_3}/>
                    </div>
                </div>
            </div>
        </>
    )
}