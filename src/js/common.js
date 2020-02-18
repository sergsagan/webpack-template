export const formatDate = (date) => {
    const year = `${date.getFullYear()}`;

    const month = `${date.getMonth() + 1}`;
    const formatedMonth = month < 10 ? `0${month}` : month;

    const day = `${date.getDate()}`;
    const formatedDay = day < 10 ? `0${day}` : day;

    const hour = `${date.getHours()}`;
    const formatedHours = hour < 10 ? `0${hour}` : hour;

    const minutes = `${date.getMinutes()}`;
    const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formatedDay}.${formatedMonth}.${year} ${formatedHours}:${formatedMinutes}`;
};