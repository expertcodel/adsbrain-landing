"use client"
import React from 'react'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState,useEffect } from "react";
function Download({ download_url, email, downloadDetail }) {

    const [plans, setPlans] = useState(JSON.parse(downloadDetail.download_status));
    const [completed, setCompleted] = useState(-1);
    useEffect(() => {
        let flag = true;
        for (let i = 0; i < plans.length; i++) {
            if (plans[i].url !== 'null' && plans[i].allowed === 0) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            setCompleted(0);
        }
        else {
            setCompleted(1);
        }
    }, [])

    const handleClick = async (i, e) => {


        const updatedPlan = [...plans];
        if (updatedPlan[i].allowed) {
            e.preventDefault(); // Already disabled
            return;
        }

        // Add to disabled list
        updatedPlan[i].allowed = 1;
        setPlans(updatedPlan);
        let flag = true;
        for (let i = 0; i < updatedPlan.length; i++) {
            if (updatedPlan[i].url !== 'null' && updatedPlan[i].allowed === 0) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            setCompleted(0);
        }
        else {
            setCompleted(1);
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/downloads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                email: decodeURIComponent(email || ''),
                download_url,
                download_status: updatedPlan
            }),
        });

        const res = await response.json();
        if (res.status) {
            window.open(url, "_blank"); // Open in new tab
        }


        e.preventDefault(); // Prevent default <a> behavior
    };


    return (
        <>
            {/* Thank you */}
            <section className="sectionSpace thankyouPage bg-fef8ef">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <div className="wrapper-1">
                                    <div className="wrapper-2">
                                        <h1>Downl<span><FontAwesomeIcon icon={faThumbsUp} className="bounceIcon" /></span>ad</h1>
                                        <h4>
                                            {
                                                completed === -1 || completed === 0 ? 
                                                "Here is your download url." : 
                                                "You already downloaded this files"
                                            }
                                        </h4>
                                        {/* <p>
                                                Here is your downloads url
                                            </p> */}
                                        <table className='table table-bordered'>
                                            <thead>
                                                <tr>
                                                    <th>Sr. No.</th>
                                                    <th>Item Name</th>
                                                    <th>Item Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {plans.map((plan, index) =>
                                                    plan.url !== 'null' && (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>plan {index + 1}</td>
                                                            <td>
                                                                <a
                                                                    href={plan.url}
                                                                    onClick={(e) => handleClick(index, e)}
                                                                    target='_blank'
                                                                    style={{
                                                                        pointerEvents: plan.allowed ? 'none' : 'auto',
                                                                        color: plan.allowed ? 'gray' : 'blue',
                                                                        textDecoration: 'underline',
                                                                        cursor: plan.allowed ? 'not-allowed' : 'pointer'
                                                                    }}
                                                                >
                                                                    {plan.allowed ? 'Downloaded' : 'Download'}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>

                                        </table>
                                        <Link href="/" className="btn default-btn">
                                            Continue <span />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Download