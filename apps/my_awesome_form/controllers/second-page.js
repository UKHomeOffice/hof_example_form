'use strict';

var util = require('util');
var controllers = require('hof').controllers;
var BaseController = controllers.base;

var SecondPageController = function SecondPageController() {
  BaseController.apply(this, arguments);
};

util.inherits(SecondPageController, BaseController);

SecondPageController.prototype.validateField = function validateField(keyToValidate, req) {
  return BaseController.prototype.validateField.call(this, keyToValidate, req);
};

module.exports = SecondPageController;
