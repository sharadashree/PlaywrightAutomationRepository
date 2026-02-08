import {test,expect} from '@playwright/test'

test("First Playwright TestCase", function show(){
    console.log("Welcome to first Playwright Testcase");

})

test("Second Playwright Testcase",function(){
    console.log("Welcome to second Playwright Testcase");

})

test("Third Playwright Testcase",()=>{
    console.log("Welcome to third playwright Testcase");
})