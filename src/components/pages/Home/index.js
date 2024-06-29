import Layout from "../../layouts";
import AboutUs from "../../views/Home/AboutUs";
import Banner from "../../views/Home/Banner";
import Brand from "../../views/Home/Brand";
import Categories from "../../views/Home/Categories";
import Course from "../../views/Home/Course";
import Newsletter from "../../views/Home/Newsletter";
import Teacher from "../../views/Home/Teacher";
import TopReview from "../../views/Home/TopReview";

function Home() {
    return (
        <>
            <Layout title="Home Page">
                <main className="rbt-main-wrapper">
                    <Banner />

                    <Categories />

                    <Course />

                    <Teacher />

                    <TopReview />

                    <AboutUs />

                    <Brand />

                    <Newsletter />
                </main>
            </Layout>
        </>
    );
}
export default Home;
