import { test, expect } from '@playwright/test';

let firstMatchTime;
let utcTime;

test('FPL deadline reminder', async ({ page, request }) => {
  await page.goto('https://draft.premierleague.com/fixtures');

  await expect(page).toHaveTitle("View Latest Premier League Fixtures | Fantasy Premier League Draft 2022/23");

  firstMatchTime = await page.locator("(//time)[1]").getAttribute('datetime');
  utcTime = new Date(firstMatchTime);

  subtractHours(2,utcTime);
  
  let systemDate = new Date();

  if(systemDate.getUTCDate()==utcTime.getUTCDate() && systemDate.getUTCDay()==utcTime.getUTCDay() && systemDate.getUTCFullYear()==utcTime.getUTCFullYear())
  {
    console.log("Today is FPL deadline day!");
    console.log("Next GW's first match is on: "+utcTime.toUTCString());
    console.log("FPL Transfer Deadline is on: "+utcTime.toUTCString())

    const newIssue = await request.post(`//slack webhook here`);
  }
  else
  {
    console.log("Deadline is not today!");
  }
});

function subtractHours(numOfHours, time) {
  time.setHours(time.getHours() - numOfHours);
  return time;
}



