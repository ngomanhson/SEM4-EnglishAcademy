import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PackageSlider = ({ packageHr, handleChangePackage }) => {
    return (
        <div className="p-2">
            <div className="choose-wrapper mb-0">
                <label htmlFor={`package-${packageHr.id}`} className="w-100 mb-0">
                    <div className="card card-package mb-3">
                        <div className="card-header p-3 px-4" style={{ background: "#829cff21", border: "none" }}>
                            <div className="d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="rbt-badge-6 bg-secondary-opacity fz-12" style={{ padding: "5px 15px" }}>
                                        {packageHr.name}
                                    </span>
                                    <h5 className="card-title">${packageHr.hourlyRate.toFixed(2)}</h5>
                                    <p className="fz-12 line-clamp-1">{packageHr.description}</p>
                                </div>
                                <input
                                    type="radio"
                                    className="input-tab__option position-absolute"
                                    style={{ top: "2px", right: "15px" }}
                                    name="package"
                                    id={`package-${packageHr.id}`}
                                    onChange={() => handleChangePackage(packageHr.id)}
                                />
                            </div>
                        </div>
                        <div className="card-body p-3 px-4" style={{ background: "#fff" }}>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="fz-12">Number Session: {packageHr.numSessions < 10 ? `0${packageHr.numSessions}` : packageHr.numSessions}</span>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default PackageSlider;
