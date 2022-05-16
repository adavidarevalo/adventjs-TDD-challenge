export const daysToXmas = (startDate) => {
    const dateNow = new Date('').getTime();

    const diff = dateNow - startDate.getTime();

    return diff/(1000*60*60*24) 
}