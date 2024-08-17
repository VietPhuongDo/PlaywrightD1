import { test, expect } from '@playwright/test';

test('has title',async({page}) =>{
  await page.goto("https://pw-blog.congcu.org/");
  await expect(page).toHaveTitle(/Học automation test từ chưa biết gì/)
}
);
// 2/ = regex = have

test('get started link', async ({ page }) => {
  await page.goto('https://pw-blog.congcu.org');
  await page.getByRole('link',{name:'Khóa học automation test cho người chưa biết gì'}).click;
  await expect(page.getByRole('heading',{name: 'Thông tin khoá học'})).toBeVisible; 
});
