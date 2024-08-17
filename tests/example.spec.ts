import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://pw-blog.congcu.org');
  // Kiểm tra rằng Title contains text "Học automation test từ chưa biết gì"
  await expect(page).toHaveTitle(/Học automation test từ chưa biết gì/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://pw-blog.congcu.org');
  // Click vào link chứa text: "Khóa học automation test cho người chưa biết gì"
  await page.click('text=Khóa học automation test cho người chưa biết gì');
  // Kiểm tra trang web có chứa thẻ h2 với nội dung: "Thông tin khoá học"
  await expect(page.locator('h2')).toHaveText('Thông tin khoá học');
});
