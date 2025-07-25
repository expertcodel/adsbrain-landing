export const dynamic = 'force-dynamic'
import Home from "../component/Home";


export default async function Page() {


    let sliderlist = [];
    let bookList = [];
    let testimoniallist = [];
    let courselist = [];

    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/home`, {

            method: 'GET',
            cache: 'no-store'
        })

        const res = await response.json();
        if (res.status) {

            sliderlist = res.sliderlist
            bookList = res.booklist;
            testimoniallist = res.testimoniallist;
            courselist = res.courselist;
        }

    } catch (error) {

        console.log(error);


    }



    return (
        <Home sliderlist={sliderlist} bookList={bookList} testimoniallist={testimoniallist} courselist={courselist} />
    );
}
