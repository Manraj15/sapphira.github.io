function getContent(fragmentId, callback){
    var pages = {
        home: "home",
        about: "about",
        see_our_work: "see_our_work",
        contact_us: "contact_us",
        laser_hair_removal: "laser_hair_removal",
        teeth_whitening: "teeth_whitening",
        prp: "prp",
        b12_injections: "b12_injections",
        iv_nutrition_therapy: "iv_nutrition_therapy",
        medical_peel: "medical_peel",
        micro_needling: "micro_needling"
    };
    callback(pages[fragmentId]);
}


function loadContent(){

    var contentDiv = document.getElementById("app"),
        fragmentId = location.hash.substr(1);

    
    getContent(fragmentId, function (content) {
        $("#siteNavigation").load("navigation_bar.html");
        if(content == "home") {
            getHome();
        }
        else if(content == "about") {
            getAbout();
        }
        else if(content == "laser_hair_removal") {
            getLaserHairRemoval();
        }
        else if(content == "teeth_whitening") {
            getTeethWhitening();
        }
        else if(content == "prp") {
            getPRP();
        }
        else if(content == "b12_injections") {
            getB12Injections();
        }
        else if(content == "iv_nutrition_therapy") {
            getIvNutritionTherapy();
        }
        else if(content == "see_our_work") {
            getSeeOurWork();
        }
        else if(content == "medical_peel") {
            getMedicalPeel();
        }
        else if(content == "micro_needling") {
            getMicroNeedling();
        }
        else if(content == "contact_us") {
            getContactUs();
        }
    });

}

if(!location.hash) {
    location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent)

function getHome() {
    $("#app").load("home.html");
}

function getAbout() {
    $("#app").load("about.html");
}

function getLaserHairRemoval() {
    $("#app").load("laser_hair_removal.html");
}

function getTeethWhitening() {
    $("#app").load("teeth_whitening.html");
}

function getPRP() {
    $("#app").load("prp.html");
}

function getB12Injections() {
    $("#app").load("b12_injections.html");
}

function getIvNutritionTherapy() {
    $("#app").load("iv_nutrition_therapy.html");
}

function getSeeOurWork() {
    $("#app").load("see_our_work.html");
}

function getMedicalPeel(){
    $("#app").load("medical_peel.html");
}

function getMicroNeedling(){
    $("#app").load("micro_needling.html");
}

function getContactUs() {
    $("#app").load("contact_us.html");
}

function changeLocation(newLocation) {
    location.hash = newLocation;
}

function changeLocationSelect(){
    var newLocation = $("#treatments").find(":selected").val();
    location.hash = newLocation;
}