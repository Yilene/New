var getEngDate = date => {
    var Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sept','Oct', 'Nov', 'Dec'];
    var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    return Month[date.getMonth().toString()] + ' ' + day + ', ' + date.getFullYear();
};

var formatTime = date => {
    var hour = date.getHours();
    var minute = date.getMinutes();
    return (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute);
};

var formatDateTime = date => {
    var engDate = getEngDate(date);
    var time = formatTime(date);
    return time + " " + engDate;
}

export {getEngDate,formatTime, formatDateTime};
