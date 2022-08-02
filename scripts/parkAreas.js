import { getParkAreas, getGuests } from "./database.js"


const guests = getGuests()
const parkAreas = getParkAreas()


export const theParkAreas = () => {
    let html = ""
    for (const park of parkAreas) {
        html += `<h1 id= "park--${park.id}"class = "park">${park.locationName}</h1>`

    }


    return html
}
//write a function that determines how many guests are in an area 

const numOfGuests = (parkArea) => {
    let guestAmount = 0
    for (const guest of guests) {

        if (guest.parkAreaID === parkArea.id) {
            guestAmount = guestAmount + 1

        }
    }
    return guestAmount
}




document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("park")) {
            const [, parkId] = itemClicked.id.split("--")

            for (const park of parkAreas) {
                if (park.id === parseInt(parkId)) {
                    const guestNumber = numOfGuests(park)

                    window.alert(` There are ${guestNumber} guests in this area`)
                }
            }
        }
    }
)
