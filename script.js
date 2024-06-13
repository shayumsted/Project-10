// U78784426
// Defining a function that loads CSV file data
 function loadData() {
    d3.dsv(',', 'data/purchase_orders.csv').then(function(data) {
        const ul = d3.select("#purchase-orders");

// Dynamic creation of <li> elements for each purchase order
        ul.selectAll("li")
            .data(data)
            .enter()
            .append("li")
            .text(function(d) {

// Format text content for each <li> element
         return `${d.customerName} - Order ID: ${d.orderId} - Purchase Amount: $${d.purchaseAmount}`;
    });
}).catch(function(error) {console.error('Error loading the CSV file:', error);
});}

// Calling loadData function once DOM content is loaded
document.addEventListener('DOMContentLoaded', loadData);