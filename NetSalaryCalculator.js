//   Net Salary Calculation Function Based on Armenian Tax Laws:
function calculateNetSalary(grossSalary) {
   
    if (isNaN(grossSalary) || grossSalary <= 0) {
        throw new Error("Invalid input. Gross salary must be a positive number.");
    }

   
    const incomeTax = grossSalary * 0.20;

  
    let socialSecurity;
    if (grossSalary <= 500000) {
        socialSecurity = grossSalary * 0.05;
    } else if (grossSalary <= 1125000) {
        socialSecurity = grossSalary * 0.10 - 25000;
    } else {
        socialSecurity = 87500;  
    }

    let stampDuty;
    if (grossSalary <= 100000) {
        stampDuty = 1500;
    } else if (grossSalary <= 200000) {
        stampDuty = 3000;
    } else if (grossSalary <= 500000) {
        stampDuty = 5500;
    } else if (grossSalary <= 1000000) {
        stampDuty = 8500;
    } else {
        stampDuty = 15000;
    }

    const netSalary = grossSalary - incomeTax - socialSecurity - stampDuty;

    return netSalary;
}


try {
    const grossSalary = 1200000;  
    const netSalary = calculateNetSalary(grossSalary);
    console.log(`Net Salary: ${netSalary} AMD`);
} catch (error) {
    console.log(error.message);
}