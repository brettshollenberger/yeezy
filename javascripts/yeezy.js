// Spec object constructor
function SpecObject(obj) {
  this.obj = obj;
};

// Expect calls constructor
Object.prototype.expect = function(obj) {
  return new SpecObject(obj);
};

// All methods hook onto the SpecObject prototype
SpecObject.prototype.toEq = function(what) {
  return this.obj == what;
};

SpecObject.prototype.toNotEq = function(what) {
  return this.obj != what;
};

SpecObject.prototype.toEql = function(what) {
  return this.obj === what;
};

SpecObject.prototype.toNotEql = function(what) {
  return (!(this.obj === what));
};

SpecObject.prototype.toBeTruthy = function() {
  if (this.obj) {
    return true;
  } else {
    return false;
  };
};

SpecObject.prototype.toNotBeTruthy = function() {
  if (this.obj) {
    return false;
  } else {
    return true;
  };
};

SpecObject.prototype.toBeFalsy = function() {
  if (this.obj) {
    return false;
  } else {
    return true;
  };
};

SpecObject.prototype.toNotBeFalsy = function() {
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

SpecObject.prototype.toNotHaveProperty = function(what) {
  return (!(what in this.obj));
};

