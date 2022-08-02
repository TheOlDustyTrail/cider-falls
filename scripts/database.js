//make database variable 
// Make arrays for guests,ParkAreas,services
//export  each array within database
const database = {
    guests: [{
        id: 1,
        name: "Nora",
        parkAreaID: 1


    },
    {
        id: 2,
        name: "Amanda",
        parkAreaID: 6

    },
    {
        id: 3,
        name: "Mckenzie",
        parkAreaID: 5

    },
    {
        id: 4,
        name: "Nick",
        parkAreaID: 2

    }
    ],
    parkAreas: [{
        id: 1,
        locationName: "Chamfort River",

    },
    {
        id: 2,
        locationName: "Lost Wolf Hiking Trail",

    },
    {
        id: 3,
        locationName: "Lodge",

    },
    {
        id: 4,
        locationName: "Gander River",
    },
    {
        id: 5,
        locationName: "Campgrounds"
        ,

    },
    {
        id: 6,
        locationName: "Pine Bluffs Trails,",
    }

    ],
    services: [{
        id: 1,
        name: "lodging"
    },
    {
        id: 2,
        name: "parking"


    },
    {
        id: 3,
        name: "information"


    },
    {
        id: 4,
        name: "picnicking"


    },
    {
        id: 5,
        name: "fishing ",


    },

    {
        id: 6,
        name: "hiking",


    },
    {
        id: 7,
        name: "zip lines",


    },

    {
        id: 8,
        name: "rock climbing ",


    },
    {
        id: 9,
        name: "canoeing",

    },

    {
        id: 10,
        name: "rafting ",


    },
    {
        id: 11,
        name: "food vendors",

    },


    ],
    AreaServices: [{
        id: 1,
        parkAreaID: 1,
        serviceID: 1

    }, {
        id: 2,
        parkAreaID: 2,
        serviceID: 2

    }, {
        id: 3,
        parkAreaID: 3,
        serviceID: 3

    }, {
        id: 4,
        parkAreaID: 4,
        serviceID: 4

    }, {
        id: 5,
        parkAreaID: 5,
        serviceID: 6

    }, {
        id: 6,
        parkAreaID: 6,
        serviceID: 6

    },]


}
export const getGuests = () => {
    return database.guests.map(guest => ({ ...guest }))
}
export const getParkAreas = () => {
    return database.parkAreas.map(area => ({ ...area }))
}
export const getServices = () => {
    return database.services.map(service => ({ ...service }))
}
export const getAreaServices = () => {
    return database.AreaServices.map(areaService => ({ ...areaService }))
}

