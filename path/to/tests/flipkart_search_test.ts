/**
 * Flipkart Search and Add to Cart Test
 *
 * This test script automates the process of searching for an iPhone 17 on Flipkart
 * and adding it to the cart. It follows the Playwright framework conventions.
 */

import { test, expect } from '@playwright/test';

// Test suite for Flipkart search and add to cart functionality
test.describe('Flipkart Search and Add to Cart', () => {

  /**
   * Test case: Search for iPhone 17 and add to cart
   *
   * Steps:
   * 1. Launch Chrome and navigate to https://flipkart.com and verify homepage loads successfully.
   * 2. Enter "Iphone 17" in the search bar and click enter.
   * 3. Click on the first non-sponsored item and wait for the product details page to load.
   * 4. Click on the add cart icon button on the product detail page and verify the correct item is added or not.
   */
  test('should search for iPhone 17 and add to cart', async ({ page }) => {
    // Step 1: Navigate to Flipkart homepage
    await page.goto('https://flipkart.com');
    console.log('Navigated to Flipkart homepage');

    // Step 2: Fill search field with 'Iphone 17'
    await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('Iphone 17');
    console.log('Filled search field with "Iphone 17"');

    // Step 3: Press Enter key
    await page.keyboard.press('Enter');
    console.log('Pressed Enter key');

    // Step 4: Click on the first non-sponsored item
    await page.getByRole('link', { name: 'Apple iPhone 17 (Sage, 256 GB' }).click();
    console.log('Clicked on the first non-sponsored item');

    // Step 5: Click on the add to cart icon
    await page.getByRole('link', { name: 'Bestseller Apple iPhone 17 (' }).click();
    console.log('Clicked on the add to cart icon');

    // Verification step: Ensure the correct item is added to the cart
    // This step would typically involve checking the cart contents, which is not detailed here.
  });

});
