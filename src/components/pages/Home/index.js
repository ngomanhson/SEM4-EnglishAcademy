import Layout from "../../layouts";
import Banner from "../../views/Home/Banner";
import Blog from "../../views/Home/Blog";
import Categories from "../../views/Home/Categories";
import Course from "../../views/Home/Course";
import Newsletter from "../../views/Home/Newsletter";
import Teacher from "../../views/Home/Teacher";

function Home() {
    return (
        <>
            <Layout title="Home Page">
                <main className="rbt-main-wrapper">
                    <Banner />

                    <Categories />

                    <Course />

                    <Teacher />

                    <Blog />

                    <Newsletter />
                </main>
            </Layout>
        </>
    );
}
export default Home;
