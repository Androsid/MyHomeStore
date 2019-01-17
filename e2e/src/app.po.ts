import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNode1OfTree() {
    return element(by.xpath('/html/body/app-root/div/div[1]/app-catalog/div[2]/ul/li[1]/label'));
  }

  getNode2OfTree() {
    return element(by.xpath('/html/body/app-root/div/div[1]/app-catalog/div[2]/ul/li[1]/ul/li/label'));
  }

  getNode3OfTree() {
    return element(by.xpath('/html/body/app-root/div/div[1]/app-catalog/div[2]/ul/li[1]/ul/li/ul/li[1]/label'));
  }

  getNode4OfTree() {
    return element(by.xpath('/html/body/app-root/div/div[1]/app-catalog/div[2]/ul/li[1]/ul/li/ul/li[1]/ul/li/label'));
  }

  async openTree() {
    await this.getNode1OfTree().click();
    await this.getNode2OfTree().click();
    await this.getNode3OfTree().click();
    await this.getNode4OfTree().click();
  }

  async srcTableData() {
    var srcTdatr = JSON.stringify(await this.getImgOfTr1Td2InTableData().getAttribute('src'));
    return srcTdatr;
  }
  getImgOfTr1Td2InTableData() {
    return element(by.xpath('/html/body/app-root/div/div[2]/app-goods/div[2]/table/tbody/tr[1]/td[2]/img'));
  }

  async srcImgInDetails() {
    var srcInDetailsatr = JSON.stringify(await this.getImgOfDetailsComponent().getAttribute('src'));
    return srcInDetailsatr;
  }
  getImgOfDetailsComponent() {
    return element(by.xpath('/html/body/app-root/div/div[3]/app-details/div[2]/div[1]/img'));
  }

  async srcNameInDetails() {
    var srcNameInDetailsatr = JSON.stringify(await this.getNameOfDetailsComponent().getAttribute('value'));
    return srcNameInDetailsatr;
  }
  getNameOfDetailsComponent() {
    return element(by.xpath('//*[@id="mat-input-0"]'));
  }

  getTr1Td3InTableData() {
    return element(by.xpath('/html/body/app-root/div/div[2]/app-goods/div[2]/table/tbody/tr[1]/td[3]'));
  }

  isTableDataInTablePresent(): promise.Promise<boolean> {
    return element(by.xpath('/html/body/app-root/div/div[2]/app-goods/div[2]/table/tbody/tr[1]/td[3]')).isPresent();
  }

  getPage2Button() {
    return element(by.xpath('/html/body/app-root/div/div[2]/app-goods/div[3]/ngb-pagination/ul/li[3]/a'));
  }


}
