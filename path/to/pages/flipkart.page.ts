class FlipkartPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToHomePage() {
    await this.page.goto('https://flipkart.com');
  }

  async closeInitialPopup() {
    await this.page.getByRole('button', { name: '\u2715' }).click();
  }

  async enterSearchTerm(term) {
    await this.page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill(term);
  }

  async submitSearch() {
    await this.page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
  }

  async selectFirstNonSponsoredItem() {
    await this.page.getByRole('link', { name: 'Bestseller Apple iPhone 17 (Black, 256 GB) Add to Compare Apple iPhone 17 (' }).click();
  }

  async addToCart() {
    await this.page.getByRole('link', { name: 'Cart' }).click();
  }
}

module.exports = FlipkartPage;
