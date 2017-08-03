import { KanbanDeskPage } from './app.po';

describe('kanban-desk App', () => {
  let page: KanbanDeskPage;

  beforeEach(() => {
    page = new KanbanDeskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
