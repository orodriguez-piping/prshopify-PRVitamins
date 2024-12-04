import { test, expect } from '@playwright/test';

//Test to find broken images in the pages - in progress
test("Find broken image", async ({ page }) => {
    await page.goto("https://www.us.prsandbox.net/en-mx");
    await page.waitForLoadState();
    const images = page.locator("img");
    console.log(await images.count());
    const allImages = await images.all();
    for await (const img of allImages) {
        const imgSrc = await img.getAttribute('src');
        expect.soft(imgSrc?.length).toBeGreaterThan(1);
        //@ts-ignore
        if(imgSrc?.length > 1) {
            const res = await page.request.get("https://www.us.prsandbox.net/en-mx"+imgSrc);
            expect.soft(res.status(), "Failed to Load: " + imgSrc).toBe(200);
        }
    }

});
   