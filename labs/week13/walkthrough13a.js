$(document).ready(function () {
    //code goes here

    let text = "Hello";
    console.log("Text :", text);
    const tax = 0.13;

    console.log("Constant :", tax);

    //TOPIC 1: selecting the elements
    //select the particular/specific section

    let section = $('#main-page');

    console.log("Section: ", section);

    //Select the first article

    let first = $('#main-page > article:first-child');

    console.log("First: ", first);

    //select the next element after one element

    let next = first.next();

    console.log("Next : ", next);

    //select all paragraphs

    let para = $('#main-page p');
    console.log("Paragraphs: ", para);

    //other way

    let para2 = $('#main-page').find('p').css({color:'red'});

    //select article paragraph Artcile2

    let article2_p = $('.article2 p');
    console.log("A2 paragraph: ", article2_p);

    //TOPIC 2: click event

    $("input[type=button]").click(() => {
        //fetch the user name and display in p tag
        let uname = $("#username").val();
        // alert(uname);
        $('#main-page form p').html("Hello " + uname);
        $('#main-page form p').css({color:'green'});
        $('#username').addClass("demo");
        $('#username').removeClass("test");
        $('#username').toggleClass("test");
    });

    //TOPIC 3: setTimeout(function, time)

    setTimeout(()=>{

        //change the color
        $('#main-page form p').css({color:'blue'});
    }, 36000);

    //animate

    $( "#main-page" ).animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
    }, 1500 );


})