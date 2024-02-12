const calculateMonthlyPayments = (totalPrice, totalDuration, quantityPurchased) => {
  const paymentPerMonth = totalPrice / totalDuration;
  const monthlyPayments = Array.from({ length: totalDuration }, (_, i) => {
    const dueDate = new Date();
    dueDate.setMonth(dueDate.getMonth() + i + 1);
    const currentPayment = Math.min(paymentPerMonth, totalPrice);
    totalPrice -= currentPayment;

    return {
      dueDate: dueDate.toLocaleDateString(),
      amount: `$${(currentPayment * quantityPurchased).toFixed(2)}`,
    };
  });

  return monthlyPayments;
};

function buyBook(
  bookDetails,
  discountPercentage,
  taxPercentage,
  totalDuration,
  quantityPurchased
) {
  const TAX_RATE = 0.01;
  const { price } = bookDetails;

  const totalPrice =
    price *
    (1 - discountPercentage / 100) *
    (1 + (taxPercentage / 100 + TAX_RATE));

  return calculateMonthlyPayments(totalPrice, totalDuration, quantityPurchased);
}

function buyBookWithStock(
  bookDetails,
  discountPercentage,
  taxPercentage,
  stock,
  quantityPurchased,
  totalDuration
) {
  const TAX_RATE = 0.01;
  const paymentSchedule = buyBook(
    bookDetails,
    discountPercentage,
    taxPercentage,
    totalDuration,
    quantityPurchased
  );
  const totalPrice =
    bookDetails.price *
    (1 - discountPercentage / 100) *
    (1 + (taxPercentage / 100 + TAX_RATE));
  const totalCost = totalPrice * quantityPurchased;

  if (stock < quantityPurchased) {
    console.log(`Insufficient stock to purchase ${quantityPurchased} books.`);
    return;
  }

  console.log('Book Purchase Data:');
  console.log(`Quantity purchased: ${quantityPurchased} books`);
  console.log(`Total cost: $${totalCost.toFixed(2)}`);

  const remainingStock = stock - quantityPurchased;

  if (remainingStock > 0) {
    console.log(`Remaining stock: ${remainingStock} books`);
  } else if (remainingStock === 0) {
    console.log('Maximum quantity of items has been purchased. No more can be added.');
  } else {
    console.log('Out of stock! Cannot purchase more books.');
  }
  

  console.log('Payment Schedule:');
  console.log(paymentSchedule);
}

const bookDetails = {
  title: 'Dilan 1990',
  author: 'Pidi Baiq',
  price: 20000.0,
};

const discountPercentage = 10;
const taxPercentage = 35;
const bookStock = 15;
const quantityPurchased = 17;
const totalDuration = 6; // Credit duration in months

buyBookWithStock(
  bookDetails,
  discountPercentage,
  taxPercentage,
  bookStock,
  quantityPurchased,
  totalDuration
);

console.log('============================================================');
console.log('==================== Logic Test ============================');
const majorityElement = nums => {
  const counts = {};

  nums.forEach(num => {
    counts[num] = (counts[num] || 0) + 1;
  });

  let majority;
  let maxCount = 0;
  Object.keys(counts).forEach(num => {
    if (counts[num] > maxCount) {
      majority = num;
      maxCount = counts[num];
    }
  });

  if (maxCount > nums.length / 2) {
    console.log('Majority Element:');
    return majority;
  } else {
    return null;
  }
};

console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
