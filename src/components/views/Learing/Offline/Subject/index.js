import { format } from "date-fns";
import { Link } from "react-router-dom";

function Subject({ subject }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="widget border-a-secondary p-4">
                <Link to={`/subject-slot/${subject.slug}`}>
                    <h5 className="border-bt-secondary mb-4 pb-3">{subject.name}</h5>
                </Link>

                <p className="d-flex align-items-center mb-4 fz-16 fw-300">
                    <i className="fab fa-leanpub pr--5"></i> Slot: 0{subject.totalSlot}
                </p>

                <p className="d-flex align-items-center mb-4 fz-16 fw-300">
                    <i className="fas fa-calendar-alt pr--5"></i> {subject.createdDate ? format(new Date(subject.createdDate), "dd-MM-yyyy") : "N/A"}
                </p>

                <div className="d-flex align-items-center justify-content-between border-t-secondary pt-3">
                    <p className="d-flex align-items-center m-0 fw-300 fz-16">
                        <i className="fas fa-user-graduate pr--5"></i> {subject.totalSlot < 10 ? `0${subject.totalSlot}` : subject.totalSlot} students
                    </p>

                    <Link to={`/subject-slot/${subject.slug}`} className="transparent-button fw-300" href="#!">
                        Learn More
                        <i>
                            <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#27374D" fill="none" fillRule="evenodd">
                                    <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                    <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                </g>
                            </svg>
                        </i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Subject;
