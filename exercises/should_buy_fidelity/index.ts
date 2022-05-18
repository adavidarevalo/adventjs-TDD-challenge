export default function shouldBuyFidelity(times: number) {
    const ByTicket = times * 12;

    let ByCard = 250

    for (let i = 1; i <= 2; i++) {
        let value = 12
        for (let x = 0; x < i; x++) {
            value = value * 0.75
        }
        ByCard = ByCard + value
    }

    if(ByTicket > ByCard ) return true

  return false
}