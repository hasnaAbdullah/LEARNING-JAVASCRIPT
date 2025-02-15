/*
 * if you buy ticket under 100, you will pay 100tk per ticket.
 * if you buy ticket under 200, you will pay 90tk per ticket. Of course you will count this discount for only 100 to 200.
 * if you buy ticket above 200, you will pay 100tk per ticket under 100.
 then you will pay 90tk for 100 to 200 per ticket. then you will pay 70tk above 200 ticket;
 */

function discountedTicket(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;
  if (quantity <= 100) {
    let first100TotalPrice = quantity * first100Price;
    return first100TotalPrice;
  } else if (quantity <= 200) {
    let first100TotalPrice = 100 * first100Price;
    let second100TotalPrice = (quantity - 100) * second100Price;
    let totalPrice = first100TotalPrice + second100TotalPrice;
    return totalPrice;
  } else {
    let first100TotalPrice = 100 * first100Price;
    let second100TotalPrice = 100 * second100Price;
    let above200TotalPrice = (quantity - 200) * above200Price;
    let totalPrice =
      first100TotalPrice + second100TotalPrice + above200TotalPrice;
    return totalPrice;
  }
}
const totalTicketPrice = discountedTicket(220);
console.log(totalTicketPrice);
