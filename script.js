// a modal is like a popup where pressing tab will only focus on items in the modal
// and esc will get out of the modal and go back to the page
// create a button that displays a modal 
// in the modal should be a dropdown to select a timezone
// once a timezone is picked the modal should close and the time on the page should be updated to show the time of the timezone

// installation
// npm install micromodal


// Get the modal element by its ID
const modal = document.getElementById("modal"); 

// Get the button that opens the modal by its ID
const openModalButton = document.getElementById("openModal"); 

// Get the <span> element that closes the modal by its ID
const closeModalButton = document.getElementById("closeModal"); 

// the text that will update the time when clicking a button
const timezoneTime = document.getElementById('time') 

// When the user clicks the button, open the modal
openModalButton.onclick = function() {
    modal.style.display = "block"; // Change modal display to block, making it visible
}

// When the user clicks on <span> (x), close the modal
closeModalButton.onclick = function() {
    modal.style.display = "none"; // Change modal display to none, hiding it
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) { // Check if the clicked target is the modal background
        modal.style.display = "none"; // If true, hide the modal
    }
}



// button code
const dropdownContent = document.getElementById("DropDownContent")
// get the dropdownmenus button id

function showDropMenu(){
    if (dropdownContent.style.display === "block"){
        // if the drowdown is visible it will be set to invisible when clicked
        dropdownContent.style.display = "none"
    }
    else{
        // if not visual the dropdown will be set to visible
        dropdownContent.style.display = "block"
        
    }
}




// code for the drop downs of time zones to close the modal and change the time
const Las = document.getElementById("las")
// getting the ids for each of the time zone buttons
const Den = document.getElementById("den")
const Pen = document.getElementById("pen")

let timeInterval;

function clearExistingInterval(){
    // when this function is called it will clear the inverval
    if (timeInterval){
        clearInterval(timeInterval);
    }
}

function updateLasVegasTime(){
    const lasVegasTime = moment().tz('America/Los_Angeles').format('hh:mm:ss A')
    // this gets the timezone using momentjs and formats it to hour: minute: second : am or pm
    timezoneTime.innerText = lasVegasTime
    // changes the text to the time
}

function updateDenverTime(){
    const denverTime = moment().tz('America/Denver').format('hh:mm:ss A')
    timezoneTime.innerText = denverTime;
}

function updatePenTime(){
    const penTime = moment().tz('America/Pensacola').format('hh:mm:ss A')
    timezoneTime.innerText = penTime
}

Las.onclick =  function() {
    clearExistingInterval()
    // clears the interval incase you already click denver or pensacola first
    updateLasVegasTime();
    // changes to vegas time
    timeInterval = setInterval(updateLasVegasTime, 1000)
    // updates the time every 1000 miliseconds so it's a live clock
    modal.style.display = "none";
    // closes the modal after click
    dropdownContent.style.display = "none"
    // closes the dropdown when clicked

}
Den.onclick =  function() {
    modal.style.display = "none";
    dropdownContent.style.display = "none"
    clearExistingInterval()
    updateDenverTime();
    timeInterval = setInterval(updateDenverTime, 1000)
}
Pen.onclick =  function() {
    modal.style.display = "none";
    dropdownContent.style.display = "none"
    clearExistingInterval()
    updatePenTime()
    timeInterval = setInterval(updatePenTime, 1000)
}


