


function toggleDropdown() {
    let dropdown= document.querySelector('#dropdownButton #dropdown');
    dropdown.classList.toggle('hidden');
}

function u1() {
    let dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');

    let option = document.querySelectorAll('.options')
    document.querySelector('#updateDropdown').innerHTML =option[0].innerHTML

    if(option[0].innerHTML) {
        document.querySelector('#updateDropdown').innerHTML =option[0].innerHTML
    } else if (option[1].innerHTML) {
        document.querySelector('#updateDropdown').innerHTML = option[1].innerHTML
    }else if (option[2].innerHTML) {
        document.querySelector('#updateDropdown').innerHTML = option[2].innerHTML
    }else if (option[3].innerHTML) {
        document.querySelector('#updateDropdown').innerHTML = option[3].innerHTML
    }else if (option[4].innerHTML) {
        document.querySelector('#updateDropdown').innerHTML = option[4].innerHTML
    }
    
    console.log("hai sayang")
}

function u2() {
    let dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');

    let option = document.querySelectorAll('.options');
    document.querySelector('#updateDropdown').innerHTML = option[1].innerHTML
}

function u3() {
    let dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');

    let option = document.querySelectorAll('.options');
    document.querySelector('#updateDropdown').innerHTML = option[2].innerHTML
}

function u4() {
    let dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');

    let option = document.querySelectorAll('.options');
    document.querySelector('#updateDropdown').innerHTML = option[3].innerHTML
}

function u5() {
    let dropdown = document.querySelector('#dropdown');
    dropdown.classList.toggle('hidden');

    let option = document.querySelectorAll('.options');
    document.querySelector('#updateDropdown').innerHTML = option[4].innerHTML
}


function greedy_Algorithm() {
    const Univeristas = {
        univ : [
            telkom = [
                -1,45,20,40,-1,-1,-1
            ],

            ukm = [
                -1, -1, 30, -1, 20, -1,6
            ],

            unpas = [
                -1, 30, -1,30,15, -1, -1
            ],

            uin = [
                -1,-1,30,-1,-1,30,-1
            ],

            itb = [
                -1,20,15,-1,-1,10,15
            ],

            unpar = [
                -1,-1,20,30,10,-1,15
            ],

            upi = [
                -1,25,-1,-1,15,15,-1
            ]


        ],

        name : [
            'Telkom University', 'Universitas Kristen Maranatha', 'Universitas Pasundan', 'UIN Sunan Gunung Djati Bandung',
            'Institut Teknologi Bandung', 'Universitas Pahrayangan', 'Universitas Pendidikan Indonesia'
        ],

        visited : [
            false, false,false,false
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


    let i  = 0
    let j = 0 
    let min = 9999
    let jarak = 0
    let idx = 0

    while (Univeristas.visited[5] != true) {
        
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
        i = idx

        if (i == 5) {
            Univeristas.visited[i] =true
        }
        min = 9999
        j =0 
    }
    let k = 0

    console.log('')
    console.log('-------TELYUTIZEN VISIT CAMPUS-------')
    console.log('')

    console.log('Jalur Ditemukan tercepat dengan GREEDY!')
    console.log('Start       :', Univeristas.name[0], ' ')
    k= k+1
    while (k+1 <=6-1) {
        
        if (Univeristas.visited[k]== true) {
            console.log('             ', Univeristas.name[k], ' ')
        }
        k++
        
    }
    console.log('Destination :', Univeristas.name[k], ' ')
    console.log('Total time  :',jarak, 'Minutes');
    console.log('')
    console.log('')
    
    
}
