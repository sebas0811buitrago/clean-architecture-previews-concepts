type Currency = 'USD' | 'EUR' | 'GBP';

function taxReporter(amount: number, currency: Currency) {
  let tax: number;

  if (currency === 'USD') {
    tax = amount * 0.07; // 7% tax for USD
  } else if (currency === 'EUR') {
    tax = amount * 0.2; // 20% tax for EUR
  } else if (currency === 'GBP') {
    tax = amount * 0.15; // 15% tax for GBP
  } else {
    throw new Error('Unsupported currency');
  }

  console.log('the final tax is', tax);
}

// Example usage
taxReporter(100, 'USD');
taxReporter(100, 'EUR');
taxReporter(100, 'GBP');

// With Open and Closed principle

type CountryTaxCalculator = (amount: number) => number;

function taxReporterOCP(amount: number, calculateTax: CountryTaxCalculator) {
  console.log('the final tax is', calculateTax(amount));
}

const EURTaxCalculator: CountryTaxCalculator = (amount) => amount * 0.07;
const EGBOTaxCalculator: CountryTaxCalculator = (amount) => amount * 0.2;
const GBPOTaxCalculator: CountryTaxCalculator = (amount) => amount * 0.15;

taxReporterOCP(100, EURTaxCalculator);
taxReporterOCP(100, EGBOTaxCalculator);
taxReporterOCP(100, GBPOTaxCalculator);
