import { Link } from "react-router-dom";
import config from "../../config";

const BreadcrumbTest = ({ title, path }) => {
    return (
        <>
            <h4 className="font-system fw-500 m-0">Entrance Test - {title}</h4>
            <ul className="page-list">
                <li className="rbt-breadcrumb-item">
                    <Link to={path}>Home</Link>
                </li>
                <li>
                    <div className="icon-right">
                        <i className="feather-chevron-right"></i>
                    </div>
                </li>
                <li className="rbt-breadcrumb-item active">Entrance Test - {title}</li>
            </ul>
        </>
    );
};

BreadcrumbTest.defaultProps = {
    path: config.routes.home,
};
export default BreadcrumbTest;
