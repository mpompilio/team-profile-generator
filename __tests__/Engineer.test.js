const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates a new engineer object', () => {
    const engineer = new Engineer('Matt', 'mattflynnpomp', 'mpompilio');

    expect(engineer.name).toBe('Matt');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

})