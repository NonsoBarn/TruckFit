describe("purchase", () => {
  it("user can make purchases", () => {
    // Select Product
    cy.visit(" http://127.0.0.1:5174/");
    cy.findByRole("link", {
      name: /mens cotton jacket mens cotton \.\.\. \$55\.99/i,
    }).click();

    // Click on "Add to Cart button"
    cy.findByRole("button", { name: /add to cart/i }).click();
    // Click on "Go to Cart button"
    cy.findByRole("link", { name: /go to cart/i }).click();

    // Checkout
    cy.findByRole("button", { name: /checkout/i }).click();
  });
});
