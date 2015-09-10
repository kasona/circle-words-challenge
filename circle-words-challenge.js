function finder(source, find) {
  var found = false;
  var doubleSource = source + source;
  for ( ; find.length > doubleSource.length - source.length;) {
    doubleSource = doubleSource + doubleSource;
  }
  var dblLow = doubleSource.toLowerCase();
  var findLow = find.toLowerCase();
  for (var i = 0; i < source.length; i++ ) {
    var subStr = dblLow.substring(i, find.length + i);
    if (findLow == subStr) {
      found = true;
    }
  }
  return found;
}