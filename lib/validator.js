const { CastError, ModelError } = require('./Errors');
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
const isNumber = input => {
  return typeof input === 'number';
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
const isBoolean = input => {
  return typeof input === 'boolean';
};

/**
 * Is this a date?
 * @param input
 * @returns {date}
 */
const toDate = input => {
  let temp;
  if(!isNumber(input)) {
    temp = Date.parse(input);
  }
  else {
    temp = input;
  }
  const output = new Date(temp);

  if(String(output) === 'Invalid Date') {
    throw new ModelError('Input needs to be a date');
  }
  else {
    return output;
  } 
};

/**
 * 
 * @param input 
 * @returns {number}
 */

const toNumber = input => {
  if(isNumber(input)) {
    return input;
  }
  if(isString(input)) {
    if(Number.isNaN(input)) {
      throw ModelError;
    }
    return Number(input);
  }
  else {
    throw new CastError('number', (typeof input));
  }
};

/**
 * 
 * @param input 
 * @returns {string}
 */
const toString = input => {
  if(isString(input)) {
    return input;
  }
  else {
    throw new CastError('string', (typeof input));
  }
};

/**
 * 
 * @param input 
 * @returns {boolean}
 */
const toBoolean = input => {
  if(isBoolean(input)) {
    return input;
  }
  if(isString(input)) {
    if(input.toLowerCase() === 'true') {
      return true;
    }
    if(input.toLowerCase() === 'false') {
      return false;
    }
    else {
      return CastError;
    }
  }
};

/**
 * Based on a set of rules, what is correct validator?
 * @param input
 * @returns {boolean}
 */
const getCaster = (input) => {
  const casterList = {
    'string': toString,
    'number': toNumber,
    'boolean': toBoolean,
    'date': toDate
  };
  return casterList[input];
};

module.exports = {
  isString,
  isNumber,
  isBoolean,
  getCaster
};


