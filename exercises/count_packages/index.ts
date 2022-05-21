export default function countPackages(carriers, carrierID: string) {
    let person = {}
    let test = []
    let value = 0;

    carriers.forEach(carrier => {
        person = {
            ...person,
            [carrier[0]]: carrier[1]
        }
        if(carrier[0] === carrierID) {
            test = [...test, carrier[0], ...carrier[2]]
        }
        if (test.includes(carrier[0]) && carrier[0] !== carrierID) {
            test = [...test, ...carrier[2]]
        }
    })

    test.forEach(x => {
        value += person[x]
    })

  return value
}