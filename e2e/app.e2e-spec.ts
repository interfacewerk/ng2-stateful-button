import { AngularStatefulButtonPage } from './app.po';

describe('angular-stateful-button App', function() {
  let page: AngularStatefulButtonPage;

  beforeEach(() => {
    page = new AngularStatefulButtonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
