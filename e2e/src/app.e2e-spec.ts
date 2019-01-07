import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  xit('should display text on first tree node', () => {
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

  it('should see in details image equal to clicked in table data', () => {

    page.navigateTo();
    browser.debugger(); //NOT WORK!!???
    page.openTree();

    expect(page.isTableDataInTablePresent()).toBeTruthy();

    page.getImgOfTr1Td2InTableData().click();

    var srcTd = page.getImgOfTr1Td2InTableData()[0];
    console.log("srcTd " + srcTd);

    var srcInDetails = page.getImgOfDetailsComponent()[0];
    console.log("srcInDetails " + srcInDetails);

    expect(this.srcTd).toEqual(this.srcInDetails);
  });


});
