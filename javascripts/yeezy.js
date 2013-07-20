Object.prototype.expect = function(obj) {
  return new SpecObject(obj)
};

function SpecObject(what) {
  this.obj = what;
};

SpecObject.prototype.toEq = function(what) {
  return this.obj == what;
};

SpecObject.prototype.toNotEq = function(what) {
  return this.obj != what;
};

SpecObject.prototype.toBeTrue = function() {
  return this.obj == true;
};

SpecObject.prototype.toNotBeTrue = function() {
  if (this.obj) {
    return false;
  } else {
    return true;
  };
};

SpecObject.prototype.toBeFalse = function() {
  if (this.obj) {
    return false;
  } else {
    return true;
  };
};

SpecObject.prototype.toNotBeFalse = function() {
  if (this.obj) {
    return true;
  } else {
    return false;
  };
};

SpecObject.prototype.toBeGreaterThan = function(what) {
  return this.obj > what;
};

SpecObject.prototype.toBeLessThan = function(what) {
  return this.obj < what;
};

SpecObject.prototype.toBeGreaterThanOrEqualTo = function(what) {
  return this.obj >= what;
};

SpecObject.prototype.toBeLessThanOrEqualTo = function(what) {
  return this.obj <= what;
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

SpecObject.prototype.toBeWithin = function(start, stop) {
  return this.obj >= start && this.obj <= stop;
};

SpecObject.prototype.toInclude = function(what) {
  return what in this.obj;
};

SpecObject.prototype.toNotInclude = function(what) {
  return !(what in this.obj);
};

SpecObject.prototype.toMatch = function(what) {
  if (this.obj.toString().match(what) == null) {
    return false;
  } else {
    return true;
  };
};

SpecObject.prototype.toHavePrototype = function(what) {
  return this.obj.__proto__ == what.prototype;
};

SpecObject.prototype.toNotHavePrototype = function(what) {
  return this.obj.__proto__ != what.prototype;
};

SpecObject.prototype.toRespondTo = function(what) {
  return expect(this.obj.__proto__).toInclude(what) || expect(this.obj.prototype).toInclude(what);
};

SpecObject.prototype.toNotRespondTo = function(what) {
  return expect(this.obj.__proto__).toNotInclude(what);
};

SpecObject.prototype.toHaveProperty = function(what) {
  return what in this.obj;
};


