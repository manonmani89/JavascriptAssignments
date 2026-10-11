import{chromium,test} from "@playwright/test"

test('learn CSS selectors',async ({page}) => {

await page.goto('https://login.salesforce.com/?locale=in')

await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')

await page.waitForLoadState('domcontentloaded')

await page.locator('#Login').click()

await page.locator("input[id='password']").fill('TestLeaf@2025')

await page.waitForLoadState('domcontentloaded')

await page.locator("input[name='Login']").click()

let pageTitle= await page.title()
console.log(pageTitle)

let pageUrl=page.url()
console.log(pageUrl)// https://login.salesforce.com/?locale=in
    
})