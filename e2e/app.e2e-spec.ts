import { EbookLibraryAppPage } from './app.po';

describe('ebook-library-app App', () => {
  let page: EbookLibraryAppPage;

  beforeEach(() => {
    page = new EbookLibraryAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
