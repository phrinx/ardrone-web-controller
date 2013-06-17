$(document).ready(function () {
    $("#front").click(function () {
        $.ajax({
            url: "front",
            success: function(result) {}
        });
    });

    $("#back").click(function () {
        $.ajax({
            url: "back",
            success: function(result) {}
        });
    });

    $("#left").click(function () {
        $.ajax({
            url: "left",
            success: function(result) {}
        });
    });

    $("#right").click(function () {
        $.ajax({
            url: "right",
            success: function(result) {}
        });
    });

    $("#stop").click(function () {
        $.ajax({
            url: "stop",
            success: function(result) {}
        });
    });

    $("#land").click(function () {
        $.ajax({
            url: "land",
            success: function(result) {}
        });
    });

    $("#takeoff").click(function () {
        $.ajax({
            url:"takeoff",
            success: function(result) {}
        });
    });

     $("#headline").mouseover(function () {
        $.ajax({
            url: "blinkRed",
            success: function(result) {}
        });
    });
});

$(document).keydown(function(e){
    switch (e.which) {
    case 38:
        $.ajax({
            url: "front",
            success: function(result) {}
        });
        break;
    case 40:
        $.ajax({
            url: "back",
            success: function(result) {}
        });
        break;
    case 37:
        $.ajax({
            url: "left",
            success: function(result) {}
        });
        break;
    case 39:
        $.ajax({
            url: "right",
            success: function(result) {}
        });
        break;
    case 13:
        $.ajax({
            url: "takeoff",
            success: function(result) {}
        });
        break;
    case 27:
        $.ajax({
            url: "land",
            success: function(result) {}
        });
        break;
    default:
        //alert(e.which);
    }
});


var socket = io.connect();
socket.on('navdata', function (data) {
    var rotationData = "", altitudeData = "", velocityData = "";

    for (prop in data.demo.rotation) {
        rotationData += '<strong>'+prop+'</strong>: ' + data.demo.rotation[prop]+'<br/>';
    }

    altitudeData = data.demo.altitude;

    for (prop in data.demo.velocity) {
        velocityData += '<strong>'+prop+'</strong>: ' + data.demo.velocity[prop]+'<br/>';
    }

    $('#rotation_data').html(rotationData);
    $('#velocity_data').html(velocityData);
    $('#altitude_data').html(altitudeData);
});