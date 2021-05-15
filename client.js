console.log('js loaded');

$(document).ready(readyNow);

// variable to hold employees
const employees = [];
let monthlyTotal = 0;



// function to run when jQuery is ready
function readyNow() {
    // console log to test source in
    console.log('jQuery sourced');
    // check that collectEmployee function works
    $('.addButton').on('click', collectEmployee);
    // delete employee information off the DOM
    $('.employeeTable').on('click', '.deleteBtn', handleDelete);
    // append salary to the DOM

} // end readyNow

// Function to collect employees
function collectEmployee() {
    // log to show employee submitted
    console.log('Submit employee');
    // variable object to capture input
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        empId: $('#employeeId').val(),
        title: $('#employeeTitle').val(),
        empAnnualSalary: $('#annualSalary').val(),
        monthlySalary: $('#annualSalary').val() / 12
    }

    // push employee into const employees
    employees.push(employee);
    // console log to show employees added
    console.log(employees);

    emptyInputs();
    employeeDOM();
    calcMonthlySalary();

}

// function to empty inputs on click
function emptyInputs() {
    // empty inputs
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeId').val('');
    $('#employeeTitle').val('');
    $('#annualSalary').val('');
}

// function to display employee on the DOM
function employeeDOM() {
    $('.employeeTable').empty();
    // append to the DOM
    for (let i = 0; i < employees.length; i++) {
        let employeeInfo = employees[i];

        // create a new table row when looping through employees array
        $('.employeeTable').append(`
        <tr class="employeeRow">
            <td>${employeeInfo.firstName}</td>
            <td>${employeeInfo.lastName}</td>
            <td>${employeeInfo.empId}</td>
            <td>${employeeInfo.title}</td>
            <td>$ ${employeeInfo.empAnnualSalary}</td>
            <td><button class="deleteBtn">Delete</button><td>
        </tr>
    `);
    }
}



// Function to handle delete
function handleDelete() {
    // log to show delete button clicked
    console.log('clicked delete');
    // target new created row and remove from DOM
    $(this).closest('.employeeRow').remove();
} // end handleDelete

function calcMonthlySalary() {
    // create variable to hold numbers from salary
    let monthTotal = 0;
    // loop through employees to add up salaries
    for (let taco of employees) {
        // divide salary by 12 for months in a year
        monthTotal += (taco.empAnnualSalary / 12);
        console.log('Monthly Costs:', monthTotal);
    }

    // variable to hold html tag
    let emptyDomInput = $('#monthlyTotal');
    // empty it
    emptyDomInput.empty();
    // append to the DOM 
    emptyDomInput.append(Math.round(monthTotal));
}

console.log('js ended');