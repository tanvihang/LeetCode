/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {

    let tripsCount = trips.length
    // (index, count)
    let mapUp = new Map()
    let mapDown = new Map()
    let max = 0
    let history;

    for(i=0; i<tripsCount;i++){
        let trip = trips[i]
        if(mapUp.has(trip[1])){
            history = mapUp.get(trip[1])
            mapUp.set(trip[1],trip[0]+history)    
        }else{
            mapUp.set(trip[1],trip[0])

        }

        if(mapDown.has(trip[2])){
            history = mapDown.get(trip[2])
            mapDown.set(trip[2],trip[0]+history)
        }else{
            mapDown.set(trip[2],trip[0])

        }
        max = Math.max(max,trip[2])
    }

    for(let j = 0; j<max;j++){
        if(mapDown.get(j)){
            capacity += mapDown.get(j)
        }

        if(mapUp.get(j)){
            capacity -= mapUp.get(j)
            if(capacity < 0){
                return false
            }
        }
        
    }

    return true

};

let trips = [[9,3,4],[9,1,7],[4,2,4],[7,4,5]]
let capacity =  23

console.log(carPooling(trips,capacity))