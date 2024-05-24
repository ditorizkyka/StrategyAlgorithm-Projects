
let choices = 0
let strategy = 0 

// function strategyChoices() {
//     document.addEventListener('DOMContentLoaded', (event) => {
//         const greedyRadio = document.getElementById('greedy-s');
//         const bruteForceRadio = document.getElementById('brute-force');
    
//         // Function to handle the change event
//         var handleRadioChange = () => {
//             let selectedStrategy = null;
//             if (greedyRadio.checked) {
//                 selectedStrategy = 1;
//             } else if (bruteForceRadio.checked) {
//                 selectedStrategy = 2;
//             }
    
//             if (selectedStrategy) {
//                 console.log('Selected Strategy:', selectedStrategy);
//                 // You can send this data to a server or use it as needed
//             }
//         };
    
//         // Attach change event listeners to radio buttons
//         greedyRadio.addEventListener('change', handleRadioChange);
//         bruteForceRadio.addEventListener('change', handleRadioChange);
//     });

//     return handleRadioChange;
// }

function strategy1() {
    strategy = 1
    return strategy
}

function strategy2() {
    strategy = 2
    return strategy
}


function toggleDropdown() {
    let dropdown= document.querySelector('#dropdownButton #dropdown');
    dropdown.classList.toggle('hidden');
}

function u1() {
    let dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');

    let option = document.querySelectorAll('.options')
    document.querySelector('#updateDropdown').innerHTML =option[0].innerHTML

    choices = 1;
    return choices

}

function u2() {
    let dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');

    let option = document.querySelectorAll('.options');
    document.querySelector('#updateDropdown').innerHTML = option[1].innerHTML

    choices = 2;
    return choices
}

function u3() {
    let dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');

    let option = document.querySelectorAll('.options');
    document.querySelector('#updateDropdown').innerHTML = option[2].innerHTML
    choices = 3;
    return choices
}

function u4() {
    let dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');

    let option = document.querySelectorAll('.options');
    document.querySelector('#updateDropdown').innerHTML = option[3].innerHTML

    choices = 4;
    return choices
}

function u5() {
    let dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');

    let option = document.querySelectorAll('.options');
    document.querySelector('#updateDropdown').innerHTML = option[4].innerHTML
    choices = 5;
    return choices
}

function u6() {
    let dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');

    let option = document.querySelectorAll('.options');
    document.querySelector('#updateDropdown').innerHTML = option[4].innerHTML
    choices = 6;
    return choices
}

function checkButton() {
    if(strategy == 1 ) {
        greedy_Algorithm(choices)
        document.querySelector('.resultArea').classList.remove('hidden')
        
    } else {
        brute_force_Algorithm(choices)
    }
    
}


function greedy_Algorithm(choices) {
    const Univeristas = {
        univ : [
            telkom = [-1,25,40,50,-1,-1,-1 ],
            ukm = [-1, -1, 30, -1, 15, -1,35],
            unpas = [-1, 30, -1,15,20, 15, -1],
            uin = [-1,-1,15,-1,-1,30,-1],
            itb = [-1,15,20,-1,-1,15,10],
            unpar = [-1,-1,15,30,15,-1,20],
            upi = [-1,35,-1,-1,10,20,-1]
        ],

        name : [
            'Telkom University', 'Universitas Kristen Maranatha', 'Universitas Pasundan', 'UIN Sunan Gunung Djati Bandung',
            'Institut Teknologi Bandung', 'Universitas Pahrayangan', 'Universitas Pendidikan Indonesia'
        ],

        visited : [
            false, false,false,false,false,false
        ]
        
    }
    /*
    TELKOM = 0 
    UKM = 1
    UNPAS = 2
    UIN = 3
    ITB = 4
    UNPAR = 5 
    UPI = 6
    */

    /* Proses inisiasi universitas belum dikunjungi */
    Univeristas.visited[0] = false
    Univeristas.visited[1] = false
    Univeristas.visited[2] = false
    Univeristas.visited[3] = false
    Univeristas.visited[4] = false
    Univeristas.visited[5] = false
    Univeristas.visited[6] = false

    let listVisited = []
    let eachTime = []


    let input = choices
    let i  = 0
    let j = 0 
    let min = 9999
    let jarak = 0
    let idx = 0

    while (Univeristas.visited[input] != true) {
        
        while(j<= 6) {
            if (Univeristas.univ[i][j] >= 0) {
                if (Univeristas.univ[i][j] < min && Univeristas.visited[j] == false) {
                    min = Univeristas.univ[i][j]
                    idx = j
                }
            }
            j++
        }

        jarak = jarak + min
        Univeristas.visited[i] =true
        listVisited.push(idx)
        eachTime.push(min)
        i = idx

        if (i == input) {
            Univeristas.visited[input] =true
        }
        min = 9999
        j =0 
    }

    console.log('')
    console.log('-------TELYUTIZEN VISIT CAMPUS-------')
    console.log('')

    console.log('Jalur Ditemukan tercepat dengan GREEDY!')
    console.log('Start       :', Univeristas.name[0], ' ')
    k= 0
    m = 0 

    
    let lastDes = document.querySelector('.lastDest')
    let timeToDest = document.querySelector('.timeToDest')

    while (k <= 6 && listVisited[k] != input) {
        
        if (Univeristas.visited[listVisited[k]] == true) {
            console.log('             ', Univeristas.name[listVisited[k]], ' ')
            
            document.querySelectorAll('h5.univRes')[m].innerHTML = `${Univeristas.name[listVisited[k]]}`
            // document.querySelectorAll('h5.univRes')[m].classList.remove('hidden') = ''
        }
        // univDest.classList.remove('hidden')
        k++
        m++
        
    }

    lastDes.innerHTML = `: ${Univeristas.name[input]}`
    timeToDest.innerHTML= `: ${jarak} Minutes`

    console.log('Destination :', Univeristas.name[input], ' ')
    console.log('Total time  :',jarak, 'Minutes');
    console.log('')
    console.log('')

}


