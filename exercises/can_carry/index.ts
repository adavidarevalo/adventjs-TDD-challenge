export default function canCarry(capacity, trip) {
 let gifts = []
 let startTravel = [] 
 let endTravel = []

 trip.forEach(trip => {
     gifts = [...gifts, trip[0]]     
     startTravel = [...startTravel, trip[1]]     
     endTravel = [...endTravel, trip[2]]
 })
 if(gifts.length === 1) {
     if(gifts[0] > capacity) return false
     return true
 }
 if(startTravel[0] === startTravel[1]) {
     const sum = gifts.reduce((a, b) => a + b, 0);
     return sum > capacity
 }
  if(endTravel[0] === startTravel[1]) {
     return (capacity >= gifts[0] && capacity >= gifts[1])
 }

 if(endTravel[0] > startTravel[1]) {
     const sum = gifts.reduce((a, b) => a + b, 0);
     return capacity >= sum
    }
}