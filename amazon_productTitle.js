import puppeteer from "puppeteer";

async function getTitle() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto(
    "https://www.amazon.in/Starshine-Storage-Powered-MediaTek-Display/dp/B0CMTZNPXR/ref=sr_1_1_sspa?crid=C4X5PY8QABSR&dib=eyJ2IjoiMSJ9.72Zv1zopzF7FhmkS0wq57X184EPW_iifJvgpxPpKoN0Sep5zJy8KtiIHkbayrRO9KZw4hJTEUQE_e5bMxsqbV-iASel8DT3hWNt7RY66ekJ3457QYU-wCG9IZIJSjUrYZjbpqtonNvWIOsUVYjSAOzrWM6z_-SJvOdTiMNXpYiJAvjmkR_41ANDA7byaVmj18v3a_3UH7cCSZZOXh2lfAEPi6QMWq1S_EyRMxRuKZtw.bdi9atVVjJyJLBlnY_8W_WEuPwaba8bq6sqRsbU35Pc&dib_tag=se&keywords=mobile&qid=1715441200&sprefix=mobile%2Caps%2C232&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    { waitUntil: "domcontentloaded" }
  );

  await page.waitForSelector('.a-price-whole');

  const title = await page.evaluate(() => {
    const t = document.querySelector('.a-price-whole').innerHTML;
    return t;
  });
  console.log(title);
  //await browser.close();
}

getTitle();
