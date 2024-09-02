interface Employee {
  id: number;
  name: string;
  team: string;
  hoursWorked: number;
  hourlyRate: number;
  totalPayment: number;
  paymentDate: string;
}

const employeeInformation = [
  {
    id: 1,
    name: 'John Doe',
    team: 'Engineering',
    hoursWorked: 40,
    hourlyRate: 25,
    totalPayment: 40 * 25,
    paymentDate: '2024-08-31'
  },
  {
    id: 2,
    name: 'Jane Smith',
    team: 'Marketing',
    hoursWorked: 35,
    hourlyRate: 30,
    totalPayment: 35 * 30,
    paymentDate: '2024-08-31'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    team: 'Product',
    hoursWorked: 45,
    hourlyRate: 28,
    totalPayment: 45 * 28,
    paymentDate: '2024-08-31'
  },
  {
    id: 4,
    name: 'Bob Brown',
    team: 'Customer Support',
    hoursWorked: 38,
    hourlyRate: 22,
    totalPayment: 38 * 22,
    paymentDate: '2024-08-31'
  },
  {
    id: 5,
    name: 'Eve Davis',
    team: 'Sales',
    hoursWorked: 42,
    hourlyRate: 27,
    totalPayment: 42 * 27,
    paymentDate: '2024-08-31'
  }
];

const reportCalculatorEmployees = (actor: 'CEO' | 'Accounting' | 'CTO') => {
  if (actor === 'CEO') {
    const report = employeeInformation.map((employee) => ({
      name: employee.name,
      totalPayment: employee.totalPayment,
      hoursWorked: employee.hoursWorked
    }));
    console.log('CEO Report:');
    console.log(report);
  } else if (actor === 'Accounting') {
    const report = employeeInformation.map((employee) => ({
      name: employee.name,
      paymentDate: employee.paymentDate,
      totalPayment: employee.totalPayment
    }));
    console.log('Accounting Report:');
    console.log(report);
  } else if (actor === 'CTO') {
    const report = employeeInformation.map((employee) => ({
      name: employee.name,
      totalPayment: employee.totalPayment
    }));
    console.log('CTO Report:');
    console.log(report);
  }
};

// Example usage:
reportCalculatorEmployees('CEO');
reportCalculatorEmployees('Accounting');
reportCalculatorEmployees('CTO');

/// WITH SINGLE RESPONSABILITY PRINCIPLE

const generateCEOReport = (employees: Employee[]) => {
  return employees.map((employee) => ({
    name: employee.name,
    totalPayment: employee.totalPayment,
    hoursWorked: employee.hoursWorked
  }));
};

// Function to generate Accounting report
const generateAccountingReport = (employees: Employee[]) => {
  return employees.map((employee) => ({
    name: employee.name,
    paymentDate: employee.paymentDate,
    totalPayment: employee.totalPayment
  }));
};

// Function to generate CTO report
const generateCTOReport = (employees: Employee[]) => {
  return employees.map((employee) => ({
    name: employee.name,
    totalPayment: employee.totalPayment
  }));
};
