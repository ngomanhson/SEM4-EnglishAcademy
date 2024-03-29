import Layout from "../../layouts";
import AboutUs from "../../views/Home/AboutUs";
import Banner from "../../views/Home/Banner";
import Blog from "../../views/Home/Blog";
import CallToAction from "../../views/Home/CallToAction";
import Categories from "../../views/Home/Categories";
import Course from "../../views/Home/Course";
import Education from "../../views/Home/Education";
import Event from "../../views/Home/Event";
import Newsletter from "../../views/Home/Newsletter";
import Teacher from "../../views/Home/Teacher";
import WhyChoose from "../../views/Home/WhyChoose";
import Presentation from "../../views/Home/Presentation";

function Home() {
    return (
        <>
            <Layout title="Home Page">
                <main className="rbt-main-wrapper">
                    <Banner />

                    <Categories />

                    <Course />

                    <AboutUs />

                    <Presentation />

                    {/* <CallToAction /> */}

                    {/* <Education /> */}

                    <Event />

                    <Teacher />

                    <Blog />

                    <Newsletter />
                </main>
            </Layout>
        </>
    );
}
export default Home;
