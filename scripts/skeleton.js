const currentParams = new URL(window.location.href).searchParams;
const path = window.location.pathname;

let loginParams = "";
if (path != "/" && path != "/index.html") {
    currentParams.append("prev", path.slice(1).replace(".html", ""));
    loginParams = "?" + currentParams.toString();
}

function setLoginParams() {
    console.log(
        "set login params",
        $("#headerPlaceholder")
            .find("#sign-in")
            .attr("href", `/login.html${loginParams}`)
    );
}

//---------------------------------------------------
// This function loads the parts of your skeleton
// (navbar, footer, and other things) into html doc.
//---------------------------------------------------
function loadSkeleton() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // If the "user" variable is not null, then someone is logged in
            // User is signed in.
            // Do something for the user here.
            console.log(
                $("#headerPlaceholder")
                    .load("./text/header_after_login.html")
                    .on("click", ".sign-out", logout)
            );
            console.log($("#footerPlaceholder").load("./text/footer.html"));
        } else {
            // No user is signed in.
            console.log(
                $("#headerPlaceholder").load(
                    "./text/header_before_login.html",
                    function () {
                        setLoginParams();
                    }
                )
            );
            console.log($("#footerPlaceholder").load("./text/footer.html"));
        }
    });
}
loadSkeleton(); //invoke the function
