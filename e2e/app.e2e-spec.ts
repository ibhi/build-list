import { BuildListPage } from './app.po';

describe('build-list App', function() {
  let page: BuildListPage;

  beforeEach(() => {
    page = new BuildListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
