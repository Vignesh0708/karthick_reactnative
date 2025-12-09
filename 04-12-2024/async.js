function async() {
    document.getElementById("aysnc").innerHTML = "loading...";

    setTimeout(() => {
        //document.getElementById("aysnc").innerHTML = "i'm loaded"
        document.getElementById("aysnc").innerHTML = "i'm loaded"

    }, 1800);

};

function loader() {
    document.getElementById("loader").style.display = "none";

    setTimeout(() => {


        document.getElementById("loader").style.display = "block";
    }, 3000);
}