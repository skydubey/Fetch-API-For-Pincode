let inputpincode = document.getElementById('inputpincode');


$(document).ready(function () {

    $('#getDataBtn').on('click', function () {



        $.ajax({

            url: `https://api.zippopotam.us/IN/${inputpincode.value}`, // API URL
            type: 'GET', // GET OR POST



            beforeSend: function () {
                // THIS FUNCTION CALL BEFORE AJAX API HITS
                // HERE WE CAN SHOW OUR LOADER.
//                 console.log('Beforesend Function Initiated');
//                 console.log(inputpincode.value.length);

                if (inputpincode.value.length < 6 || inputpincode.value.length > 6) {
                    alert("Please Enter Valid Input");
                }



                // if (Object.keys(response).length === 0) {
                //     alert("Data not found");
                //     document.getElementById('area').innerText = "";
                //     document.getElementById('state').innerText = "";
                //     document.getElementById('country').innerText = "";
                //     document.getElementById('postcode').innerText = "";
                //     document.getElementById('latitude').innerText = "";
                //     document.getElementById('longitude').innerText = "";
                // }

                $('.loader-row').removeClass('d-none');

            },

            success: function (response, status) {
                // ONCE OUR API CALL SEND SUCCESS
                // THIS FUNCTION GETS CALLED.
                $('.loader-row').addClass('d-none');

                let placesLength = response.places.length;
                let area = response.places[0]['place name'];
                let state = response.places[0].state;
                let latitude = response.places[0].latitude;
                let longitude = response.places[0].longitude;
                let inputpincode = response['post code'];
                let country = response.country;

                if (placesLength > 1) {
                    let area2 = response.places[1]['place name']
                    // let area3 = response.places[2]['place name']

                    document.getElementById('area').innerText = area + " , " + area2;
                }

                else {
                    document.getElementById('area').innerText = area;

                }
                document.getElementById('state').innerText = state;
                document.getElementById('country').innerText = country;
                document.getElementById('postcode').innerText = inputpincode;
                document.getElementById('latitude').innerText = latitude;
                document.getElementById('longitude').innerText = longitude;
                $('.alert').addClass('d-none');



            },

            error: function (error, status) {
                // IF OUR API GET ANY ERROR
                // THIS FUNCTION GETS CALLED.

                document.getElementById('area').innerText = "";
                document.getElementById('state').innerText = "";
                document.getElementById('country').innerText = "";
                document.getElementById('postcode').innerText = "";
                document.getElementById('latitude').innerText = "";
                document.getElementById('longitude').innerText = "";


                $('.loader-row').addClass('d-none');
                $('.alert').removeClass('d-none');

            }
        })

    })

});


