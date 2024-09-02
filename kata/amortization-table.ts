interface Amortization {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

interface AmortizationParameters {
  interestRate: number;
  loanTerm: number;
  loanAmount: number;
}

const calculateAmortization = ({
  interestRate,
  loanTerm,
  loanAmount
}: AmortizationParameters): Amortization[] => {
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  let balance = loanAmount;
  const amortizationTable: Amortization[] = [];

  for (let month = 1; month <= numberOfPayments; month++) {
    const interest = balance * monthlyRate;
    const principal = monthlyPayment - interest;
    balance -= principal;

    amortizationTable.push({
      month,
      payment: monthlyPayment,
      principal,
      interest,
      balance: Math.max(balance, 0) // Ensures balance doesn't go negative
    });
  }

  return amortizationTable;
};

console.log(
  calculateAmortization({
    interestRate: 5,
    loanAmount: 100000,
    loanTerm: 1
  })
);

export { calculateAmortization };
