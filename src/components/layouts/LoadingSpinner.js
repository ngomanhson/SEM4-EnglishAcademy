function LoadingSpinner() {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <svg className="loader-spinner" viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg">
                <circle className="active-spinner" pathLength="360" fill="transparent" strokeWidth="32" cx="192" cy="192" r="176"></circle>
                <circle className="track-spinner" pathLength="360" fill="transparent" strokeWidth="32" cx="192" cy="192" r="176"></circle>
            </svg>
        </div>
    );
}

export default LoadingSpinner;
