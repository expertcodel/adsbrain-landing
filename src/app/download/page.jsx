import Download from "@/component/Download";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
export default async function download() {


    const header = await headers();
    const path = decodeURIComponent(header.get('x-pathname'));
    const email = header.get('x-email');
    console.log(path,email,'hello');
    let downloadDetail={};
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/downloads/?url=${encodeURIComponent(path)}&email=${email}`, {

        method: 'GET',
        cache: 'no-store',
       
    })

    const res = await response.json();
    if (res.status) {
        downloadDetail = res.downloaddetail;
    }
    else {

        redirect('/')
    }




    return (


        <Download download_url={path} email={email} downloadDetail={downloadDetail}/>
      

    );
}