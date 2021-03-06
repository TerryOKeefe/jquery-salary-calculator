console.log('js loaded');

$(document).ready(readyNow);

// variable to hold employees
const employees = [];

// function to run when jQuery is ready
function readyNow() {
    // console log to test source in
    console.log('jQuery sourced');
    // check that collectEmployee function works
    $('.addButton').on('click', collectEmployee);
    // delete employee information off the DOM
    $('.employeeTable').on('click', '.deleteBtn', handleDelete);
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
    }

    // push employee into const employees
    employees.push(employee);
    // console log to show employees added
    console.log(employees);

    // call other functions to run when click happens
    emptyInputs();
    displayEmployee();
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
function displayEmployee() {
    $('.employeeTable').empty();
    // loop through employees and append to the DOM
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

// function to calculate monthly
function calcMonthlySalary() {
    // create variable to hold numbers from salary
    let monthTotal = 0;
    // loop through employees to add up salaries
    for (let month of employees) {
        // divide salary by 12 for months in a year
        monthTotal += (month.empAnnualSalary / 12);
        console.log('Monthly Costs:', monthTotal);
    }

    // highlight total monthly on the DOM if over 20000
    if (monthTotal >= 20000) {
        $('#monthlyTotal').css("background-color", "red");
        console.log('Over Monthly Budget');
    }
    
    // variable to hold html tag
    let emptyDomInput = $('#monthlyTotal');
    // empty it
    emptyDomInput.empty();
    // append to the DOM 
    emptyDomInput.append(`$ `, `${Math.round(monthTotal)}`);
} // end calcMonthlySalary


console.log('js ended');