export function statusColor(status) {
    let color;
    switch (status) {
        case "pending":
            color = "color-secondary";
            break;
        case "confirmed":
            color = "color-primary";
            break;
        case "completed":
            color = "color-success";
            break;
        case "canceled":
            color = "color-danger";
            break;
        default:
            break;
    }
    return color;
}
