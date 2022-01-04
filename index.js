const selected = "brown";
const reset = "white";
const times = {
    date: "",
    arrayoftime: []
}
let AOb = [];

function refreshtime() {
    let date = document.getElementById('incredible').value
    PowerOn(date)
    for (let i = 1; i < 25; i++) {
        document.getElementById(i).style.backgroundColor = reset;
    }

}

function getcurrentdate() {
    document.getElementById('incredible').value = document.getElementById('datefield').value
}

function PowerOn(date) {
    let period = []
    for (let i = 1; i < 25; i++) {
        let element = document.getElementById(i)
        if (element.style.backgroundColor == selected) {
            period.push(i)
        }
    }

    const one = Object.create(times);

    one.date = date
    one.arrayoftime = period

    AOb.push(one)

}

function setTodayDate() {


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("datefield").value = today;
}

function select(id) {
    let time = document.getElementById(id)

    if (time.style.backgroundColor != selected) {
        time.style.backgroundColor = selected
    } else {
        time.style.backgroundColor = reset
    }
}

function predictTime() {
    const limit = AOb.length
    for (let i = 0; i < limit; i++) {
        let AOT1 = AOb[i].arrayoftime;
        for (let j = i + 1; j < limit; j++) {
            let AOT2 = AOb[j].arrayoftime;
            if (AOT1.length == AOT2.length) {
                check(AOT1, AOT2, AOb[j], AOb[i])
            } else if (AOT2.length < AOT1.length) {
                let l = AOT2.length;
                AOT1 = AOT1.slice(0, l)
                check(AOT1, AOT2)
            } else if (AOT1.length < AOT2.length) {
                let m = AOT1.length;
                AOT2 = AOT2.slice(0, m)
                check(AOT1, AOT2)
            }


        }
    }


}

function check(array1, array2, AOB2, AOB1) {
    if (JSON.stringify(array1) == JSON.stringify(array2)) {
        console.log('true motherfucker')
    }
}

function printarray() {
    for (let i = 0; i < AOb.length; i++) {
        console.log(AOb[i]);
    }
}