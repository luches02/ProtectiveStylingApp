// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculateButton").click(function () {
        
        var hours = parseFloat($("#hours").val());
        var hourlyRate = parseFloat($("#hourlyRate").val());

        // Validate the input
        if (hours > 0) {
            var total = hours * hourlyRate;
            $("#total").val(total);
        }
        else {
            alert("Please enter a valid number of hours");
        }
    });
});
