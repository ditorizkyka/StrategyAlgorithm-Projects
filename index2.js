
let map;
let markers = [];
let polyline;
let choices = 0;
let strategy = 0;
document.getElementById('openDialogBtn').addEventListener('click', function() {
    document.getElementById('dialog').classList.remove('hidden');
});

document.getElementById('closeDialogBtn').addEventListener('click', function() {
    document.getElementById('dialog').classList.add('hidden');
});

function updateMapGreedy() {
    clearMap();
    const locations = [
        {lat: -6.972889848698954, lng: 107.6316532087749}, // Telkom
        {lat: -6.909888240860066, lng: 107.59333828645688}, // UKM
        {lat: -6.886080005535997, lng: 107.60830018465697}, // ITB
        {lat: -6.861981395289171, lng: 107.59385122814263}, // UPI
        {lat: -6.8930244283366875, lng: 107.64426289128205}, // UNPAR
        {lat: -6.924812502627048, lng: 107.63416554613575}, // UNPAS
        {lat: -6.930967867898956, lng: 107.71779921534302} // UIN
    ];

    if (choices == 1) {
        choices = 1
    } else if (choices == 2) {
        choices = 5
    } else if (choices == 3) {
        choices = 6
    } else if (choices == 4) {
        choices = 2
    } else if (choices == 5) {
        choices = 4
    } else if (choices == 6) {
        choices = 3
    }

    const path = locations.slice(0, choices + 1);

    // Add markers
    path.forEach(location => {
        markers.push(new google.maps.Marker({
            position: location,
            map: map
        }));
        
    });

    // Add polyline
    polyline = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map
    });
}

function updateMapBForce() {
    clearMap();
    let locations = [];

    if (choices == 1) {
        locations = [
            {lat: -6.972889848698954, lng: 107.6316532087749}, // Telkom
            {lat: -6.909888240860066, lng: 107.59333828645688},
        ]
    } else if (choices == 2) {
        locations = [
            {lat: -6.972889848698954, lng: 107.6316532087749},
            {lat: -6.924812502627048, lng: 107.63416554613575},
        ]
    } else if (choices == 3) {
        locations = [
            {lat: -6.972889848698954, lng: 107.6316532087749},
            {lat: -6.930967867898956, lng: 107.71779921534302}
        ]
    } else if (choices == 4) {
        locations = [
            {lat: -6.972889848698954, lng: 107.6316532087749},
            {lat: -6.909888240860066, lng: 107.59333828645688}, // UKM
            {lat: -6.886080005535997, lng: 107.60830018465697},
        ]
    } else if (choices == 5) {
        locations = [
            {lat: -6.972889848698954, lng: 107.6316532087749},
            {lat: -6.909888240860066, lng: 107.59333828645688}, // UKM
            {lat: -6.886080005535997, lng: 107.60830018465697},
            {lat: -6.8930244283366875, lng: 107.64426289128205},

        ]
    } else if (choices == 6) {
        locations = [
            {lat: -6.972889848698954, lng: 107.6316532087749},
            {lat: -6.909888240860066, lng: 107.59333828645688}, // UKM
            {lat: -6.886080005535997, lng: 107.60830018465697},
            {lat: -6.861981395289171, lng: 107.59385122814263}, 
        ]
    }

    const path = locations.slice(0, choices + 1);

    // Add markers
    path.forEach(location => {
        markers.push(new google.maps.Marker({
            position: location,
            map: map
        }));
        
    });

    // Add polyline
    polyline = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map
    });
}

function clearMap() {
    // Clear markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];
    // Clear polyline
    if (polyline) {
        polyline.setMap(null);
        polyline = null;
    }
}

function initMap() {
    var defaultLocation = {lat: -6.914744, lng: 107.609810};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: defaultLocation
    });
}

window.onload = initMap;

function strategy1() {
    strategy = 1;
    return strategy;
}

function strategy2() {
    strategy = 2;
    return strategy;
}

function toggleDropdown() {
    let dropdown = document.querySelector('#dropdownButton #dropdown');
    dropdown.classList.toggle('hidden');
}

function updateDropdown(choice, text) {
    let dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');
    document.querySelector('#updateDropdown').innerHTML = text;
    choices = choice;
    return choices;
}

function u1() {
    return updateDropdown(1, 'Universitas Kristen Maranatha');
}

function u2() {
    return updateDropdown(2, 'Universitas Pasundan');
}

function u3() {
    return updateDropdown(3, 'UIN Bandung');
}

function u4() {
    return updateDropdown(4, 'Institut Teknologi Bandung');
}

function u5() {
    return updateDropdown(5, 'Universitas Pahrayangan');
}

function u6() {
    return updateDropdown(6, 'Universitas Pendidikan Indonesia');
}

function checkButton() {
    if (strategy == 1) {
        let Result = greedy_Algorithm(choices)
        printPath(Result.pathResult, Result.distResult,Result.timeRunning, choices);
        updateMapGreedy();
    } else if (strategy == 2) {
        let Result = brute_force_Algorithm(choices);
        printPath(Result.pathResult, Result.distResult,Result.timeRunning, choices);
        updateMapBForce();
    }
    
}

function dataSet() {
    const Universitas = {
        univ: [
            [-1, 25, 40, 50, -1, -1, -1],
            [-1, -1, 30, -1, 15, -1, 35],
            [-1, 30, -1, 15, 20, 15, -1],
            [-1, -1, 15, -1, -1, 30, -1],
            [-1, 15, 20, -1, -1, 15, 10],
            [-1, -1, 15, 30, 15, -1, 20],
            [-1, 35, -1, -1, 10, 20, -1]
        ],
        name: [
            'Telkom University', 'Universitas Kristen Maranatha', 'Universitas Pasundan', 'UIN Sunan Gunung Djati Bandung',
            'Institut Teknologi Bandung', 'Universitas Pahrayangan', 'Universitas Pendidikan Indonesia'
        ],
        visited: [false, false, false, false, false, false, false]
    };
    return Universitas
}

function brute_force_Algorithm(choices) {
    let dest = choices
    const University = dataSet()
    let start = performance.now()
    const telU = University.univ[0]
    let distResult = 1000;
    let pathResult = [];

    for (let i = 1; i < 6; i++) {
        // console.log('halo')
        let tempDistResult = 0;
        let tempPathResult = [];
        if (telU[i] != -1) {
            tempDistResult = tempDistResult + telU[i];
            tempPathResult.push(i);
            if (i == dest) {
                if (tempDistResult < distResult) {
                    distResult = tempDistResult;
                    pathResult = tempPathResult.slice();
                };
            } else {
                for (let j = 1; j < University.univ[i].length; j++) {
                    let tempDistResultJ = tempDistResult;
                    let tempPathResultJ = tempPathResult.slice();
                    if (University.univ[i][j] != -1) {
                        tempDistResultJ = tempDistResultJ + University.univ[i][j];
                        tempPathResultJ.push(j);
                        if (j == dest) {
                            if (tempDistResultJ < distResult) {
                                distResult = tempDistResultJ;
                                pathResult = tempPathResultJ.slice();
                            };
                        } else {
                            for (let k = 1; k < University.univ[j].length; k++) {
                                let tempDistResultK = tempDistResultJ;
                                let tempPathResultK = tempPathResultJ.slice();
                                if (University.univ[j][k] != -1) {
                                    tempDistResultK += University.univ[j][k];
                                    tempPathResultK.push(k);
                                    if (k == dest) {
                                        if (tempDistResultK < distResult) {
                                            distResult = tempDistResultK;
                                            pathResult = tempPathResultK.slice();
                                        };
                                    } else {
                                        for (let l = 1; l < University.univ[k].length; l++) {
                                            let tempDistResultL = tempDistResultK;
                                            let tempPathResultL = tempPathResultK.slice();
                                            if (University.univ[k][l] != -1) {
                                                tempDistResultL += University.univ[k][l];
                                                tempPathResultL.push(l);
                                                if (l == dest) {
                                                    if (tempDistResultL < distResult) {
                                                        distResult = tempDistResultL;
                                                        pathResult = tempPathResultL.slice();
                                                    };
                                                } else {
                                                    for (let m = 1; m < University.univ[l].length; m++) {
                                                        let tempDistResultM = tempDistResultL;
                                                        let tempPathResultM = tempPathResultL.slice();
                                                        if (University.univ[l][m] != -1) {
                                                            tempDistResultM += University.univ[l][m];
                                                            tempPathResultM.push(m);
                                                            if (l == dest) {
                                                                if (tempDistResultM < distResult) {
                                                                    distResult = tempDistResultM;
                                                                    pathResult = tempPathResultM.slice();
                                                                };
                                                            } else {
                                                                for (let n = 1; n < University.univ[m].length; n++) {
                                                                    let tempDistResultN = tempDistResultM;
                                                                    let tempPathResultN = tempPathResultM.slice();
                                                                    if (University.univ[m][n] != -1) {
                                                                        tempDistResultN += University.univ[m][n];
                                                                        tempPathResultN.push(n);
                                                                        if (l == dest) {
                                                                            if (tempDistResultN < distResult) {
                                                                                distResult = tempDistResultN;
                                                                                pathResult = tempPathResultN.slice();
                                                                            };
                                                                        }
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    let end = performance.now()
    const Result = {
        pathResult : [],
        distResult : 0,
        timeRunning : 0,
    }

    Result.pathResult = pathResult
    Result.distResult = distResult
    Result.timeRunning = end - start

    return Result

};

function greedy_Algorithm(choices) {
    let start = performance.now()
    const Universitas = dataSet()

    let listVisited = [];
    let eachTime = [];
    let input = choices;
    let i = 0;
    let j = 0;
    let min = 9999;
    let jarak = 0;
    let idx = 0;

    while (!Universitas.visited[input]) {
        while (j <= 6) {
            if (Universitas.univ[i][j] >= 0 && Universitas.univ[i][j] < min && !Universitas.visited[j]) {
                min = Universitas.univ[i][j];
                idx = j;
            }
            j++;
        }

        jarak += min;
        Universitas.visited[i] = true;
        listVisited.push(idx);
        eachTime.push(min);
        i = idx;

        if (i === input) {
            Universitas.visited[input] = true;
        }
        min = 9999;
        j = 0;
    }
    let end = performance.now()
    const Result = {
        pathResult : [],
        distResult : 0,
        timeRunning : 0,
    }

    Result.pathResult = listVisited
    Result.distResult = jarak
    Result.timeRunning = end - start

    return Result
}

function printPath(path,distance,timeRunning, choices) {
    const Universitas = dataSet();

    let k = 0;
    let m = 0;
    let lastDes = document.querySelector('.lastDest');
    let timeToDest = document.querySelector('.timeToDest');
    let runningTime = document.querySelector('.runningTime');
    let visit = document.querySelector('.univVisit');
    
    console.log(path)

    while (k <= 6 && path[k] !== choices) {
        console.log(Universitas.name[path[k]]);
        document.querySelectorAll('h5.univRes')[m].innerHTML = `${Universitas.name[path[k]]}`;
        k++;
        m++;
    }

    lastDes.innerHTML = `: ${Universitas.name[choices]}`;
    timeToDest.innerHTML = `${distance}`;
    runningTime.innerHTML = `: ${timeRunning} Seconds`
    visit.innerHTML = path.length
    console.log("WAKTU RUNNNING :", timeRunning )

    document.querySelector('.resultArea').classList.remove('hidden');


}


