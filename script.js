document.addEventListener('DOMContentLoaded', function() {
    d3.dsv(",", "data/purchase_orders.csv").then(function(data) {
        const ul = d3.select("#purchase-orders");

        ul.selectAll("li")
            .data(data)
            .enter()
            .append("li")
            .text(d => `${d.customerName} - Order ID: ${d.orderId} - Purchase Amount: $${d.purchaseAmount}`);
    }).catch(function(error) {console.error('Error loading the CSV file:', error);});
});