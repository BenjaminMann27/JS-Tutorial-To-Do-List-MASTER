// CODE EXPLAINED channel
const dateElement = document.getElementById('date');
const clear = document.querySelector('.clear');
const list = document.getElementById('list');
const input = document.querySelector('input');

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

const options = { weekday: 'long', month: 'short', day: 'numeric' };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);
function add_to_do(toDo){
    