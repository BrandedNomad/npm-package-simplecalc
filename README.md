@brandednomad/simplecalc
==
A simple arithmetic calculator

## Installation

Requires __npm 2.7.0__ or higher

`npm init`

`npm install @brandednomad/simplecalc --save`

***

## Usage

var _factory = require("@mitchallen/calc"); 

var calc = _factory.create(); 

calc.clear(); 
calc.add(20); 
calc.sub(5); 
calc.mul(4); 
var result = calc.div(2); 
console.log(result);

***

## Methods

### _factory.create()

The factory __create__ method returns a calculator object.

It takes no parameters.

The method will return null if create fails, such as with bad parameters.

You can call create multiple times to create multiple calculater objects.

### object.clear()

Sets the internal accumulator to zero.

calc.clear()

### result = object.add(number)

Adds __*number*__ to the internal accumulator. Returns the new value of the accumulator.

calc.add(2)

### result = object.sub(number)

Subtracts __*number*__ from the internal accumulator. Returns the new value of the accumulator.

calc.sub(2)

### result = object.div(number)

Divides the value of the internal accumulator by __*number*__. Returns the new value of the accumulator. If divided by 0, accumulator will be set to infinity. 

calc.div(2)

## result = object.value()

Returns the current value of the internal accumulator.

var result = calc.value();

***

## Testing

To test, go to the root folder and type 

`npm test`

***

## Repo(s)

* [github.com/brandednomad/npm-package-simplecalc.git](https://github.com/BrandedNomad/npm-package-simplecalc.git)

***

## contributing

Contributions not accepted at this moment

## Version History

#### Version 0.2.0

* Added examples folder
* Added Object.value() method


#### Version 0.1.0

* initial release
