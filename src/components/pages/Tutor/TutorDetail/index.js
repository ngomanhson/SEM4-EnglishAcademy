import Layout from "../../../layouts";

function TutorDetail() {
    return (
        <Layout title="Tutor Detail">
            <div className="rbt-single-product-area rbt-single-product rbt-section-gap">
                <div className="container">
                    <div className="row g-5 row--30 align-items-start">
                        <div className="col-lg-4">
                            <div className="thumbnail">
                                <img className="w-100 radius-10" src="assets/images/team/team-04.jpg" alt="Tutor" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="content">
                                    <h2 className="title mb--10 d-flex align-items-center" style={{ fontSize: 33 }}>
                                        Zohaib Oneill <i className="fas fa-check-circle" style={{ color: "#20d5ec", fontSize: 20, marginLeft: 8 }}></i>
                                    </h2>

                                    {/* <span className="rbt-label-style description">
                                        <i className="fas fa-graduation-cap"></i> English teacher
                                    </span> */}

                                    <span className="rbt-label-style description d-block">
                                        <i className="fas fa-birthday-cake"></i> 2004
                                    </span>

                                    <span className="rbt-label-style description d-block">
                                        <i className="fas fa-map-marker-alt"></i> CO Miego, AD,USA
                                    </span>

                                    <div className="rbt-review justify-content-start mt--10">
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <span className="rating-count">(75) - 100% Positive Reviews</span>
                                    </div>
                                </div>

                                <button type="button" className="rbt-btn bg-secondary-opacity" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <span className="btn-text">Hire a tutor</span>
                                    <span className="btn-icon">
                                        <i className="fas fa-pencil-alt"></i>
                                    </span>
                                </button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">
                                                    Register for tutoring services
                                                </h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="rbt-form-group mb-3">
                                                        <label htmlFor="fullname" className="mb-2 text-dark fz-16">
                                                            Full Name <span className="text-danger">*</span>
                                                        </label>
                                                        <div className="form-group__custom mb-3">
                                                            <input type="text" name="fullname" className="form-control " placeholder="Enter your fullname" />
                                                        </div>
                                                    </div>

                                                    <div className="rbt-form-group mb-3">
                                                        <label htmlFor="email" className="mb-2 text-dark fz-16">
                                                            Email <span className="text-danger">*</span>
                                                        </label>
                                                        <div className="form-group__custom mb-3">
                                                            <input type="email" name="email" className="form-control " placeholder="Enter your email address" />
                                                        </div>
                                                    </div>

                                                    <div className="rbt-form-group mb-3">
                                                        <label htmlFor="phone" className="mb-2 text-dark fz-16">
                                                            Phone number <span className="text-danger">*</span>
                                                        </label>
                                                        <div className="form-group__custom mb-3">
                                                            <input type="text" name="phone" className="form-control " placeholder="Enter your phone number" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button type="button" className="btn btn-primary">
                                                    Send message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rbt-separator-mid mt-5">
                                <hr className="rbt-separator m-0" />
                            </div>

                            {/* <div className="info-wrapper mt-5">
                                <h5>Information</h5>
                                <ul>
                                    <li>
                                        <i className="fas fa-birthday-cake"></i>
                                        Birthday: 2004
                                    </li>
                                    <li>
                                        <i className="fas fa-graduation-cap"></i>
                                        Level: English Teacher
                                    </li>
                                </ul>
                            </div> */}

                            {/* <div className="content mt-5">
                                <h4 className="mb-2">About</h4>
                                <p className="fw-light">
                                    I myself have experience teaching 2 elementary school students. Build a 100% personalized learning path for each student through initial competency assessment and
                                    flexibility throughout the learning process.
                                </p>
                            </div> */}

                            <div className="edu mt-5">
                                <h4>Education</h4>
                                <div className="d-flex align-items-center">
                                    <div className="icon-wrapper">
                                        <i className="fas fa-user-graduate"></i>
                                    </div>

                                    <div className="tutor-edu">
                                        <h5 className="mb-0">FPT Academy International</h5>
                                        <p className="mb-0 tutor-edu__info">FPT APTECH - FullStack ADSE</p>

                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="tutor-edu__desc text-secondary">Ha Noi, Viet Nam</span>
                                            <span className="tutor-edu__desc text-secondary">2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rbt-separator-mid mt-5">
                                <hr className="rbt-separator m-0" />
                            </div>

                            <div className="edu mt-5">
                                <h4 className="mb-4">Experience</h4>

                                <ul className="plan-offer-list rbt-list-primary-opacity pt-3">
                                    <li>
                                        <i className="feather-check"></i> Expert in teaching English to elementary school students.
                                    </li>
                                    <li>
                                        <i className="feather-check"></i> Proficient in preparing for Cambridge Starters, Movers, Flyers, KET, PET exams.
                                    </li>
                                    <li>
                                        <i className="feather-check"></i> Have skills in teaching grammar and reporting methods for middle and high school students.
                                    </li>
                                    <li>
                                        <i className="feather-check"></i> Professional English communication training for adults.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden pt-0">
                <div className="container">
                    <div className="section-title text-left mb-4">
                        <span className="subtitle bg-primary-opacity">Outstanding reviews</span>
                    </div>

                    <div className="row align-items-center row--30">
                        <div className="col-lg-6">
                            <div className="rbt-testimonial-content tab-content" id="myTabContent">
                                <div className="tab-pane fade" id="testimonial-tab1" role="tabpanel" aria-labelledby="testimonial-tab1-tab">
                                    <div className="inner">
                                        <div className="rating mb--30">
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <p>Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Histudy </span> - COO, AMERIMAR ENTERPRISES, INC.
                                        </h6>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="testimonial-tab2" role="tabpanel" aria-labelledby="testimonial-tab2-tab">
                                    <div className="inner">
                                        <div className="rating mb--30">
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Nira </span> - COO, AMERIMAR ENTERPRISES, INC.
                                        </h6>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="testimonial-tab3" role="tabpanel" aria-labelledby="testimonial-tab3-tab">
                                    <div className="inner">
                                        <div className="rating mb--30">
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <p>Rafiq The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Jone Jane </span> - COO, AMERIMAR ENTERPRISES, INC.
                                        </h6>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="testimonial-tab4" role="tabpanel" aria-labelledby="testimonial-tab4-tab">
                                    <div className="inner">
                                        <div className="rating mb--30">
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <p>Janen The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Janen Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.
                                        </h6>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="testimonial-tab5" role="tabpanel" aria-labelledby="testimonial-tab5-tab">
                                    <div className="inner">
                                        <div className="rating mb--30">
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <p>Afrin The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Afrin </span> - COO, AMERIMAR ENTERPRISES, INC.
                                        </h6>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="testimonial-tab6" role="tabpanel" aria-labelledby="testimonial-tab6-tab">
                                    <div className="inner">
                                        <div className="rating mb--30">
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <p>Education The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.
                                        </h6>
                                    </div>
                                </div>

                                <div className="tab-pane fade active show" id="testimonial-tab7" role="tabpanel" aria-labelledby="testimonial-tab7-tab">
                                    <div className="inner">
                                        <div className="rating mb--30">
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <p>Mohima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Mohima Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.
                                        </h6>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="testimonial-tab8" role="tabpanel" aria-labelledby="testimonial-tab8-tab">
                                    <div className="inner">
                                        <div className="rating mb--30">
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                            <a href="#!">
                                                <i className="fa fa-star"></i>
                                            </a>
                                        </div>
                                        <p>Nuha The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6>
                                            <span>Nuha </span> - COO, AMERIMAR ENTERPRISES, INC.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_md--30 mt_sm--30">
                            <ul className="testimonial-thumb-wrapper nav nav-tabs" id="myTab" role="tablist">
                                <li>
                                    <a
                                        href="#!"
                                        className=""
                                        id="testimonial-tab1-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#testimonial-tab1"
                                        role="tab"
                                        aria-controls="testimonial-tab1"
                                        aria-selected="false"
                                    >
                                        <div className="testimonial-thumbnai">
                                            <div className="thumb">
                                                <img src="assets/images/testimonial/testimonial-1.jpg" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#!"
                                        id="testimonial-tab2-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#testimonial-tab2"
                                        role="tab"
                                        aria-controls="testimonial-tab2"
                                        aria-selected="false"
                                        className=""
                                    >
                                        <div className="testimonial-thumbnai">
                                            <div className="thumb">
                                                <img src="assets/images/testimonial/testimonial-2.jpg" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#!"
                                        id="testimonial-tab3-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#testimonial-tab3"
                                        role="tab"
                                        aria-controls="testimonial-tab3"
                                        aria-selected="false"
                                        className=""
                                    >
                                        <div className="testimonial-thumbnai">
                                            <div className="thumb">
                                                <img src="assets/images/testimonial/testimonial-3.jpg" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#!"
                                        id="testimonial-tab4-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#testimonial-tab4"
                                        role="tab"
                                        aria-controls="testimonial-tab4"
                                        aria-selected="false"
                                        className=""
                                    >
                                        <div className="testimonial-thumbnai">
                                            <div className="thumb">
                                                <img src="assets/images/testimonial/testimonial-4.jpg" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#!"
                                        id="testimonial-tab5-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#testimonial-tab5"
                                        role="tab"
                                        aria-controls="testimonial-tab5"
                                        aria-selected="false"
                                        className=""
                                    >
                                        <div className="testimonial-thumbnai">
                                            <div className="thumb">
                                                <img src="assets/images/testimonial/testimonial-5.jpg" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#!"
                                        id="testimonial-tab6-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#testimonial-tab6"
                                        role="tab"
                                        aria-controls="testimonial-tab6"
                                        aria-selected="false"
                                        className=""
                                    >
                                        <div className="testimonial-thumbnai">
                                            <div className="thumb">
                                                <img src="assets/images/testimonial/testimonial-6.jpg" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#!"
                                        id="testimonial-tab7-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#testimonial-tab7"
                                        role="tab"
                                        aria-controls="testimonial-tab7"
                                        aria-selected="true"
                                        className="active"
                                    >
                                        <div className="testimonial-thumbnai">
                                            <div className="thumb">
                                                <img src="assets/images/testimonial/testimonial-7.jpg" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#!"
                                        id="testimonial-tab8-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#testimonial-tab8"
                                        role="tab"
                                        aria-controls="testimonial-tab8"
                                        aria-selected="false"
                                        className=""
                                    >
                                        <div className="testimonial-thumbnai">
                                            <div className="thumb">
                                                <img src="assets/images/testimonial/testimonial-8.jpg" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default TutorDetail;
