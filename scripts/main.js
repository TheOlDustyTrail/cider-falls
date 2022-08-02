//import all filtered function
//export into HTML
import { Guests } from "./guests.js"
import { theParkAreas } from "./parkAreas.js"
import { displayedServices } from "./services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<section class="parkArea">${theParkAreas()}</section>
<article class="guests">${Guests()}</article>
<div>${displayedServices()}</div>
`



mainContainer.innerHTML = applicationHTML
