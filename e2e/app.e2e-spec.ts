import { AcwebappPage } from './app.po';

describe('acwebapp App', () => {
  let page: AcwebappPage;

  beforeEach(() => {
    page = new AcwebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
