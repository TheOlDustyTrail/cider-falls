import { getParkAreas, getServices, getAreaServices } from "./database.js"

const parkAreas = getParkAreas()
const services = getServices()
const areaServices = getAreaServices()

/* 
display services 
determine which service was clicked on 
get the service name find parkArea object 
get all area service objects related to service clicked on 
iterate array of area service objects find matching service for each one 
get name property for each service 
*/

export const displayedServices = () => {
    let html = `Park Services:`
    for (const service of services) {
        html += `<p id="service--${service.id} ">${service.name},`

    }
    html += `</p>`
    return html
}

export const getLocation = (parkAreas) => {
    let location = []
    for (const area of areaServices) {
        if (parkAreas.id === area.parkAreaID) {
            location.push(parkAreas.locationName)

        }

    }
    return location
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [, serviceID] = itemClicked.id.split("--")
            let serviceName = ""
            for (const service of services) {
                if (service.id === parseInt(serviceID)) {
                    serviceName = service.name


                }
            }
            //get all area service objects related to service clicked on 
            let allMatchingParkAreas = ""
            for (const areaService of areaServices) {
                if (parseInt(serviceID) === areaService.serviceID) {
                    for (const parkArea of parkAreas) {
                        if (areaService.parkAreaID === parkArea.id) {
                            allMatchingParkAreas += parkArea.locationName
                        }
                    }

                }
            }
            window.alert(`${serviceName} is avilable in ${allMatchingParkAreas}`)



        }
    }
)





// const serviceArea = () => {
//     let newService = []
//     for (const service of services){
//         if (service.id === areaServices.id){

//         }
//     }
// }

