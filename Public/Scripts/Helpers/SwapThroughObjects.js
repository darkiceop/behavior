// SwapThroughObjects.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: Toggle through a list of objects, showing one at a time, when activateNextItem API is called

// @input SceneObject[] items

// USAGE: call script.api.activateNextItem() to switch through available items

// Arrays are indexed from 0.
// Disable everything but the first (0th) item .
for (var i = 1; i < script.items.length; i++) {
    if (script.items[i]) {
        script.items[i].enabled = false;      
    }

}

// We remember what item is currently visible.
// When we start it's the 0th item.
var currentItemIndex = 0;

// Define what happens when activateNextItem is called from another script.
function activateNextItem() {
    
    // Disable the current item. 
    if (script.items[currentItemIndex]) {
        script.items[currentItemIndex].enabled = false;
    }

    // Increment the current item index
    currentItemIndex += 1;

    // We need the current item index to wrap around 
    // once it's higher than the number of items we have.
    currentItemIndex = currentItemIndex % script.items.length;

    // Enable the new item. 
    if (script.items[currentItemIndex]) {
        script.items[currentItemIndex].enabled = true;
    }
}

script.api.activateNextItem = activateNextItem;