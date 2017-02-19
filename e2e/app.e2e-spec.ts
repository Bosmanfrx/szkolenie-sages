import { StxPage } from './app.po';

describe('stx App', () => {
  let page: StxPage;

  beforeEach(() => {
    page = new StxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
