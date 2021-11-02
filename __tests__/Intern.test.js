const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates a new Intern object', () => {
    const intern = new Intern('Matt', 'mattflynnpomp', 'liberty');

    expect(intern.name).toBe('Matt');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

})