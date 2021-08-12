// Use the window load event to ensure all elements have loaded
// before attaching event handlers.

let topTracker = 0;
let leftTracker = 0;

window.addEventListener('load', function() {
    console.log("It's loaded!");

    // A window confirm should alert user to "Confirm that the
    // shuttle is ready for takeoff." If the shuttle is ready for
    // takeoff, then add parts b-d.

    //let takeOffBtn = this.document.getElementById('takeoff');
    //takeOffBtn.addEventListener('click', function() {
    //    console.log("I clicked it!");
    document.getElementById('up').addEventListener('click', function() {

        if (topTracker - 10 < 0) return;

        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) + 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;

        let rocket = document.getElementById('rocket');
        topTracker = topTracker - 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; position: relative;");
    });
    
    document.getElementById('down').addEventListener('click', function() {
        // The rocket image should move 10px in the direction of 
        // the button that was clicked. If the "Up" or "Down" buttons
        // were clicked, the shuttle height should increase or decrease
        //by 10,000 miles.
        let container = document.getElementById('shuttleBackground');
        if (topTracker + 10 > container.offsetHeight - rocket.height) return;

        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) - 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;
        
        topTracker = topTracker + 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left;" + leftTracker + "px; position: relative");
    });

    document.getElementById('left').addEventListener('click', function() {
        let container = document.getElementById('shuttleBackground');
        if (leftTracker - 10 < (-1 * (container.offsetLeft) / 2) ) return;
        
        let rocket = document.getElementById('rocket');
        leftTracker = leftTracker - 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " + leftTracker + "px; position: relative");
    });

    document.getElementById('right').addEventListener('click', function() {
        let container = document.getElementById('shuttleBackground');
        if (leftTracker + 10 > (container.offsetLeft) / 2) return;
        
        let rocket = document.getElementById('rocket');
        leftTracker = leftTracker + 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " + leftTracker + "px; position: relative");
    });
    
    document.getElementById('missionAbort').addEventListener('click', function() {
        // a. A window confirm should prompt the user: "Confirm that
        // you want to abort the mission." If the user wants to abort the mission,
        // then add parts b-d.
        let response = window.confirm("Confirm that you want to abort the mission.");
        // b. The flight status should change to "Mission aborted."
        if (response) {
            document.getElementById('flightStatus').innerText = "Mission aborted.";
            // c. The background color of the shuttle flight screen should change from blue to green.
            document.getElementById('shuttleBackground').setAttribute('style', 'background-color: green');
            // d. The shuttle height should go to 0.
            document.getElementById('spaceShuttleHeight').innerText = '0';

            rocket.setAttribute("style", "top: 0px; position: relative;")
        }
    });

    document.getElementById('landing').addEventListener('click', function() {
        // a. A window alert should let the user know "The shuttle is landing.
        // Landing gear engaged."
        window.alert("The shuttle is landing. Landing gear engaged.");
        // The flight status should change to "The shuttle has landed."
        document.getElementById('flightStatus').innerText = "The shuttle has landed.";
        // The background color of the shuttle flight screen should change from blue to green.
        document.getElementById('shuttleBackground').setAttribute('style', 'background-color: green');
        // The shuttle height should go down to 0.
        document.getElementById('spaceShuttleHeight').innerText = '0';

    });
    
    document.getElementById('takeoff').addEventListener('click', function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            // b. The flight status should change to "The shuttle has landed."
            document.getElementById('flightStatus').innerText = "Shuttle in flight";
            // c. The background color of the shuttle flight screen should change from green to blue.
            document.getElementById('shuttleBackground').setAttribute('style', 'background-color: blue');
            // d. The shuttle height should increase by 10,000 miles.
            document.getElementById('spaceShuttleHeight').innerText = '10000';
        }
    });

});