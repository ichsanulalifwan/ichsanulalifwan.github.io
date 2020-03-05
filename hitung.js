function hitung() {
    a = eval(form.satu.value);
    b = eval(form.dua.value);
    c = eval(form.tiga.value);
    d = eval(form.empat.value);
    e = eval(form.lima.value);

    average();
    lowest();
    highest();
    median();
}

function ulang(){
    document.getElementById("form").reset();
}

function average() {
    average = (a + b + c + d + e) / 5;
    form.avg.value = average;
}

function lowest() {
    var number = [a, b, c, d, e]
    var minimum = Math.min.apply(Math, number);
    form.min.value = minimum;
}

function highest() {
    var number = [a, b, c, d, e];
    var maximum = Math.max.apply(Math, number);
    form.max.value = maximum;
}

function median() {
    const median = [a, b, c, d, e];
    const med = median.sort();
    const midl = Math.ceil(median.length / 2);
    const medianFunc = median.length % 2 == 0 ? (med[midl] + med[midl - 1]) / 2 : med[midl];
    form.med.value = medianFunc;
}
