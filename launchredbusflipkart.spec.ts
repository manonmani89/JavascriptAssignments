import { chromium,test,webkit } from "@playwright/test"
import { url } from "inspector/promises"
test('learn to launch the chromium and webkit browser',async()=>{
    let browser= await chromium.launch({headless:false})
    let context= await browser.newContext()
    let page= await context.newPage()

    await page.goto("https://www.redbus.in/")
    const URL1=page.url()
    console.log(URL1);
    const TITLE1=await page.title()
    console.log(TITLE1); //Bus Booking Online and Train Tickets at Lowest Price - redBus

    let webkitBrowser= await webkit.launch({headless:false})
    let webkitContext= await webkitBrowser.newContext()
    let webkitPage= await webkitContext.newPage()

    await webkitPage.goto("https://www.flipkart.com/")
    const URL2=webkitPage.url()
    console.log(URL2);
    const TITLE2=await webkitPage.title()
    console.log(TITLE2); //Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com

})
