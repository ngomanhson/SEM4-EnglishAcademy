import Layout from "../../layouts";
import AboutUs from "../../views/Home/AboutUs";
import Banner from "../../views/Home/Banner";
import Categories from "../../views/Home/Categories";
import TopCourse from "../../views/Home/TopCourse";
import Newsletter from "../../views/Home/Newsletter";
import OurApp from "../../views/Home/OurApp";
import TopTutor from "../../views/Home/TopTutor";
import TopReview from "../../views/Home/TopReview";
import Blog from "../../views/Home/Blog";

function Home() {
    return (
        <>
            <Layout title="Home Page">
                <main className="rbt-main-wrapper">
                    <Banner />

                    <Categories />

                    <TopCourse />

                    <TopTutor />

                    <TopReview />

                    <AboutUs />

                    <OurApp />

                    <Blog />

                    <Newsletter />
                </main>
            </Layout>
        </>
    );
}
export default Home;
