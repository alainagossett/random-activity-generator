
//CONSTANTS
const BASE_URL = 'https://www.boredapi.com/api/activity';
// const API_KEY = ''; this API does not require a key


//VARIABLES


//CACHED ELEMENT REFERENCES
const $activity = $('#activity');
const $type = $('#type');
const $partic = $('#partic');
const $form = $('form');


//EVENT LISTENERS
$form.on('submit', handleSubmit);


//FUNCTIONS

function handleSubmit(evt){
    console.log(evt);
    evt.preventDefault();
    $.ajax('http://www.boredapi.com/api/activity')
        .then(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error)
        }
        )
}