"use client"

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";


export default function Success() {

    const searchParams = useSearchParams();
    const plan1 = decodeURIComponent(searchParams.get('plan1'));
    const plan2 = decodeURIComponent(searchParams.get('plan2'));
    const plan3 = decodeURIComponent(searchParams.get('plan3'));
    const token = decodeURIComponent(searchParams.get('token'));
    const email = decodeURIComponent(searchParams.get('email'));
    let cnt = 0;
    useEffect(() => {
        const name = searchParams.get('name');
        const contact_number = searchParams.get('contact_number');

        const sendMail = async () => {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/sendMail`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: decodeURIComponent(name || ''),
                    email: decodeURIComponent(email || ''),
                    contact_number,
                    download_url: `http://localhost:3000/download?token=${token}&email=${email}`,
                    plans: { plan1, plan2, plan3 }
                }),
            });
        };

        if (name && email && contact_number && cnt === 0) sendMail();
        cnt++;

    }, [searchParams]);



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
                                        <h1>Thank y<span><FontAwesomeIcon icon={faThumbsUp} className="bounceIcon" /></span>u !</h1>
                                        <h4>Awesome! Your registration is complete.</h4>
                                        <p>
                                            While our Customer Success team will reach out to you over email/phone.
                                        </p>

                                        <Link href={`http://localhost:3000/download?token=${token}&email=${email}`} className="btn default-btn">
                                            Download <span />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}