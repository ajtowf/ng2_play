import { Ng2PlayPage } from './app.po';

describe('ng2-play App', function() {
  let page: Ng2PlayPage;

  beforeEach(() => {
    page = new Ng2PlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
