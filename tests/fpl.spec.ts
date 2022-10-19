import { test, expect } from '@playwright/test';

let firstMatchTime;
let utcTime;

test('FPL deadline reminder', async ({ page }) => {
  await page.goto('https://draft.premierleague.com/fixtures');

  await expect(page).toHaveTitle("View Latest Premier League Fixtures | Fantasy Premier League Draft 2022/23");

  firstMatchTime = await page.locator("(//time)[1]").getAttribute('datetime');
  utcTime = new Date(firstMatchTime);

  console.log("Next GW's first match is at: "+utcTime.toUTCString());

  subtractHours(2,utcTime);
  console.log("FPL Transfer Deadline is at: "+utcTime.toUTCString())
  
  let systemDate = new Date();
  console.log("Todays' date is: "+systemDate.toUTCString());

  if(systemDate.getUTCDate()==utcTime.getUTCDate() && systemDate.getUTCDay()==utcTime.getUTCDay() && systemDate.getUTCFullYear()==utcTime.getUTCFullYear())
  {
    console.log("Today is FPL deadline day!");
  }
  else
  {
    console.log("Not today!");
  }

});

function subtractHours(numOfHours, time) {
  time.setHours(time.getHours() - numOfHours);
  return time;
}



