//import all filtered function
//export into HTML
import { Guests } from "./guests.js"
import { theParkAreas } from "./parkAreas.js"
import { displayedServices } from "./services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class= "parkAreaService"><section class="parkArea">${theParkAreas()}</section>
<div class = "services">${displayedServices()}</div>
<aside class="contact">
<div>Phone number</div>
<div>Email</div>
<div>Address</div>
</aside></article>
<section class="guests">${Guests()}</section>
`



mainContainer.innerHTML = applicationHTML
