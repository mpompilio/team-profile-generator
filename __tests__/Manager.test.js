const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a new Manager object', () => {
    const manager = new Manager('Matt', 'mattflynnpomp', 12);

    expect(manager.name).toBe('Matt');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

})