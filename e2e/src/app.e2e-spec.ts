import { AppPage } from './app.po';
import { browser } from 'protractor';
import { fakeAsync, tick, async } from '@angular/core/testing';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display text on first tree node', () => {
    page.navigateTo();
    expect(page.getNode1OfTree().getText()).toEqual('Одежда, обувь, аксессуары');
  });

  xit('should open category tree and see loaded good in the table', () => {
    page.navigateTo();
    page.openTree();

    expect(page.isTableDataInTablePresent()).toBeTruthy();
    expect(page.getTr1Td3InTableData().getText()).toEqual('Coat Blue');
  });

  xit('should not see good in the table after change active category in tree', () => {
    page.navigateTo();
    page.openTree();

    page.getNode3OfTree().click();
    expect(page.isTableDataInTablePresent()).toBeFalsy();
  });

  xit('should see good in the table after change page', () => {
    page.navigateTo();
    page.openTree();

    expect(page.isTableDataInTablePresent()).toBeTruthy();
    page.getPage2Button().click();
    expect(page.isTableDataInTablePresent()).toBeTruthy();
    expect(page.getTr1Td3InTableData().getText()).toEqual('Coat transparent');
  });

  it('should see in details image equal to clicked in table data', async() => {

    await page.navigateTo();
    //browser.debugger(); //NOT WORK!!???
    debugger;
    await page.openTree();

    expect(await page.isTableDataInTablePresent()).toBeTruthy();

    await page.getImgOfTr1Td2InTableData().click();

    var srcTd = await page.getImgOfTr1Td2InTableData()[0].src;
    console.log("srcTd " + srcTd);

    var srcInDetails = await page.getImgOfDetailsComponent()[0].src;
    console.log("srcInDetails " + srcInDetails);

    expect(this.srcTd).toEqual(this.srcInDetails);
  });


});
