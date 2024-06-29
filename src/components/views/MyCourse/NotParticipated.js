import { Link } from "react-router-dom";
import config from "../../../../config";

function NotParticipated() {
    return (
        <p className="fw-300 fz-15">
            You have not participated in any courses yet.{" "}
            <Link className="text-primary" to={config.routes.course}>
                Join the course now!
            </Link>
        </p>
    );
}

export default NotParticipated;
