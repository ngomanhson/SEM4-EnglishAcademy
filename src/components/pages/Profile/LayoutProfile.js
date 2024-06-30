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
            label: `Welcome, ${decodeToken.Fullname || ""}`,
            item: [
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
            ],
        },
        {
            label: "Account",
            item: [
                {
                    path: config.routes.change_password,
                    title: "Change Password",
                    icon: "feather-settings",
                },

                {
                    path: config.routes.login,
                    title: "Logout",
                    icon: "feather-log-out",
                    onclick: handleLogout,
                },
            ],
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
                                                    {sidebars.map((sidebar, sidebarIndex) => (
                                                        <div className="mb-5" key={sidebarIndex}>
                                                            <div className="section-title mb-3">
                                                                <h6 className="rbt-title-style-2" style={{ paddingLeft: 5 }}>
                                                                    {sidebar.label}
                                                                </h6>
                                                            </div>
                                                            <nav className="mainmenu-nav">
                                                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                                    {sidebar.item.map((sidebar, index) => (
                                                                        <li key={index}>
                                                                            {sidebar.title === "Logout" ? (
                                                                                <Link to={sidebar.path} onClick={sidebar.onclick}>
                                                                                    <i className={sidebar.icon}></i>
                                                                                    <span>{sidebar.title}</span>
                                                                                </Link>
                                                                            ) : (
                                                                                <NavLink to={sidebar.path}>
                                                                                    <i className={sidebar.icon}></i>
                                                                                    <span>{sidebar.title}</span>
                                                                                </NavLink>
                                                                            )}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    ))}
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
