const cardList = [
    {
        title: "Web Developer 2",
        image: "images/web2.gif",
        link: "About Web Developer 2",
        description: "HELLO! GOOD TO SEE YOU."
    },

    {
        title: "Web Developer 3",
        image: "images/panda.gif",
        link: "About Web Developer 3",
        description: "My amount of frustration as a web developer"
    }

]


const clickMe = () => {
    alert("thanks for clicking me");
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("form data submitted: ", formData);
}


const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}



$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
});