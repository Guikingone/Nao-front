import { NaoFrontPage } from './app.po';

describe('nao-front App', () => {
  let page: NaoFrontPage;

  beforeEach(() => {
    page = new NaoFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
