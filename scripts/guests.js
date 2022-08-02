//import guests 
// Create function that iterates through all of the guests 
// Return HTML of the properties in the guests 

import { getGuests } from "./database.js"
const guests = getGuests()

export const Guests = () => {
    let html = "<ul>"

    for (const guest of guests) {
        html += `<li id="guest--${guest.id}}">${guest.name}`
    }
    html += "</ul>"

    return html
}