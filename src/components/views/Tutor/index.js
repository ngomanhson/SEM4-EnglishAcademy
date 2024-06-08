import { Link } from "react-router-dom";

function Tutor({ tutor }) {
    return (
        <div className="col-lg-3 col-md-6 col-12">
            <div className="rbt-team team-style-default style-three small-layout rbt-hover">
                <div className="inner">
                    <div className="thumbnail">
                        <Link to={`/tutor/${tutor.code}`}>
                            <img src={tutor.avatar} alt={tutor.fullname} width={263} height={263} />
                        </Link>
                    </div>
                    <div className="content">
                        <h4 className="title">{tutor.fullname}</h4>
                        <h6 className="subtitle theme-gradient">{tutor.teachingSubject}</h6>
                        <span className="team-form">
                            <i className="feather-map-pin"></i>
                            <span className="location">{tutor.address}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tutor;
