let seriesPending = ["Breaking bug", "Game of drones", "Boolean 99", "Arrested Developer"]

seriesPending.push("Stranger Wifi")
console.log(seriesPending);


for (let i = 0; i < seriesPending.length; i++) {
    console.log(seriesPending[i])
    if (i === 2) {
        console.log("Found it!");
        continue
    }
}

let seriesWatching = []


seriesWatching.push(seriesPending.shift())


for (let i = 0; i < 4; i++) {
    seriesWatching.push(seriesPending.shift())
}

console.log(seriesWatching)
console.log(seriesPending)
