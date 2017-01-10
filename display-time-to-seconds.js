function displayTimeToSeconds(time) {
    var a = time.split(':');
    if ( a.length === 3 ) {
        return ( parseInt(a[0]) * 3600 ) + ( parseInt(a[1]) * 60 ) + parseInt(a[2]);
    } else if ( a.length === 2 ) {
        return ( parseInt(a[0]) * 60 ) + parseInt(a[1]);
    } else if ( a.length === 1 ) {
        return parseInt(a[0]);
    }
    return 0;
}

// displayTimeToSeconds('01:00:00') returns 3600
