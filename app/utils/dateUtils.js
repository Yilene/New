function getEngDate(date) {
    var Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sept','Oct', 'Nov', 'Dec'];
    var day = (date.getDate()) > 9 ? date.getDate() : '0' + date.getDate();
    return Month[date.getMonth().toString()] + day + ', ' + date.getFullYear();
}

export {getEngDate};
