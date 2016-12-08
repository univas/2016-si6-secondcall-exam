(function () {
    "use strict"

    function getEmployeeById(id) {
        $.ajax({
            method: "GET",
            url: "/api/employees/" + id
        })
        .done(student => {
            console.log(student)
        });
    }

    $("form").on("submit", event => {
        let id = $("#employeeId").val()
        getEmployeeById(id)
        return false
    })
    
})()