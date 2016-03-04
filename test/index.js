'use strict';

var assert = require('assert');
var errorableOrder = require('../lib');
var errorable = require('errorable');
var Generator = errorable.Generator;
var cnErrors = new Generator(errorableOrder, 'zh-CN').errors;
var enUsErrors = new Generator(errorableOrder, 'en-US').errors;

var errorCount = 0;

for (var k in cnErrors) {
  if (cnErrors[k] instanceof Object) {
    errorCount++;
  }
}

describe('errorable-admin', function () {
  it('should have administrator errors in zh-CN!', function () {
    var count = 0;
    var errors = {
      OrderNotFound: '订单未找到！',
      OrderNotUpdated: '订单未更新！',
      OrderStateTransferNotAllowed: '订单状态转换不被允许！'
    };
    for (var k in errors) {
      if (typeof errors[k] === 'string') {
        assert.equal(true, cnErrors[k].message === errors[k]);
        count++;
      }
    }
    assert.equal(errorCount, count);
  });

  it('should have administrator errors in en-US!', function () {
    var count = 0;
    var errors = {
      OrderNotFound: 'Order Not Found!',
      OrderNotUpdated: 'Order Not Updated!',
      OrderStateTransferNotAllowed: 'Order State Transfter Not Allowed!'
    };

    for (var k in errors) {
      if (typeof errors[k] === 'string') {
        assert.equal(true, enUsErrors[k].message === errors[k]);
        count++;
      }
    }
    assert.equal(errorCount, count);
  });
});
