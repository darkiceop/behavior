// LiquifyModifier.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: Modifies Liquify Components based on finger position

// @input Component.LiquifyVisual[] liquifies

// Define what happens when user moves their finger on the screen
function onTouchMove(eventData) {
    // Get where the user's finger is
    var position = eventData.getTouchPosition();
    
    // Affect every liquified component that was passed in
    for (var i = 0; i < script.liquifies.length; i++) {
        var liquify = script.liquifies[i];
        
        // Affect liquify's radius value based on the finger's x position
        liquify.radius = valueMapRange(position.x, 0,1, 1,3);
       
        // Affect liquify's intensity value based on the finger's y position
        liquify.intensity = valueMapRange(position.y, 0,1, 3,1);
    }
}

// Tell the Lens to look for the user moving their finger on the screen
script.createEvent("TouchMoveEvent").bind(onTouchMove);

// Helper script to map some value to a range
function valueMapRange(value, inValueX, inValueY, outValueX, outValueY) {
    return (value - inValueX) * (outValueY - outValueX) / (inValueY - inValueX) + outValueX;
}