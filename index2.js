let map;
let markers = [];
let polyline;
let choices = 0;
let strategy = 0;

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
    if (strategy === 1) {
        greedy_Algorithm(choices);
        document.querySelector('.resultArea').classList.remove('hidden');
    } else {
        brute_force_Algorithm(choices);
    }
    updateMap();
}

function updateMap() {
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

function greedy_Algorithm(choices) {
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

    console.log('');
    console.log('-------TELYUTIZEN VISIT CAMPUS-------');
    console.log('');
    console.log('Jalur Ditemukan tercepat dengan GREEDY!');
    console.log('Start       :', Universitas.name[0], ' ');

    let k = 0;
    let m = 0;
    let lastDes = document.querySelector('.lastDest');
    let timeToDest = document.querySelector('.timeToDest');

    while (k <= 6 && listVisited[k] !== input) {
        if (Universitas.visited[listVisited[k]]) {
            console.log('             ', Universitas.name[listVisited[k]], ' ');
            document.querySelectorAll('h5.univRes')[m].innerHTML = `${Universitas.name[listVisited[k]]}`;
        }
        k++;
        m++;
    }

    lastDes.innerHTML = `: ${Universitas.name[input]}`;
    timeToDest.innerHTML = `: ${jarak} Minutes`;

    console.log('Destination :', Universitas.name[input], ' ');
    console.log('Total time  :', jarak, 'Minutes');
    console.log('');
    console.log('');
}
