import { useState } from "react";

function Image({ src, alt = "", className = "", style = {} }) {
    const imgNotFound = "https://ngomanhson.github.io/learn-git/assets/img/default-image.png";
    const [hasError, setHasError] = useState(false);

    const handleImageError = (e) => {
        if (!hasError) {
            e.target.src = imgNotFound;
            setHasError(true);
        }
    };

    return <img src={src || imgNotFound} alt={alt} className={className} style={{ ...style }} onError={handleImageError} />;
}

export default Image;
