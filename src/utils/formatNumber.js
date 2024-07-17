export const formatNumber = (number) => {
    if (number === 0) {
        return "0";
    }
    return number < 10 ? "0" + number : number;
};
