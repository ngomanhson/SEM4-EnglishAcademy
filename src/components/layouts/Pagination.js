const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages === 1) return null;

    return (
        <nav>
            <ul className="rbt-pagination">
                <li className={`${currentPage === 1 ? "disabled" : ""}`}>
                    <button onClick={() => onPageChange(currentPage - 1)}>
                        <i className="feather-chevron-left"></i>
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`${currentPage === index + 1 ? "active" : ""}`}>
                        <button onClick={() => onPageChange(index + 1)}>{index + 1}</button>
                    </li>
                ))}
                <li className={`${currentPage === totalPages ? "disabled" : ""}`}>
                    <button onClick={() => onPageChange(currentPage + 1)}>
                        <i className="feather-chevron-right"></i>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
