 let seriesPending = ["Breaking bug", "Game of drones", "Boolean 99", "Arrested Developer"]

 seriesPending.push("Stranger Wifi")
 console.log(seriesPending);


 for(let i = 0; i<seriesPending.length; i++){
    console.log(seriesPending[i])
     if (i === 2) {
         console.log("Found it!");
         continue
     }   
}

let seriesWatching = [ ]

seriesPending.shift()
console.log(seriesPending);
seriesWatching.push("Breaking bug")
console.log(seriesWatching);

for (let i = 0; i <= seriesPending.length; i++) {
    if (i <= seriesPending.length) {
        seriesPending.shift()
        console.log(seriesPending);
    }
    if (seriesPending.shift()) {
       seriesWatching 
    }
}