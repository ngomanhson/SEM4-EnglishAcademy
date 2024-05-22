import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import config from "../../../../config";

function Breadcrumb({ title }) {
    return (
        <div className="row mt--50">
            <div className="col-12">
                <h4 className="mb-3">{title}</h4>
                <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                        <Link to={config.routes.home}>Home</Link>
                    </li>
                    <li>
                        <div className="icon-right">
                            <i className="feather-chevron-right"></i>
                        </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">{title}</li>
                </ul>
            </div>
        </div>
    );
}

Breadcrumb.proTypes = {
    title: PropTypes.string.isRequired,
};

export default Breadcrumb;
