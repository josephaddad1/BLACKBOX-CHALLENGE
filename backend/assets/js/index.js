$("#sign_up").submit(function (event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function (n, i) {
        data[n['name']] = n['value']
    })


    var request = {
        "url": `http://localhost:3000/api/users`,
        "method": "POST",
        "data": data
    }

    $.ajax(request).done(function (response) {
        alert("User Successfully Created!");
        window.location = "http://localhost:3000"
    }).catch(error=>{
        console.log(error)
    })

})

$("#sign_in").submit(function (event) {
    event.preventDefault();
    var id = $(this).attr("id")

    var request = {
        "url": `http://localhost:3000/api/users/${id}`,
        "method": "GET"
    }

    $.ajax(request).done(function (response) {
        console.log("response", response)
        alert("User Logged in!");
        window.location = "http://localhost:3000/home"
    })

})
 