


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
    
    console.log("Halo")
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

function shortest_path() {

    /* unpas = 2
    ukm = 1, uin =3 
    itb = 4 */

    const Univeristas = {
        univ : [
            telkom = [
                -1,30,20,40,-1
            ],

            ukm = [
                -1, -1, 30, -1, 20
            ],

            unpas = [
                -1,-1,-1,-1
            ]


        ],

        visited : [
            false, false,false,false
        ]
        
    }
    let i  = 0
    let j = 0 
    let min = 9999
    let jarak = 0
    let idx = 0

    while (Univeristas.visited[4] != true) {
        while(j!= 4) {
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
        j =0 
    }
    
    console.log(Univeristas.univ[1][4]);
    
    
}