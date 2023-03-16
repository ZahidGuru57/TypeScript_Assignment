function calculateDiscount(productPrice: number, discountPercentage: number): void {
    let discountAmount: number = productPrice * (discountPercentage / 100);
  
    if (discountPercentage >= 50) {
      console.log("Error: Invalid discount percentage.");
      return;
    }
  
    let finalPrice: number = productPrice - discountAmount;
  
    console.log("Original price: $" + productPrice);
    console.log("Discount percentage: " + discountPercentage + "%");
    console.log("Discount amount: $" + discountAmount);
    console.log("Final price: $" + finalPrice);
  }
  
  // Test the function with different product prices and discount percentages
  calculateDiscount(20, 40);
  console.log("========================")
  calculateDiscount(10, 25);
  console.log("========================")
  calculateDiscount(20, 60);
  console.log("========================")

  