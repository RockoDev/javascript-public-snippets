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
        r = r.replace(new RegExp(c[0], 'g'), c[1]);
    });
    return r;
}

//textToNumbers('What\'s the meaning of life?') //returns "WH47'5 7H3 M34N1N6 0F L1F3?"
