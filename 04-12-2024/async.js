
function loadData() {
    document.getElementById("aysnc").innerHTML = "loading...";

    setTimeout(() => {
        document.getElementById("aysnc").innerHTML = "i'm loaded"

    }, 1800);

};