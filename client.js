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
function collectEmployee(){
    // log to show employee submitted
    console.log('Submit employee');
    // variable object to capture input
    let employee = {
        firstName : $('#firstName').val(),
        lastName : $('#lastName').val(),
        empId : $('#employeeId').val(),
        title : $('#employeeTitle').val(),
        empAnnualSalary : $('#annualSalary').val()
    }
    // console log to make sure employee gets added
    // console.log(employee);
    // push employee into const employees
    employees.push(employee);
    // console log to show employees added
    console.log(employees);
    // empty inputs
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeId').val('');
    $('#employeeTitle').val('');
    $('#annualSalary').val('');
    // append to the DOM
    // create a new table row
    $('.employeeTable').append(`
        <tr class="employeeRow">
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.empId}</td>
            <td>${employee.title}</td>
            <td>$${employee.empAnnualSalary}</td>
            <td><button class="deleteBtn">Delete</button><td>
        </tr>
    `);
} // end collectEmployee

// Function to handle delete
function handleDelete() {
    // log to show delete button clicked
    console.log('clicked delete');
    // target new created row and remove from DOM
    $(this).closest('.employeeRow').remove();
} // end handleDelete


console.log('js ended');