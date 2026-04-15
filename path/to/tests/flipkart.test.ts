import { test, expect } from '@playwright/test';
import { FlipkartPage } from '../pages/flipkart.page';

test.describe('Flipkart Test Suite', () => {
  test('Test Case: Add iPhone 17 to Cart', async ({ page }) => {
    const flipkartPage = new FlipkartPage(page);

    // Step 1: Navigate to the Flipkart homepage
    await flipkartPage.navigateToHomePage();

    // Step 2: Close the initial popup
    await flipkartPage.closeInitialPopup();

    // Step 3: Enter 'Iphone 17' in the search bar
    await flipkartPage.enterSearchTerm('Iphone 17');

    // Step 4: Press Enter to search for the product
    await flipkartPage.submitSearch();

    // Step 5: Click on the first non-sponsored item
    await flipkartPage.selectFirstNonSponsoredItem();

    // Step 6: Click on the add to cart icon button
    await flipkartPage.addToCart();

    // Verification step: Verify the correct item is added to the cart
    // This step would typically involve checking the cart contents
    // Example: expect(await flipkartPage.isItemInCart('Iphone 17')).toBeTruthy();
  });
});
