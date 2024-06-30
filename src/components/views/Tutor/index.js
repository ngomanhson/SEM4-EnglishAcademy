import { Link } from "react-router-dom";
import { formatLevelCourse } from "../../../utils/formatLevelCourse";

function Tutor({ tutor }) {
    return (
        // <div className="col-lg-3 col-md-6 col-12">
        //     <div className="rbt-team team-style-default style-three small-layout rbt-hover">
        //         <div className="inner">
        //             <div className="thumbnail">
        //                 <Link to={`/tutor/${tutor.code}`}>
        //                     <img src={tutor.avatar} alt={tutor.fullname} width={263} height={263} />
        //                 </Link>
        //             </div>
        //             <div className="content">
        //                 <h4 className="title">{tutor.fullname}</h4>
        //                 <h6 className="subtitle theme-gradient">{tutor.teachingSubject}</h6>
        //                 <span className="team-form">
        //                     <i className="feather-map-pin"></i>
        //                     <span className="location">{tutor.address}</span>
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="col-lg-3 col-md-6 col-12">
            <Link to={`/tutor/${tutor.code}`} className="team team-style--bottom d-block rounded">
                <div className="thumbnail">
                    <img src={tutor.avatar} alt={tutor.fullname} style={{ height: 350, objectFit: "cover" }} />
                </div>
                <div className="content px-4">
                    <h4 className="title">
                        {tutor.fullname}
                        <svg aria-label="Verified" className="ml--5" fill="rgb(0, 149, 246)" height="20" role="img" viewBox="0 0 40 40" width="15">
                            <path
                                d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                    </h4>
                    <p className="designation m-0">
                        <span class="rbt-badge-6 bg-secondary-opacity fz-12 m-0" style={{ padding: "5px 15px" }}>
                            {formatLevelCourse(tutor.level)}
                        </span>
                    </p>
                    <p className="designation m-0">
                        <span class="rbt-badge-6 bg-primary-opacity fz-12 m-0" style={{ padding: "5px 15px" }}>
                            {tutor.teachingSubject}
                        </span>
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default Tutor;
