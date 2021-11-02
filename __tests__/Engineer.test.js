const { test, expect } = require('@jest/globals');
const { executionAsyncId } = require('async_hooks');
const expectExport = require('expect');
const Engineer = require('../lib/Engineer');

test('creates a new engineer object', () => {
    const engineer = new Engineer('Matt', 'mattflynnpomp', 'mpompilio');

    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

})


test('checks getName logic', () => {
const engineer = new Engineer('Matt');

expect(engineer.getName()).toBe('Matt');

})

test('checks getId logic', () => {
    const engineer = new Engineer('Matt');

    expect(engineer.getId()).toEqual(expect.any(Number));
})

test('check getEmail logid', () => {
    const engineer = new Engineer('Matt', 'mattflynnpomp');

    expect(engineer.getEmail()).toEqual(expect.any(String));

})