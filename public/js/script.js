$(() => {
    $(".eatme").on("click", function (event) {
        event.preventDefault();
        $.ajax({
            type: "PUT",
            url: "/api/burgers/" + $(this).data("id")
        })
            .then(() => {
                location.reload();
            });
    });
    $("#orderSubmit").on("click", (event) => {
        event.preventDefault();
        let data = {
            burgerName: $("#burgerOrderForm").val().trim()
        }
        $.ajax({
            type: "POST",
            url: "/api/burgers",
            data: data
        })
            .then(() => {
                location.reload();
            });
    });
});