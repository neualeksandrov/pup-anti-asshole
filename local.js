  const puppeteer = require('puppeteer');
  const { exec } = require('node:child_process');
  const sleep = (ms) => {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  }
  
  function getRandomNumInRange(min, max) {
    let result;
    do {
      result = Math.random() * (max - min) + min;
    } while (result.toFixed() === result);
    return result;
  }
  
  var availMem = 0;
  var browser;
  
  (async () => {
    await sleep(getRandomNumInRange(1000, 60000));

    browser = await puppeteer.launch({
      browser: 'firefox',
      args: ['--profile=profile'],
      executablePath: '/bin/firefox', 
      headless: true
    });
    while (true) {
      exec("free -h -L | awk '{print $8}'", (error, stdout, stderr) => {
        let result = parseInt(stdout, 10);
        if (stdout.includes('Gi')) {
          result *= 1000;
        }
        if (stdout.includes('B')) {
          result = 0;
        }
        availMem = result;
        console.log(`${stdout}`);
      });
      if (availMem > 200) {
        try {
          const page = await browser.newPage();
          const url = "file:///home/shgz/pup-anti-asshole/local.html";
          await page.goto(url);
          await page.addScriptTag({ path: './ytm_anti_aaasshole2.js' });
        } catch (err) {
          console.log(err);
        }
      }
      await sleep(getRandomNumInRange(1000, 60000));
    }
  })()
  .catch(err => console.error(err))
  .finally(() => browser?.disconnect());
