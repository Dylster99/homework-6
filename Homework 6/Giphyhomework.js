var listBrand = ['pizza', 'cheese', 'apple', 'bananas', 'grapes'];
$(document).ready(function () {
    //the array
    for (let i = 0; i < listBrand.length; i++) {
        const btn = $("<button>");
        btn.text(listBrand[i]);
        btn.addClass('button');
        btn.attr('data-name', listBrand[i]);
        $("#buttons").append(btn);
    }

    $('.button').on('click', function () {
        const gifn = $(this).attr("data-name");
        const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifn + "&api_key=antuxNXO4jMAHFRi9x1f0ecsFyDgCPjS&limit=10";
        console.log(queryURL)
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (let i = 0; i < response.data.length; i++) {
                let newdiv = $("<div id='gifdiv'>");
                $('#gifs').prepend(newdiv);
                let rating = response.data[i].rating;
                console.log(rating);
                let ratingP = $('<p>').text('Rated: ' + rating);
                $('#gifdiv').prepend(ratingP);
                let img = response.data[i].images.downsized.url;
                const gif = $("<img class= gifpause>").attr("src", img);
                $('#gifdiv').prepend(gif);

                

            }
        });

    })
    $(".gifpause").on("click", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        const state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
});

$('#Addbtn').on("click", function addbutton() {
    boxvalue = $('#Textbox').value;
    listBrand.push(boxvalue);
    event.preventDefault();
})
console.log(listBrand);