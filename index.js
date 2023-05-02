
let val1 = 0, val2 = 0;
let normalBarHeight = 0, gradientBarHeight = 0;
let pieChart = 0;

function getVal() {

    val1 = document.querySelector('.min-val').value;
    val2 = document.querySelector('.max-val').value;
    val1 = Number(val1);
    val2 = Number(val2);
    if (val1 > val2) {
        document.querySelector(".min-val").classList.add("invalid-input");
        document.querySelector(".min-val-alert").innerHTML = "Input value must be greater than Max value";
    }
    else {
        document.querySelector(".min-val").classList.remove("invalid-input");
        document.querySelector(".min-val-alert").innerHTML = "";
    }


    normalBarHeight = document.querySelectorAll(".bar")[0];
    normalBarHeight.style.background = `linear-gradient(#5EDFFF ${100 - val1}%, #3E64FF calc(${100 - val1}% + 1px))`;
    document.querySelector(".percentage").innerHTML = val1 + "%";

    pieChart = document.querySelector(".pie");
    pieChart.style.background = `conic-gradient(#5EDFFF ${100 - val1}%, #3E64FF ${100 - val1}%)`;
    pieChart.innerHTML = val1 + "%";

    gradientBarHeight = document.querySelectorAll(".bar")[1];
    gradientBarHeight.style.background = `linear-gradient(#5EDFFF ${100 - val1}%, #3E64FF )`;
    document.querySelector(".percentage1").innerHTML = val1 + "%";
}
