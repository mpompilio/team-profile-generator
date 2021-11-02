const {
    test,
    expect
} = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a new Manager object', () => {
    const manager = new Manager('Matt', 'mattflynnpomp', 12);

    expect(manager.name).toBe('Matt');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

})

test('checks getName logic', () => {
    const manager = new Manager('Matt');

    expect(manager.getName()).toBe('Matt');

})

test('checks getId logic', () => {
    const manager = new Manager('Matt');

    expect(manager.getId()).toEqual(expect.any(Number));
})

test('check getEmail logid', () => {
    const manager = new Manager('Matt', 'mattflynnpomp');

    expect(manager.getEmail()).toEqual(expect.any(String));

})