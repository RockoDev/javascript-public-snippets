function password(length){
    function range(s,l){return Array.apply(null,Array(l)).map(function(_,i){return s+i;});}
    function random(a){return a[Math.floor(Math.random()*a.length)];}
    function toCharCodes(a){return a.map(function(c){return String.fromCharCode(c);});}
    var r = '';
    range(0,length).forEach(function(i){
        r += random(random([
            toCharCodes(range(65,26)),
            toCharCodes(range(97,26)),
            range(0,10),
            [
                'ñ', 'Ñ', '-', '.', ',', '_',
                '@', '#', '$', '%', '&', '/',
                '(', ')', '<', '>', '{', '}',
                '[', ']', '¿', '?', '¡', '!',
                '+', '*', '=',
            ]
        ]));
    });
    return r;
}
