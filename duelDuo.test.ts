import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(`Checks that clicking the Draw button displays the div with id = “choices”`, async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    const div = await driver.findElement(By.id('choices'))
    
    await drawBtn.click()
    const displayed = await div.isDisplayed()
    expect(displayed).toBeTruthy()
})

test(`Checks that clicking an “Add to Duo” button displays the div with id = “player-duo”`,async () => {
    const div = await driver.findElement(By.id('player-duo'))
    
    await driver.findElement(By.id('draw')).click()

    await driver.findElement(By.xpath(`//*[@id="choices"]/div[1]/button`)).click()
    
    const displayed = await div.isDisplayed()
    
    expect(displayed).toBeTruthy()
})