import LayoutProfile from "./LayoutProfile";

function MyQuiz() {
    return (
        <LayoutProfile>
            <div className="col-lg-9">
                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                        <div className="section-title">
                            <h4 className="rbt-title-style-3">My Quiz Attempts</h4>
                        </div>

                        <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
                            <table className="rbt-table table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Quiz</th>
                                        <th>Qus</th>
                                        <th>TM</th>
                                        <th>CA</th>
                                        <th>Result</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            <p className="b3 mb--5">December 26, 2023</p>
                                            <span className="h6 mb--5">Write a short essay on yourself using the 5</span>
                                            <p className="b3">
                                                Student: <a href="#!">John Due</a>
                                            </p>
                                        </th>
                                        <td>
                                            <p className="b3">4</p>
                                        </td>
                                        <td>
                                            <p className="b3">8</p>
                                        </td>
                                        <td>
                                            <p className="b3">4</p>
                                        </td>
                                        <td>
                                            <span className="rbt-badge-5 bg-color-success-opacity color-success">Pass</span>
                                        </td>
                                        <td>
                                            <div className="rbt-button-group justify-content-end">
                                                <a className="rbt-btn btn-xs bg-primary-opacity radius-round" href="#!" title="Edit">
                                                    <i className="feather-edit pl--0"></i>
                                                </a>
                                                <a className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger" href="#!" title="Delete">
                                                    <i className="feather-trash-2 pl--0"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p className="b3 mb--5">December 26, 2023</p>
                                            <span className="h6 mb--5">Write a short essay on yourself using the 5</span>
                                            <p className="b3">
                                                Student: <a href="#!">John Due</a>
                                            </p>
                                        </th>
                                        <td>
                                            <p className="b3">4</p>
                                        </td>
                                        <td>
                                            <p className="b3">8</p>
                                        </td>
                                        <td>
                                            <p className="b3">4</p>
                                        </td>
                                        <td>
                                            <span className="rbt-badge-5 bg-color-danger-opacity color-danger">Fail</span>
                                        </td>
                                        <td>
                                            <div className="rbt-button-group justify-content-end">
                                                <a className="rbt-btn btn-xs bg-primary-opacity radius-round" href="#!" title="Edit">
                                                    <i className="feather-edit pl--0"></i>
                                                </a>
                                                <a className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger" href="#!" title="Delete">
                                                    <i className="feather-trash-2 pl--0"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p className="b3 mb--5">December 26, 2023</p>
                                            <span className="h6 mb--5">Write a short essay on yourself using the 5</span>
                                            <p className="b3">
                                                Student: <a href="#!">John Due</a>
                                            </p>
                                        </th>
                                        <td>
                                            <p className="b3">4</p>
                                        </td>
                                        <td>
                                            <p className="b3">8</p>
                                        </td>
                                        <td>
                                            <p className="b3">4</p>
                                        </td>
                                        <td>
                                            <span className="rbt-badge-5 bg-color-success-opacity color-success">Pass</span>
                                        </td>
                                        <td>
                                            <div className="rbt-button-group justify-content-end">
                                                <a className="rbt-btn btn-xs bg-primary-opacity radius-round" href="#!" title="Edit">
                                                    <i className="feather-edit pl--0"></i>
                                                </a>
                                                <a className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger" href="#!" title="Delete">
                                                    <i className="feather-trash-2 pl--0"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p className="b3 mb--5">December 26, 2023</p>
                                            <span className="h6 mb--5">Write a short essay on yourself using the 5</span>
                                            <p className="b3">
                                                Student: <a href="#!">John Due</a>
                                            </p>
                                        </th>
                                        <td>
                                            <p className="b3">4</p>
                                        </td>
                                        <td>
                                            <p className="b3">8</p>
                                        </td>
                                        <td>
                                            <p className="b3">4</p>
                                        </td>
                                        <td>
                                            <span className="rbt-badge-5 bg-color-danger-opacity color-danger">Fail</span>
                                        </td>
                                        <td>
                                            <div className="rbt-button-group justify-content-end">
                                                <a className="rbt-btn btn-xs bg-primary-opacity radius-round" href="#!" title="Edit">
                                                    <i className="feather-edit pl--0"></i>
                                                </a>
                                                <a className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger" href="#!" title="Delete">
                                                    <i className="feather-trash-2 pl--0"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default MyQuiz;
