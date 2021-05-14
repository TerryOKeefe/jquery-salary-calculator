console.log('js loaded');

$(document).ready(readyNow);

const employees = [];

function readyNow() {
    // console log to test source in
    console.log('jQuery sourced');
    // check that collectEmployee function works
    $('.addButton').on('click', collectEmployee);
}

function collectEmployee(){
    console.log('Submit employee');
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

}



console.log('js ended');