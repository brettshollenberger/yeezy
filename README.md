# Yeezy

Yeezy is an in-browser BDD framework that extends RSpec-style functionality to Javascript.

# Use

Write your tests using the RSpec expect syntax:

    testObject = 1;
    expect(testObject).toEq(1);

#### Duck Typing

Returns true if the test object responds to a particular method:

    expect(testObject).toRespondTo('constructor');
    > true
    expect(testObject).toRespondTo('randomMethod');
    > false

#### toHaveProperty

Returns true if the test object has a particular property:

    testObject = {
      testProp: "test"
    };
    expect(testObject).toHaveProperty('testProp');
    > true

#### toInclude

Returns true if object includes the passed argument:

    testObject = [1, 2, 3];
    expect(testObject).toInclude(1);
    > true

#### toHavePrototype

Returns true if the object has a given prototype:

    testObject = {};
    expect(testObject).toHavePrototype(Object);
    > true

    testObject = [];
    expect(testObject).toHavePrototype(Object);
    > false // Primitive datatypes are not of type Object

#### toBeTypeOf

Returns true if the element is a given type:

    testObject = {};
    expect(testObject).toBeTypeOf("object");
    > true

    expect(testObject).toNotBeTypeOf("undefined");
    > true

#### toMatch

Returns true if the object matches a given regular expression:

    testObject = 11;
    expect(testObject).toMatch(/\d{2}/);
    > true

#### toEq

Returns true if the object fulfills an == statement:

    testObject = 1;
    expect(testObject).toEq(1);
    > true

#### toEql

Returns true if the object fulfills an === statement (no type casting occurs)

    a = 1;
    b = "1";
    expect(a).toNotEql(b);
    > true

#### toBeGreaterThan/toBeLessThan

Returns true if the object is greater than, less than, greater than or equal to, or less than or equal to:

    testObject = 1;
    expect(testObject).toBeGreaterThanOrEqualTo(1);
    > true

    expect(testObject).toBeLessThan(0);
    > false

#### toBeWithin

Returns true if in range:

    testObject = 5;
    expect(testObject).toBeWithin(1, 10);
    > true

#### toBeTruthy/toBeFalsy

Evaluates an object's truthiness. This evaluation does not necessarily mean the object == true:

    testObject = 1;
    expect(testObject).toBeTruthy();
    > true

    testObject = 2;
    expect(testObject).toBeTruthy();
    > true

    testObject = 0;
    expect(testObject).toBeFalsy();
    > true

    expect("apple").toBeTruthy();
    > true




