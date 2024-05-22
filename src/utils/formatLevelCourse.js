export function formatLevelCourse(level) {
    let formatLevel;
    switch (level) {
        case 0:
            formatLevel = "Basic";
            break;
        case 1:
            formatLevel = "Intermediate";
            break;
        case 2:
            formatLevel = "Advanced";
            break;
        case 3:
            formatLevel = "Expert";
            break;
        default:
            break;
    }

    return formatLevel;
}
