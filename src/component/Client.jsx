"use client"
import Form from "@/component/Form";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

export function Client({ amount1, amount2, amount3, id, video_id, plan1, plan2, plan3 }) {

    const [totalAmount, setTotalamount] = useState(amount1)
    const [checkAmount, setCheckamount] = useState({ plan1: true, plan2: false, plan3: false })
    const [checkPlans, setCheckplans] = useState({ plan1: plan1, plan2: null, plan3: null })
    const Amount2 = () => {

        const price2 = document.getElementById('plan-2').checked;
        let updatedcheckAmount = { ...checkAmount };
        let updatedPlans = { ...checkPlans };
        let price = totalAmount
        if (price2) {
            price = totalAmount + amount2
            updatedcheckAmount['plan2'] = true;
            updatedPlans['plan2'] = plan2;
        }
        else {

            price = Math.abs(totalAmount - amount2)
            updatedcheckAmount['plan2'] = false;
            updatedPlans['plan2'] = null;
        }



        setTotalamount(price);
        setCheckamount(updatedcheckAmount)
        setCheckplans(updatedPlans);
    }

    const Amount3 = () => {


        const price3 = document.getElementById('plan-3').checked;
        let price = totalAmount
        let updatedcheckAmount = { ...checkAmount };
        let updatedPlans = { ...checkPlans };
        if (price3) {
            price = totalAmount + amount3
            updatedcheckAmount['plan3'] = true;
            updatedPlans['plan3'] = plan3;
        }
        else {
            price = Math.abs(totalAmount - amount3)
            updatedcheckAmount['plan3'] = false;
            updatedPlans['plan3'] = null;
        }

        setTotalamount(price);
        setCheckamount(updatedcheckAmount)
        setCheckplans(updatedPlans);
    }

    const Amount1 = () => {

        const price1 = document.getElementById('plan-1').checked;
        let price = totalAmount
        let updatedcheckAmount = { ...checkAmount };
        let updatedPlans = { ...checkPlans };
        if (price1) {
            price = totalAmount + amount1
            updatedcheckAmount['plan1'] = true;
            updatedPlans['plan1'] = plan1;
        }
        else {
            price = Math.abs(totalAmount - amount1)
            updatedcheckAmount['plan1'] = false;
            updatedPlans['plan1'] = null;
        }

        setTotalamount(price);
        setCheckamount(updatedcheckAmount)
        setCheckplans(updatedPlans);
    }


    return (


        <div className="col-lg-4 col-md-12">
            <div className="courses-details-info">
                <div className="image">
                    <img width={750} height={500} src={`https://img.youtube.com/vi/${video_id}/mqdefault.jpg`} alt="image" />
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="link-btn popup-youtube" />
                    {/* <a href="/" className="link-btn popup-youtube" /> */}
                    <div className="content">
                        <em><FontAwesomeIcon icon={faPlay} /></em>
                        <span>Course Preview</span>
                    </div>
                </div>
                <div className="btn-box order-details">
                    <div className="payment-box p-0 bg-blank">
                        <label className="mb-2">Select Course Level</label>
                        <div className="payment-method">
                            <div className="col-lg-12 col-md-12">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="plan-1" checked={checkAmount.plan1} onChange={Amount1} />
                                    <label className="form-check-label" htmlFor="plan-1">
                                        Plan 1
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="plan-2" onChange={Amount2} checked={checkAmount.plan2} />
                                    <label className="form-check-label" htmlFor="plan-2">
                                        Plan 2
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="plan-3" onChange={Amount3} checked={checkAmount.plan3} />
                                    <label className="form-check-label" htmlFor="plan-3">
                                        Plan 3
                                    </label>
                                </div>
                            </div>

                        </div>

                        <div className="cart-totals p-0 m-0">
                            <ul className="mb-0 mt-3">
                                <li>
                                    Total <span>&#8377; {totalAmount}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-form mt-3">
                <h2>Billing Details</h2>
                <Form price={totalAmount} course_id={id} checkPlans={checkPlans}/>

            </div>

            <div className="modal fade customVideoModal" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <iframe src={`https://www.youtube.com/embed/${video_id}?autoplay=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



