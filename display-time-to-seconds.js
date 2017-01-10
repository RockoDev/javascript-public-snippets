function displayTimeToSeconds(time) {
	var a = time.split(':'),
	    r = 0;
	if ( a.length === 3 ) {
		var h = parseInt(a[0]),
		    m = parseInt(a[1]),
		    s = parseInt(a[2]);
		r = r + (h*3600);
		r = r + (m*60);
		r = r + s;
    } else if ( a.length === 2 ) {
		m = parseInt(a[0]);
		s = parseInt(a[1]);
		r = r + (m*60);
		r = r + s;
    } else if ( a.length === 1 ) {
		r = parseInt(a[0]);
	}
	return r;
}

// displayTimeToSeconds('1:00:00') returns 3600
