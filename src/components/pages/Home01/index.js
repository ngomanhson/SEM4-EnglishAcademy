import Layout from "../../layouts";
import AboutUs from "../../views/Home01/AboutUs";
import Banner from "../../views/Home01/Banner";
import Blog from "../../views/Home01/Blog";
import CallToAction from "../../views/Home01/CallToAction";
import Categories from "../../views/Home01/Categories";
import Course from "../../views/Home01/Course";
import Education from "../../views/Home01/Education";
import Event from "../../views/Home01/Event";
import Newsletter from "../../views/Home01/Newsletter";
import Teacher from "../../views/Home01/Teacher";
import WhyChoose from "../../views/Home01/WhyChoose";

function Home() {
    return (
        <>
            <Layout title="Home Page">
                <main className="rbt-main-wrapper">
                    <Banner />

                    <Categories />

                    <Course />

                    <AboutUs />

                    <CallToAction />

                    <WhyChoose />

                    <Education />

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
