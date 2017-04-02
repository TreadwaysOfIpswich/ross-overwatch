import { RossOverwatchPage } from './app.po';

describe('ross-overwatch App', () => {
  let page: RossOverwatchPage;

  beforeEach(() => {
    page = new RossOverwatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
