// Telugu
var map = L.map('map').setView([22.5937, 78.9629], 4); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://opentopomap.org">OpenStreetMap</a> contributors'
}).addTo(map);

var andhraPradeshDistricts = [
    { name: "అనంతపురం", coordinates: [14.6546, 77.5568] }
];
  
var haryanaDistricts = [
    { name: "కర్నాల్", coordinates: [29.6857, 76.9905] }
];
  
var jammuKashmirDistricts = [
    { name: "జమ్ము", coordinates: [32.7266, 74.8570] }
];
  
var madhyaPradeshDistricts = [
    { name: "సాగర్", coordinates: [23.8392, 78.7378] }
];
  
var maharashtraDistricts = [
    { name: "బుల్దానా", coordinates: [20.5330, 76.1810] },
    { name: "జలగావ్", coordinates: [21.0077, 75.5626] },
    { name: "నాగపూర్", coordinates: [21.1458, 79.0882] },
    { name: "నాసిక్", coordinates: [20.0063, 73.7798] },
    { name: "రత్నగిరి", coordinates: [16.9944, 73.3002] },
    { name: "సతారా", coordinates: [17.6794, 74.0195] }
];
  
var punjabDistricts = [
    { name: "అమృత్‌సర్", coordinates: [31.6340, 74.8723] },
    { name: "ఫాజిల్కా", coordinates: [30.4046, 74.0265] },
    { name: "హోషియార్పూర్", coordinates: [31.5273, 75.9110] },
    { name: "జలంధర్", coordinates: [31.3260, 75.5762] },
    { name: "లూధియానా", coordinates: [30.9000, 75.8573] },
    { name: "పాటియాలా", coordinates: [30.3402, 76.3869] },
    { name: "సంగ్రూర్", coordinates: [30.2448, 75.8354] },
    { name: "టార్న్ తరణ్", coordinates: [31.4504, 74.9272] }
];
  
var tamilNaduDistricts = [
    { name: "కోయంబత్తూరు", coordinates: [11.0168, 76.9558] },
    { name: "తంజావూరు", coordinates: [10.7860, 79.1378] },
    { name: "తిరుచిరాపల్లి", coordinates: [10.7905, 78.7047] }
];
  
var telanganaDistricts = [
    { name: "కరీంనగర్", coordinates: [18.4392, 79.1288] },
    { name: "ఖమ్మం", coordinates: [17.2477, 80.1514] },
    { name: "నిజామాబాద్", coordinates: [18.6725, 78.0940] },
    { name: "వరంగల్", coordinates: [17.9784, 79.6003] }
];
  
var uttarPradeshDistricts = [
    { name: "అలీఘర్", coordinates: [27.8974, 78.0880] },
    { name: "బరేలీ", coordinates: [28.3670, 79.4304] },
    { name: "బిజ్నోర్", coordinates: [29.3722, 78.1366] },
    { name: "మీరట్", coordinates: [28.9845, 77.7064] },
    { name: "ముజఫర్‌నగర్", coordinates: [29.4744, 77.7041] }
];
  
var currentDistricts = []; 

function populateDistricts() {
    var state = document.getElementById("state").value;
    var districts = [];
    switch (state) {
        case "andhraPradesh":
          districts = andhraPradeshDistricts;
          break;
        case "haryana":
          districts = haryanaDistricts;
          break;
        case "jammuKashmir":
          districts = jammuKashmirDistricts;
          break;
        case "madhyaPradesh":
          districts = madhyaPradeshDistricts;
          break;
        case "maharashtra":
          districts = maharashtraDistricts;
          break;
        case "punjab":
          districts = punjabDistricts;
          break;
        case "tamilNadu":
          districts = tamilNaduDistricts;
          break;
        case "telangana":
          districts = telanganaDistricts;
          break;
        case "uttarPradesh":
          districts = uttarPradeshDistricts;
          break;
        default:
          break;
      }
      currentDistricts = districts; 
      var districtDropdown = document.getElementById("district");
      districtDropdown.innerHTML = "";
      districts.forEach(function(district) {
        var option = document.createElement("option");
        option.value = district.name;
        option.text = district.name;
        districtDropdown.appendChild(option);
      });
      plotDistricts(); 
}

function zoomToState() {
    var state = document.getElementById("state").value;
    var centerCoordinates = state === "telangana" ? [18.1124, 79.0193] : [11.1271, 78.6569];
    map.setView(centerCoordinates, 8); // Zoom level may need adjustment
    populateDistricts(); // Populate district dropdown after zooming to state
}

function plotDistricts() {
    map.eachLayer(function(layer) {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
    });
     
    currentDistricts.forEach(function(district) {
        var marker = L.marker(district.coordinates).addTo(map);
        marker.bindPopup(district.name);
        
      });
}

function getCrops(season) {
    var district = document.getElementById("district").value;
    var cropList = document.getElementById("crop-list");
    var result = "";
    if (season == "వేసవికాలం") {
        switch (district) {
            case "అనంతపురం":
                result = "మామిడి, గ్రౌండ్‌నట్, డామర రెగుట్లు, ద్రాక్షలు, మిరపకాయలు, టమాటోలు";
                break;
            case "కర్నాల్":
                result = "ఉల్లిపాయలు, ఫ్లావర్ కాలిఫ్లవర్, పీస్, ఆలుగడ్డ, టమాటోలు, క్యాబేజీ";
                break;
            case "జమ్ము":
                result = "ఆలుగడ్డ, టమాటోలు, ఉల్లిపాయలు, జాములు, ఆకులకాయలు, చెర్రీలు";
                break;
            case "సాగర్":
                result = "గ్రౌండ్‌నట్, సన్‌ఫ్లవర్, సముద్ర రోడు, ఉరధి దాల్, మూంగ్ బీన్స్, రైస్";
                break;
            case "బుల్దానా":
                result = "మామిడి, ఆరంజ్లు, డామర రెగుట్లు, ద్రాక్షలు, జాములు, బననాలు";
                break;
            case "జలగావ్":
                result = "ద్రాక్షలు, డామర రెగుట్లు, ఆరంజ్లు, మామిడి, టమాటోలు, వంకాయ (బ్రింజల్)";
                break;
            case "నాగపూర్":
                result = "మిరపకాయలు, టమాటోలు, వంకాయ (బ్రింజల్), బెండకాయ (బెండకాయ), క్యాప్సికం, మామిడి";
                break;
            case "నాసిక్":
                result = "వంకాయ (బ్రింజల్), క్యాప్సికం, బెండకాయ (బెండకాయ), మామిడి, డామర రెగుట్లు, జాములు";
                break;
            case "రత్నగిరి":
                result = "ఆల్ఫాన్సో మామిడీ, క్యాష్యూనట్స్, కొబ్బరికాయలు, బెటల్ కొబ్బరికాయలు (అరేకా కొబ్బరికాయలు), క్యాష్యూ ఆపల్స్";
                break;
            case "సతారా":
                result = "ద్రాక్షలు, వంకాయ (బ్రింజల్), మిరపకాయలు, క్యాప్సికం, కాలీఫ్లవర్, క్యాబేజీ";
                break;
            case "అమృత్‌సర్":
            case "ఫాజిల్కా":
            case "హోషియార్పూర్":
            case "జలంధర్":
            case "లూధియానా":
            case "పాటియాలా":
            case "సంగ్రూర్":
            case "టార్న్ తరణ్":
            case "అలీఘర్":
            case "బరేలీ":
            case "బిజ్నోర్":
            case "మీరట్":
            case "ముజఫర్‌నగర్":
                result = "మామిడి, గ్రౌండ్‌నట్, డామర రెగుట్లు, ద్రాక్షలు, మిరపకాయలు, టమాటోలు";
                break;
            case "కోయంబత్తూరు":
            case "తంజావూరు":
            case "తిరుచిరాపల్లి":
                result = "టమాటో, వంకాయ, క్యారెట్, బీన్, పపాయ, గువావ, రైస్, బజ్రా, గోధుమ";
                break;
            case "కరీంనగర్":
            case "ఖమ్మం":
            case "నిజామాబాద్":
            case "వరంగల్":
                result = "టమాటో, వంకాయ, మిరపకాయ, బొటలు గౌర్డ్, కాకరకాయ, రిజ్ గౌర్డ్";
                break;
            default:
                result = "ఈ జిల్లాకు ఎటువంటి రెండుగురించిన మొక్కల సూచనలు లేవు.";
        }
    } else if (season == "చలికాలం") {
        switch (district) {
            case "అనంతపురం":
                result = "బాతాన్, శనగ, గ్రౌండ్‌నట్, మొక్కలు, పసుపు";
                break;
            case "కర్నాల్":
                result = "రైస్, మొక్కలు, ఆవాలు, సన్‌ఫ్లవర్, కాటను, గోధుమ";
                break;
            case "జమ్ము":
                result = "గోధుమ, రైస్, పప్పులు, పీస్, చిక్‌పీస్";
                break;
            case "సాగర్":
                result = "రైస్, మొక్కలు, సోయాబీన్స్, గ్రామ్ (చిక్‌పీస్), పసుపు";
                break;
            case "బుల్దానా":
                result = "కాటను, సోయాబీన్స్, సొర్గం (జొవర్), గోధుమ, పెసరులు (చనా)";
                break;
            case "జలగావ్":
                result = "రైస్, జోవర్ (సొర్గం), కాటను, సోయాబీన్స్, చక్కెర";
                break;
            case "నాగపూర్":
                result = "ఆరంజ్‌లు, చిక్‌పీస్, సోయాబీన్స్, గోధుమ, రైస్";
                break;
            case "నాసిక్":
                result = "ద్రాక్షలు, ఉల్లిపాయలు, టమాటోలు, గోధుమ, సోయాబీన్స్";
                break;
            case "రత్నగిరి":
                result = "క్యాష్యూ కెర్నల్స్, పసుపు, బ్లాక్ పెప్పర్, అరేకానట్ ఆకులు, అరేకానట్ పువ్వులు";
                break;
            case "సతారా":
                result = "చిక్‌పీస్, జోవర్ (సొర్గం), బాజ్రా (పిల్లల బజ్రా), గోధుమ, రైస్, గ్రౌండ్‌నట్";
                break;
            case "అమృత్‌సర్":
            case "ఫాజిల్కా":
            case "హోషియార్పూర్":
            case "జలంధర్":
            case "లూధియానా":
            case "పాటియాలా":
            case "సంగ్రూర్":
            case "టార్న్ తరణ్":
            case "అలీఘర్":
            case "బరేలీ":
            case "బిజ్నోర్":
            case "మీరట్":
            case "ముజఫర్‌నగర్":
                result = "బాతాన్, శనగ, గ్రౌండ్‌నట్, మొక్కలు, పసుపు";
                break;
            case "కోయంబత్తూరు":
            case "తంజావూరు":
            case "తిరుచిరాపల్లి":
                result = "టమాటో, వంకాయ, క్యారెట్, బీన్, పపాయ, గువావ, రైస్, బజ్రా, గోధుమ";
                break;
            case "కరీంనగర్":
            case "ఖమ్మం":
            case "నిజామాబాద్":
            case "వరంగల్":
                result = "టమాటో, వంకాయ, మిరపకాయ, బొటలు గౌర్డ్, కాకరకాయ, రిజ్ గౌర్డ్, రైస్, బజ్రా, గోధుమ";
                break;
            default:
                result = "ఈ జిల్లాకు ఎటువంటి రెండుగురించిన మొక్కల సూచనలు లేవు.";
        }
    } else if (season == "వర్షాకాలం") {
        switch (district) {
            case "అనంతపురం":
                result = "మైజ్, గ్రౌండ్‌నట్, పసుపు";
                break;
            case "కర్నాల్":
                result = "పప్పులు, చిక్‌పీస్, సోయాబీన్స్, గ్రౌండ్‌నట్";
                break;
            case "జమ్ము":
                result = "ఆపిల్లు, పీర్లు, కుంకుమం";
                break;
            case "సాగర్":
                result = "కట్టి, ఆలుగడ్డ, టమాటోలు, ఉల్లిపాయలు";
                break;
            case "బుల్దానా":
            case "జలగావ్":
            case "నాగపూర్":
            case "నాసిక్":
            case "రత్నగిరి":
            case "సతారా":
                result = "ఏమీ వళంబుకు";
                break;
            case "అమృత్‌సర్":
            case "ఫాజిల్కా":
            case "హోషియార్పూర్":
            case "జలంధర్":
            case "లూధియానా":
            case "పాటియాలా":
            case "సంగ్రూర్":
            case "టార్న్ తరణ్":
            case "అలీఘర్":
            case "బరేలీ":
            case "బిజ్నోర్":
            case "మీరట్":
            case "ముజఫర్‌నగర్":
                result = "మైజ్, గ్రౌండ్‌నట్, పసుపు";
                break;
            case "కోయంబత్తూరు":
            case "తంజావూరు":
            case "తిరుచిరాపల్లి":
                result = "టమాటో, వంకాయ, క్యారెట్, బీన్, పపాయ, గువావ";
                break;
            case "కరీంనగర్":
            case "ఖమ్మం":
            case "నిజామాబాద్":
            case "వరంగల్":
                result = "టమాటో, వంకాయ, మిరపకాయ, బొటలు గౌర్డ్, కాకరకాయ, రిజ్ గౌర్డ్";
                break;
            default:
                result = "ఈ జిల్లాకు ఎటువంటి రెండుగురించిన మొక్కల సూచనలు లేవు.";
        }
    }
    
    if (district != "") {
        cropList.innerText = district + "లో " + season + " లో సూచనలు :- \n" + result;
    } else if (district == "") {
        cropList.innerText = "! జిల్లా ఎంచుకోండి !";
    }   
}
function speakLang() {
    var welcomeMessage = new SpeechSynthesisUtterance();
    welcomeMessage.text = "pantalaa Soochanaluu";
    welcomeMessage.lang = "ge";
    window.speechSynthesis.speak(welcomeMessage);
  }
  // Call the function when the page is reloaded.
  window.addEventListener('load', speakLang);
