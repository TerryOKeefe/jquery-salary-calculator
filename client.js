console.log('js loaded');

$(document).ready(readyNow);

const employees = [];


function readyNow() {
    // console log to test source in
    console.log('jQuery sourced');
    // check that collectEmployee function works
    $('.addButton').on('click', collectEmployee);
    // append employees added to the DOM
    
}

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
    $('.employeeTable').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.empId}</td>
            <td>${employee.title}</td>
            <td>$${employee.empAnnualSalary}</td>
        </tr>
    `);

}



console.log('js ended');