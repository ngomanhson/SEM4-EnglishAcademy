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

        // <div className="col-lg-3 col-md-6 col-12">
        //     <div className="team team-style--bottom">
        //         <div className="thumbnail">
        //             <Link to={`/tutor/${tutor.code}`}>
        //                 <img src={tutor.avatar} alt={tutor.fullname} style={{ height: 350, objectFit: "cover" }} />
        //             </Link>
        //         </div>
        //         <div className="content px-4">
        //             <h4 className="title">{tutor.fullname}</h4>
        //             {/* <div className="d-flex align-items-center justify-content-between"> */}
        //             <p className="designation m-0">
        //                 <i className="fas fa-chalkboard-teacher"></i>
        //                 {tutor.teachingSubject}
        //             </p>
        //             <p className="designation d-flex align-items-center gap-2 m-0">
        //                 <i className="feather-map-pin "></i>
        //                 <span className="location">{tutor.address}</span>
        //             </p>
        //             {/* </div> */}
        //         </div>
        //     </div>
        // </div>
    );
}

export default Tutor;
