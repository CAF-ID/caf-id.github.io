const puppeteer = require('puppeteer');
const fs = require('fs');

async function tt(url) {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-gpu",
      ]
    });
  
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});
    await page.goto("https://enka.network/u/863257287", { timeout: 0, waitUntil: 'networkidle0', });
    await page.click('button[class="svelte-ps463l"]');
    await page.waitForSelector('content[class="svelte-1w58zic"]', { visible: true, });
    var _img = await page.$x('//img')
    var img = await _img[14].evaluate(element => element.src); 
    var dl_img = await page.goto(img)
    fs.writeFileSync("screenshots/screenshot.jpg", await dl_img.buffer()).then(async p => {
      await page.close();
      await browser.close();
    })
  }

  tt().then(() => console.log('SAVED PICTURE'))
