const APARTMENTS = {
    1: { number: 1, tenantFirstName: "Edo", tenantLastName: "Garavani" },
    2: { number: 2, tenantFirstName: "Nitzan", tenantLastName: "Ezra" },
    3: { number: 3, tenantFirstName: "Yoni", tenantLastName: "Levin" },
    4: { number: 4, tenantFirstName: "Oron" },
    5: { number: 5, tenantFirstName: "Ivan" },
    6: { number: 6, tenantFirstName: "Vlad", tenantLastName: "Mystetskyi" },
    7: { number: 7, tenantFirstName: "Shay", tenantLastName: "Elkana" },
    8: { number: 8, tenantFirstName: "Anton", tenantLastName: "Rubin" }
}

export const getDialMessage = apartmentNumber => {
    const apartment = APARTMENTS[apartmentNumber];
    if (!apartment) return "Invalid apartment number";
    if(apartment.tenantLastName === undefined) return `${apartment.tenantFirstName}`
    return `Calling ${apartment.tenantFirstName} ${apartment.tenantLastName}`
}

export const dialApartment = apartmentNumber => {
    const dialMessage = getDialMessage(apartmentNumber);
    alert(dialMessage)
}

export const getApartments = () => Object.values(APARTMENTS).map(apt => ({id: apt.number, name: apt.tenantFirstName}));