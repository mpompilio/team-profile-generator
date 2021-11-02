const {
    test,
    expect
} = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates a new Intern object', () => {
    const intern = new Intern('Matt', 'mattflynnpomp', 'liberty');

    expect(intern.name).toBe('Matt');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

})

test('checks getName logic', () => {
    const intern = new Intern('Matt');

    expect(intern.getName()).toBe('Matt');

})

test('checks getId logic', () => {
    const intern = new Intern('Matt');

    expect(intern.getId()).toEqual(expect.any(Number));
})

test('check getEmail logic', () => {
    const intern = new Intern('Matt', 'mattflynnpomp');

    expect(intern.getEmail()).toEqual(expect.any(String));

})

test('check getSchool logic', () => {
    const intern = new Intern('Matt', 'mattflynnpomp', 'liberty');

    expect(intern.getSchool()).toEqual(expect.any(String));
})