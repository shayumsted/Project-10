// U78784426
// Function to load and display purchase orders
d3.dsv(",", "data/purchase_orders.csv", d3.autoType).then(data => {
    const ul = d3.select("#order-list");

    // Create a list item for each purchase order
    ul.selectAll("li")
      .data(data)
      .enter()
      .append("li")
      .text(d => `${d.customerName} - Order ID: ${d.orderId}: $${d.purchaseAmount}`);
}).catch(error => {
    console.error("Error loading the CSV file:", error);
});

