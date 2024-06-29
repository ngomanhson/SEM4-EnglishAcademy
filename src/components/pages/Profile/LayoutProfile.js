import { Link, NavLink } from "react-router-dom";
import Layout from "../../layouts";
import { getDecodedToken, removeAccessToken } from "../../../utils/auth";
import config from "../../../config";

function LayoutProfile({ children }) {
    const decodeToken = getDecodedToken();

    const handleLogout = () => {
        removeAccessToken();
    };

    const sidebars = [
        {
            path: config.routes.profile,
            title: "Personal Information",
            icon: "feather-user",
        },
        {
            path: config.routes.timetable,
            title: "Timetable",
            icon: "feather-calendar",
        },
        {
            path: config.routes.booking,
            title: "Booking",
            icon: "feather-user-check",
        },
        {
            path: config.routes.reviews,
            title: "Reviews",
            icon: "feather-star",
        },
        {
            path: config.routes.my_quiz,
            title: "My Quiz Attempts",
            icon: "feather-list",
        },
    ];

    return (
        <Layout title="Profile">
            <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3 bg-color-darker p-0" style={{ minHeight: 240 }}></div>

            <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row g-5">
                                <div className="col-lg-3">
                                    <div className="rbt-default-sidebar sticky-top rbt-shadow-box plr-25">
                                        <div className="inner">
                                            <div className="content-item-content">
                                                <div className="rbt-default-sidebar-wrapper">
                                                    <div className="section-title mb--20">
                                                        <h6 className="rbt-title-style-2" style={{ paddingLeft: 5 }}>
                                                            Welcome, {decodeToken.Fullname || ""}
                                                        </h6>
                                                    </div>
                                                    <nav className="mainmenu-nav">
                                                        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                            {sidebars.map((sidebar, index) => (
                                                                <li key={index}>
                                                                    <NavLink to={sidebar.path}>
                                                                        <i className={sidebar.icon}></i>
                                                                        <span>{sidebar.title}</span>
                                                                    </NavLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </nav>

                                                    <div className="section-title mt--40 mb--20">
                                                        <h6 className="rbt-title-style-2">Account</h6>
                                                    </div>

                                                    <nav className="mainmenu-nav">
                                                        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                            <li>
                                                                <NavLink to={config.routes.change_password}>
                                                                    <i className="feather-settings"></i>
                                                                    <span>Change Password</span>
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <Link to={config.routes.login} onClick={handleLogout}>
                                                                    <i className="feather-log-out"></i>
                                                                    <span>Logout</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default LayoutProfile;
