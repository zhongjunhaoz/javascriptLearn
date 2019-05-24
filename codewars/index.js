function generateHashtag(str) {
    if(str.length>140 || str.length=== ''){
        return false;
    }
    str = '#' + str;
    str += str.split(' ').map(word => word.charAt(0) + word.slice(1)).join(' ');

    str = '#' + str;
    return str;
}
console.log(generateHashtag('hello miss done'));
