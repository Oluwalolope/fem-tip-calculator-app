// This function expects a JS object as an argument
// The object should contain the following properties
// - bill: The total amount
// - tipPercentage: The percentage of the tip to be paid
// - numberOfPeopleTipping: The number of people that are tipping
export function calculateTip({
    bill,
    tipPercentage,
    numberOfPeopleTipping
  }) {
    const tipData = [];
  
    const billAmount = parseInt(bill);
    const tipPercent = parseInt(tipPercentage) / 100;
    const numberOfPeople = parseInt(numberOfPeopleTipping);
  
    // Formula for calculating the total tip
    const totalTip = billAmount * tipPercent;
  
    // Formula for calculating the tip to be paid by each person
    const individualTip = totalTip / numberOfPeople;
  
    tipData.push({
      individualTip,
      totalTip
    });
    
    return tipData;
  }
  
  // The browser-provided Intl API is used to prepare a formatter object
  // This object offers a "format()" method that can be used to format numbers as currency
  // Example Usage: formatter.format(1000) => yields "$1,000"
  export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });