var textArea = $(".col-10");
var currentHour = moment().hours();

currentDay.innerHTML = moment().format('MMMM Do YYYY');

$(".saveBtn").click(function() {
    var value = $(this).siblings(".col-10").val()
    console.log(value)
    var id = $(this).parent().attr("id")


    localStorage.setItem(id, value)
})

$(".time-block").each(function() {
    var id = $(this).attr("id")
    var appts = localStorage.getItem(id)
    $(this).find(textArea).val(appts)

    if (id > currentHour) {
        $(this).addClass("future")
    } else if (id === currentHour) {
            $(this).addClass("present")
    } else {
            $(this).addClass("past")
    }
})