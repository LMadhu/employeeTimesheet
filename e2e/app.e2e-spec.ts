import { EmployeeTimesheetPage } from './app.po';

describe('employee-timesheet App', () => {
  let page: EmployeeTimesheetPage;

  beforeEach(() => {
    page = new EmployeeTimesheetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
