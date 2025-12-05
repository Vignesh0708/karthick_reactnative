function async() {
    document.getElementById("aysnc").innerHTML = "loading...";

    setTimeout(() => {
        //document.getElementById("aysnc").innerHTML = "i'm loaded"
        document.getElementsByClassName("mza-wrapper")[0].innerHTML = "i'm loaded"

    }, 1800);

};