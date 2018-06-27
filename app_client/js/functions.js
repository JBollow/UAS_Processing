function ndvi() {
    var JSONtoPOST = {
        "path": $('#inputpath').val(),
        "output": $('#outputpath').val(),
    };

    console.log(JSONtoPOST);

    if ($('#inputpath').val() === "" || $('#outputpath').val() === "") {
        swal({
            titel: 'Error',
            text: 'Pfad eingeben!',
            type: 'error',
            customClass: 'swalCc',
            buttonsStyling: false,
        });
    } else {

        swal({
            position: 'bottom-end',
            type: 'info',
            title: 'Arbeit begonnen!',
            showConfirmButton: false,
            timer: 1500
        })
        $(".processing").css("visibility", "visible");


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
                swal({
                    titel: 'Info!',
                    text: data.responseText,
                    type: 'success',
                    customClass: 'swalCc',
                    buttonsStyling: false,
                });
                $(".processing").css("visibility", "hidden");
            },
            error: function (error) {
                if (error.status === 200) {
                    console.log("yep");
                    swal({
                        titel: 'Info!',
                        text: error.responseText,
                        type: 'success',
                        customClass: 'swalCc',
                        buttonsStyling: false
                    });
                    $(".processing").css("visibility", "hidden");
                } else {
                    console.log(error);
                    swal({
                        titel: 'Error',
                        text: error.responseText,
                        type: 'error',
                        customClass: 'swalCc',
                        buttonsStyling: false
                    });
                    $(".processing").css("visibility", "hidden");
                }
            },
            timeout: 0
        });

    }
}

function ndvivector() {
    var JSONtoPOST = {
        "path": $('#inputpath').val(),
        "output": $('#outputpath').val(),
    };

    console.log(JSONtoPOST);

    if ($('#inputpath').val() === "" || $('#outputpath').val() === "") {
        swal({
            titel: 'Error',
            text: 'Pfad eingeben!',
            type: 'error',
            customClass: 'swalCc',
            buttonsStyling: false,
        });
    } else {

        swal({
            position: 'bottom-end',
            type: 'info',
            title: 'Arbeit begonnen!',
            showConfirmButton: false,
            timer: 1500
        })
        $(".processing").css("visibility", "visible");


        // Post to local mongodb via nodejs using our own POST
        $.ajax({
            type: "POST",
            url: "http://localhost:7002/ndvivector",
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(JSONtoPOST),
            traditional: true,
            cache: false,
            processData: false,
            success: function (data) {
                console.log("yep");
                swal({
                    titel: 'Info!',
                    text: data.responseText,
                    type: 'success',
                    customClass: 'swalCc',
                    buttonsStyling: false,
                });
                $(".processing").css("visibility", "hidden");
            },
            error: function (error) {
                if (error.status === 200) {
                    console.log("yep");
                    swal({
                        titel: 'Info!',
                        text: error.responseText,
                        type: 'success',
                        customClass: 'swalCc',
                        buttonsStyling: false
                    });
                    $(".processing").css("visibility", "hidden");
                } else {
                    console.log(error);
                    swal({
                        titel: 'Error',
                        text: error.responseText,
                        type: 'error',
                        customClass: 'swalCc',
                        buttonsStyling: false
                    });
                    $(".processing").css("visibility", "hidden");
                }
            },
            timeout: 0
        });

    }
}

function las() {
    var JSONtoPOST = {
        "path": $('#inputpath').val(),
        "output": $('#outputpath').val(),
    };

    console.log(JSONtoPOST);

    // Post to local mongodb via nodejs using our own POST
    $.ajax({
        type: "POST",
        url: "http://localhost:7002/las",
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(JSONtoPOST),
        traditional: true,
        cache: false,
        processData: false,
        success: function (data) {
            alert(data.responseText);
        },
        error: function (error) {
            if (error.status === 200) {
                swal({
                    titel: 'Error',
                    text: error.responseText,
                    type: 'error',
                    customClass: 'swalCc',
                    buttonsStyling: false,
                });
            } else {
                console.log(error);
            }
        },
        timeout: 0
    });
}

function odm() {
    var JSONtoPOST = {
        "path": $('#inputpath').val(),
        "output": $('#outputpath').val(),
    };

    console.log(JSONtoPOST);

    // Post to local mongodb via nodejs using our own POST
    $.ajax({
        type: "POST",
        url: "http://localhost:7002/odm",
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(JSONtoPOST),
        traditional: true,
        cache: false,
        processData: false,
        success: function (data) {
            alert(data.responseText);
        },
        error: function (error) {
            if (error.status === 200) {
                swal({
                    titel: 'Error',
                    text: error.responseText,
                    type: 'error',
                    customClass: 'swalCc',
                    buttonsStyling: false,
                });
            } else {
                console.log(error);
            }
        },
        timeout: 0
    });
}

function tiles() {
    var JSONtoPOST = {
        "path": $('#inputpath').val(),
        "output": $('#outputpath').val(),
    };

    console.log(JSONtoPOST);

    if ($('#inputpath').val() === "") {
        swal({
            titel: 'Error',
            text: 'Pfad eingeben!',
            type: 'error',
            customClass: 'swalCc',
            buttonsStyling: false,
        });
    } else {

        swal({
            position: 'bottom-end',
            type: 'info',
            title: 'Arbeit begonnen!',
            showConfirmButton: false,
            timer: 1500
        })

        $(".processing").css("visibility", "visible");

        // Post to local mongodb via nodejs using our own POST
        $.ajax({
            type: "POST",
            url: "http://localhost:7002/tiles",
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(JSONtoPOST),
            traditional: true,
            cache: false,
            processData: false,
            success: function (data) {
                swal({
                    titel: 'Info!',
                    text: data.responseText,
                    type: 'success',
                    customClass: 'swalCc',
                    buttonsStyling: false,
                });
                $(".processing").css("visibility", "hidden");
                addTileLayer(data.responseText);
            },
            error: function (error) {
                if (error.status === 200) {
                    swal({
                        titel: 'Info!',
                        text: error.responseText,
                        type: 'success',
                        customClass: 'swalCc',
                        buttonsStyling: false
                    });
                    $(".processing").css("visibility", "hidden");
                    addTileLayer(error.responseText);
                } else {
                    console.log(error);
                    swal({
                        titel: 'Error',
                        text: error.responseText,
                        type: 'error',
                        customClass: 'swalCc',
                        buttonsStyling: false
                    });
                    $(".processing").css("visibility", "hidden");
                }
            },
            timeout: 0
        });
    }

}

shapefile = function () {
    $(".processing").css("visibility", "visible");
    shp("./AnnasShape.zip").then(function (geojson) {
        addShapefile(geojson.features);
        console.log(geojson);
    });
}