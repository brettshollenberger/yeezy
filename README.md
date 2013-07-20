# Yeezy

Yeezy is an in-browser test suite that extends RSpec-style functionality to Javascript.

# Use

Write your tests using the RSpec expect syntax:

    testObject = 1;
    expect(testObject).toEq(1);

#### toRespondTo

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

#### toNotRespondTo

Returns true if the test object does not respond to a particular method. From this point forward, assume all positive methods (toRespondTo) have an equivalent negative method (toNotRespondTo).

    expect(testObject).toNotRespondTo('randomMethod');
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

#### toBeGreaterThan/toBeLessThan

Returns true if the object is greater than, less than, greater than or equal to, or less than or equal to:

    testObject = 1;
    expect(testObject).toBeGreaterThanOrEqualTo(1);
    > true

    expect(testObject).toBeLessThan(0);
    > false

#### toBeTrue/toBeFalse

Evaluates an object's truthiness. This evaluation does not necessarily mean the object == true:

    testObject = 1;
    expect(testObject).toBeTrue();
    > true




