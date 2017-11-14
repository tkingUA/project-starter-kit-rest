'use strict';
import val from 'validator';

class Check {
    constructor(validator, key, data, message) {
        this.validator = validator;
        this.message = message;
        this.key = key;
        this.item = data[key];
        this.valid = true;
    }

    /**
     * addError
     * Invalidates and adds error message to parent validator
     * @param {String} message the message to set on validator error object
     */
    addError(message) {
        this.valid = false;
        this.validator.valid = false;
        this.validator.failed[this.key] = {
            message: message || this.message,
            focused: this.validator.errorCount === 0
        };
        this.validator.errorCount++;
    }

    required(message) {
        if (this.item == null) this.addError(message);
        return this;
    }
}

const checks = [
    'isInt',
    'isAlpha',
    'isBoolean',
    'isEmail',
    'isDecimal',
    'isEmpty',
    'isNotEmpty',
    'isNumeric',
    'isPhone'
];

/**
 * Custom validation methods
 */
val.isNotEmpty = function (value) {
    return !val.isEmpty(value);
};

val.isPhone = function (value) {
    return val.isMobilePhone(value, 'en-US');
};

val.isBoolean = function (value) {
    return typeof (value) === 'boolean';
};

val.isEmail = function (value) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value);
};

// loop over and add validation methods to the check class prototype
// returns 'this' to ensure validation can be chained
checks.forEach(check => {
    Check.prototype[check] = function (message) {
        if (!this.valid || this.item === null) return this;

        if (!val[check](this.item)) this.addError(message);
        return this;
    };
});

class Validator {
    constructor(data) {
        this.data = data;
        this.valid = true;
        this.errorCount = 0;
        this.failed = {};
    }

    /**
     * verify
     * Allows validation on a paticular key in the object
     * @param  {String} key     the key to check
     * @param  {String} message default error message to use
     * @return {Check}          chainable object to validate key
     */
    verify(key, message) {
        return new Check(this, key, this.data, message);
    }

    /**
     * done
     * Returns the validated object or error message
     * @return {Promise(Object || Error)}
     */
    done() {
        if (this.valid) return Promise.resolve(this.data);
        return Promise.reject(this.failed);
    }
}

export default Validator;
