export const getDate = () => {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    const date = new Date();
    const dayNumber = date.getDay();
    const day = weekday[dayNumber];
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = date.getDate();
    const dateString = currentDate + " / " + month + " / " + year;
    return { day, dateString };
};