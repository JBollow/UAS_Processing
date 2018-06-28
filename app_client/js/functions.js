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


        // Post via nodejs using our own POST
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


        // Post via nodejs using our own POST
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

    // Post via nodejs using our own POST
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

    // Post via nodejs using our own POST
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
        "path": $('#inputpath2').val()
    };

    console.log(JSONtoPOST);

    if ($('#inputpath2').val() === "") {
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

        // Post to via nodejs using our own POST
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
    if ($('#inputpath2').val() === "") {
        swal({
            titel: 'Error',
            text: 'Pfad eingeben!',
            type: 'error',
            customClass: 'swalCc',
            buttonsStyling: false,
        });
    } else {
        var JSONtoPOST = {
            "path": $('#inputpath2').val()
        };

        $(".processing").css("visibility", "visible");
        $.ajax({
            type: "POST",
            url: "http://localhost:7002/copyshape",
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(JSONtoPOST),
            success: function (data) {
                shp("shapefile/shape.zip").then(function (geojson) {
                    addShapefile(geojson.features);
                    console.log(geojson);
                    clearShapes();
                });
            },
            error: function (error, errorThrown) {
                console.log(errorThrown);
                if (error.status === 200) {
                    shp("shapefile/shape.zip").then(function (geojson) {
                        addShapefile(geojson.features);
                        console.log(geojson);
                        clearShapes();
                    });
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

clearShapes = function () {
    $.ajax({
        type: "POST",
        url: "http://localhost:7002/deleteshape",
        dataType: 'json',
        contentType: 'application/json',
        data: null,
        traditional: true,
        cache: false,
        processData: false,
        success: function (data) {
            console.log("shape deleted");
        },
        error: function (error) {
            if (error.status === 200) {
                console.log("shape deleted");
            } else {
                console.log(error);
            }
        },
        timeout: 0
    });

}