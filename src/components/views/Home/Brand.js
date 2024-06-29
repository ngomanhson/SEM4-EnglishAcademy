import { Link } from "react-router-dom";

function Brand() {
    const brands = [
        {
            images: "assets/images/brand/brand-01.png",
        },
        {
            images: "assets/images/brand/brand-02.png",
        },
        {
            images: "assets/images/brand/brand-03.png",
        },
        {
            images: "assets/images/brand/brand-05.png",
        },
        {
            images: "assets/images/brand/brand-06.png",
        },
    ];

    return (
        <div className="rbt-brand-area bg-color-extra2 rbt-section-gap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb--40">
                            <span className="small-title w-600">The Best Trasted Client in This Education World</span>
                        </div>
                        <ul className="brand-list brand-style-3 justify-content-center justify-content-lg-between">
                            {brands.map((brand, index) => (
                                <li key={index}>
                                    <Link to="">
                                        <img src={brand.images} alt="Brand" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;
