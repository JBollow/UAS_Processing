function ndvi() {
    console.log("pew");
    var JSONtoPOST = {
        "path": $('#path').val()
    };

    // JSNLog
    console.log(JSONtoPOST);

    // Post to local mongodb via nodejs using our own POST
    $.ajax({
        type: "POST",
        url: "http://localhost:7002/ndvi",
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(JSONtoPOST),
        traditional: true,
        cache: false,
        processData: false,
        success: function (data) {
            console.log("yep");
            alert(data.responseText);
        },
        error: function (error) {
            if (error.status === 200) {
                console.log("yep");
                alert(error.responseText);
            } else {
                console.log(error);
                console.log("nope");
            }
        },
        timeout: 0
    });
}

function las() {
    console.log("two");
}

function odm() {
    console.log("three");
}