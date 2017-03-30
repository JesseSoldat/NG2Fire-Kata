import { Angularfire3Page } from './app.po';

describe('angularfire3 App', function() {
  let page: Angularfire3Page;

  beforeEach(() => {
    page = new Angularfire3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
