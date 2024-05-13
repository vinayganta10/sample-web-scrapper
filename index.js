import puppeteer from "puppeteer";

async function getQoutes() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport:null,
  });
  const page = await browser.newPage();
  await page.goto("http://quotes.toscrape.com/", {
    waitUntil: "domcontentloaded",
  });
  const quotes = await page.evaluate(()=>{
    const quote = document.querySelectorAll(".quote");
    return Array.from(quote).map(quote =>{
        const text = quote.querySelector(".text").innerText;
        const author = quote.querySelector(".author").innerText;
        return {text,author};
    })
  })
  console.log(quotes);
  //page.click('.pager > .next > a');
  //await browser.close();
}

getQoutes();
