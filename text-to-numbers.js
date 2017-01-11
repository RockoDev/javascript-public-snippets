function textToNumbers(text) {
	var r = text.toUpperCase();
    [
        ['A','4'],
        ['B','8'],
        ['E','3'],
        ['G','6'],
        ['I','1'],
        ['O','0'],
        ['S','5'],
        ['T','7'],
        ['Z','2']
    ].forEach(function(c) {
        r = r.replace(c[0], c[1]);
    });
	return r;
}
