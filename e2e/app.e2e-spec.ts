import { NgxChartsTest1Page } from './app.po';

describe('ngx-charts-test1 App', () => {
  let page: NgxChartsTest1Page;

  beforeEach(() => {
    page = new NgxChartsTest1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
