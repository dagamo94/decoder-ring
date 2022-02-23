// Write your tests here!
const { polybius } = require('../src/polybius');
const { expect } = require('chai');

describe("polybius", () => {
    it("should encode a message by translating each letter to number pairs", ()=>{
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.equal(expected);
    });

    it("should maintain the original spaces", ()=>{
        const expected = "3251131343 2543241341";
        const actual = polybius("Hello world");
        expect(actual).to.equal(expected);
    })

    it("should encode both 'i' and 'j' to '42'", ()=>{
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.equal(expected);
    })

    it("should return false if the number of characters in the given string to be decoded is odd", ()=>{
        const expected = false;
        const actual = polybius("12345", false);
        expect(actual).to.equal(expected);
    });

    it("should decode a message by translating each number pair into a decoded string", ()=>{
        const expected = "aaa";
        const actual = polybius("111111", false);
        expect(actual).to.equal(expected);
    })

    it("should maintain the original spaces when decoding a message", ()=>{
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    });

    it("should show i and j as one character (i/j) when decoding", ()=>{
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(actual).to.equal(expected); 
    })
})