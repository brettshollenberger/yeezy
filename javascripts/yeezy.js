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

Object.prototype.toBeGreaterThanOrEqualTo = function(what) {
  return this >= what;
};

Object.prototype.toBeLessThanOrEqualTo = function(what) {
  return this <= what;
};

function range(start, stop, step) {
  if (stop == undefined) {
    stop = 0;
  };
  if (step === undefined) {
    step = 1;
  };
  if (start == undefined) {
    throw "Needs at least one argument";
  } else if (stop == 0) {
    return_array = [];
    for (i = 1; i <= start; i++) {
      return_array.push(i);
    };
    return return_array
  } else if (stop != 0) {
    return_array = [];
    for(i = start; i <= stop; i += step) {
      return_array.push(i);
    };
    return return_array;
  };
};

Object.prototype.toBeWithin = function(start, stop) {
  return this >= start && this <= stop;
};

Object.prototype.toInclude = function(what) {
  return what in this;
};

Object.prototype.toMatch = function(what) {
  if (this.match(what) == null) {
    return false;
  } else {
    return true;
  };
};
