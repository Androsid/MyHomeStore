import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('myHomeStore', () => {
  let page: AppPage;
  browser.driver.manage().window().maximize();

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display text on first tree node', async () => {

    await page.navigateTo();

    expect(await page.getNode1OfTree().getText()).toEqual('Одежда, обувь, аксессуары');
  });

  it('should open category tree and see loaded good in the table', async () => {

    await page.navigateTo();
    await page.openTree();

    expect(await page.isTableDataInTablePresent()).toBeTruthy();
    expect(await page.getTr1Td3InTableData().getText()).toEqual('Coat Blue');
  });

  it('should not see good in the table after change active category in tree', async () => {

    await page.navigateTo();
    await page.openTree();

    await page.getNode3OfTree().click();
    expect(await page.isTableDataInTablePresent()).toBeFalsy();
  });

  it('should see good in the table after change page', async () => {

    await page.navigateTo();
    await page.openTree();

    expect(await page.isTableDataInTablePresent()).toBeTruthy();
    await page.getPage2Button().click();
    expect(await page.isTableDataInTablePresent()).toBeTruthy();
    expect(await page.getTr1Td3InTableData().getText()).toEqual('Coat transparent');
  });

  it('should see in details image equal to clicked in table data', async () => {

    await page.navigateTo();
    //debugger;
    await page.openTree();

    expect(await page.isTableDataInTablePresent()).toBeTruthy();
    expect(await page.getTr1Td3InTableData().getText()).toEqual('Coat Blue');
    await page.getImgOfTr1Td2InTableData().click();

    expect(await page.srcTableData()).toEqual(await page.srcImgInDetails());
  });

  it('should see in details name of good equal to clicked in table data', async () => {

    await page.navigateTo();
    await page.openTree();

    expect(await page.isTableDataInTablePresent()).toBeTruthy();
    expect(await page.getTr1Td3InTableData().getText()).toEqual('Coat Blue');
    await page.getImgOfTr1Td2InTableData().click();

    expect("\"" + await page.getTr1Td3InTableData().getText() + "\"").toEqual(await page.srcNameInDetails());
  });

});
