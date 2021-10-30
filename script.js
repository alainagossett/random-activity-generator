
//CONSTANTS
const BASE_URL = 'https://www.boredapi.com/api/activity';
// const API_KEY = ''; this API does not require a key


//VARIABLES
let activityData;

//CACHED ELEMENT REFERENCES
// const $activity = $('#activity');
// const $type = $('#type');
// const $partic = $('#partic');
const $form = $('form');
const $main = $('main');


//EVENT LISTENERS
$form.on('submit', handleSubmit);


//FUNCTIONS

function handleSubmit(evt){
//function to get data from API
    console.log(evt);
    evt.preventDefault();
    $.ajax('http://www.boredapi.com/api/activity')
        .then(function (data) {
            activityData = data;
            render ();
        }, function (error) {
            console.log('error:', error)
        }
        )
}

function render() {
//function to add data to DOM content
    $main.html( `
        <h3>Activity:<br/> ${activityData.activity}</h3><br/>
        <p><strong>Type:</strong><br/> ${activityData.type}</p><br/>
        <p><strong>Participants:</strong><br/> ${activityData.participants}</p>
    `)    
}