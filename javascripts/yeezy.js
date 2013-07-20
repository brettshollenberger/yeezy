Object.prototype.expect = function(what) {
  return what;
};

Object.prototype.toEq = function(what) {
  return this == what;
};

Object.prototype.toNotEq = function(what) {
  return this != what;
};

Object.prototype.toBeTrue = function() {
  return this == true;
};

Object.prototype.toNotBeTrue = function() {
  return this != true;
};

Object.prototype.toBeFalse = function() {
  return this == false;
};

Object.prototype.toBeGreaterThan = function(what) {
  return this > what;
};

Object.prototype.toBeLessThan = function(what) {
  return this < what;
};

