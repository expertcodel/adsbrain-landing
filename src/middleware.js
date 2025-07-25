import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const response = NextResponse.next();
    const statusKey = await cookies().get('statusKey')
   
    if (pathname.startsWith('/download')) {

        const email = new URL(request.url).searchParams.get('email');
        response.headers.set('x-pathname',request.nextUrl.href);
        response.headers.set('x-email',email);


    }

    if (pathname.startsWith('/success')) {

        const token = new URL(request.url).searchParams.get('token');
        if (!statusKey) {
            return NextResponse.redirect(new URL('/', request.url));
        }

        await cookies().delete('statusKey')
        if (token !== statusKey.value) {
            return NextResponse.redirect(new URL('/', request.url));
        }



    }

    if (pathname.startsWith('/failed')) {

        const token = new URL(request.url).searchParams.get('token');

        if (!statusKey) {
            return NextResponse.redirect(new URL('/', request.url));
        }

        await cookies().delete('statusKey')
        if (token !== statusKey.value) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }


    return response;
}

export const config = {

    matcher: ['/success', '/failed','/download']
}