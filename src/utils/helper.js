function compareTime(timeString1, timeString2) {
    const time1 = new Date(timeString1);
    const time2 = new Date(timeString2);

    return time1.getTime() > time2.getTime();
}

module.exports = {
    compareTime
}