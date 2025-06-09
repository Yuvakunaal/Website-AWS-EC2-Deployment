// Hindi
var map = L.map('map').setView([22.5937, 78.9629], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://opentopomap.org">OpenStreetMap</a> योगदानकर्ता'
}).addTo(map);

var andhraPradeshDistricts = [
    { name: "अनंतपुर", coordinates: [14.6546, 77.5568] }
];
  
var haryanaDistricts = [
    { name: "करनाल", coordinates: [29.6857, 76.9905] }
];
  
var jammuKashmirDistricts = [
    { name: "जम्मू", coordinates: [32.7266, 74.8570] }
];
  
var madhyaPradeshDistricts = [
    { name: "सागर", coordinates: [23.8392, 78.7378] }
];
  
var maharashtraDistricts = [
    { name: "बुलढाना", coordinates: [20.5330, 76.1810] },
    { name: "जलगांव", coordinates: [21.0077, 75.5626] },
    { name: "नागपुर", coordinates: [21.1458, 79.0882] },
    { name: "नासिक", coordinates: [20.0063, 73.7798] },
    { name: "रत्नागिरि", coordinates: [16.9944, 73.3002] },
    { name: "सतारा", coordinates: [17.6794, 74.0195] }
];
  
var punjabDistricts = [
    { name: "अमृतसर", coordinates: [31.6340, 74.8723] },
    { name: "फाजिल्का", coordinates: [30.4046, 74.0265] },
    { name: "होशियारपुर", coordinates: [31.5273, 75.9110] },
    { name: "जालंधर", coordinates: [31.3260, 75.5762] },
    { name: "लुधियाना", coordinates: [30.9000, 75.8573] },
    { name: "पटियाला", coordinates: [30.3402, 76.3869] },
    { name: "संगरूर", coordinates: [30.2448, 75.8354] },
    { name: "तरनतारन", coordinates: [31.4504, 74.9272] }
];
  
var tamilNaduDistricts = [
    { name: "कोयंबटूर", coordinates: [11.0168, 76.9558] },
    { name: "तंजावुर", coordinates: [10.7860, 79.1378] },
    { name: "तिरुचिरापल्ली", coordinates: [10.7905, 78.7047] }
];
  
var telanganaDistricts = [
    { name: "करीमनगर", coordinates: [18.4392, 79.1288] },
    { name: "खम्मम", coordinates: [17.2477, 80.1514] },
    { name: "निजामाबाद", coordinates: [18.6725, 78.0940] },
    { name: "वरंगल", coordinates: [17.9784, 79.6003] }
];
  
var uttarPradeshDistricts = [
    { name: "अलीगढ", coordinates: [27.8974, 78.0880] },
    { name: "बरेली", coordinates: [28.3670, 79.4304] },
    { name: "बिजनौर", coordinates: [29.3722, 78.1366] },
    { name: "मेरठ", coordinates: [28.9845, 77.7064] },
    { name: "मुजफ्फरनगर", coordinates: [29.4744, 77.7041] }
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
    if (season == "गर्मी") {
        switch (district) {
            case "अनंतपुर":
                result = "आम, मूंगफली, अनार, अंगूर, मिर्च, टमाटर";
                break;
            case "करनाल":
                result = "प्याज, फूलगोभी, मटर, आलू, टमाटर, पत्तागोभी";
                break;
            case "जम्मू":
                result = "आलू, टमाटर, प्याज, अमरूद, सेब, चेरी";
                break;
            case "सागर":
                result = "मूंगफली, सूरजमुखी, तिल, उड़द की दाल, मूंग दाल, चावल";
                break;
            case "बुलढाना":
                result = "आम, संतरे, अनार, अंगूर, अमरूद, केला";
                break;
            case "जलगांव":
                result = "अंगूर, अनार, संतरे, आम, टमाटर, बैंगन (बैंगन)";
                break;
            case "नागपुर":
                result = "मिर्च, टमाटर, बैंगन (बैंगन), भिंडी (लेडीफिंगर), कैप्सिकम, आम";
                break;
            case "नासिक":
                result = "बैंगन, कैप्सिकम, भिंडी (लेडीफिंगर), आम, अनार, अमरूद";
                break;
            case "रत्नागिरि":
                result = "अल्फांसो आम, काजू, नारियल, सुपारी (अरेका नट्स), काजू अप्पल्स";
                break;
            case "सतारा":
                result = "अंगूर, बैंगन (बैंगन), भिंडी (लेडीफिंगर), कैप्सिकम, फूलगोभी, पत्तागोभी";
                break;
            case "अमृतसर":
            case "फाजिल्का":
            case "होशियारपुर":
            case "जालंधर":
            case "लुधियाना":
            case "पटियाला":
            case "संगरूर":
            case "तरनतारन":
                result = "आम, मूंगफली, अनार, अंगूर, मिर्च, टमाटर";
                break;
            case "कोयंबटूर":
            case "तंजावुर":
            case "तिरुचिरापल्ली":
                result = "टमाटर, बैंगन, गाजर, बीन, पपीता, अमरूद";
                break;
            case "करीमनगर":
            case "खम्मम":
            case "निजामाबाद":
            case "वरंगल":
                result = "टमाटर, बैंगन, हल्दी, लौकी, करेला, तोरी";
                break;
            case "अलीगढ":
            case "बरेली":
            case "बिजनौर":
            case "मेरठ":
            case "मुजफ्फरनगर":
                result = "आम, मूंगफली, अनार, अंगूर, मिर्च, टमाटर";
                break;
            default:
                result = "इस जिले के लिए कोई फसल सुझाव उपलब्ध नहीं हैं।";
        }
    } else if (season == "सर्दी") {
        switch (district) {
            case "अनंतपुर":
                result = "कपास, चने (चना), मूंगफली, मक्का, हल्दी";
                break;
            case "करनाल":
                result = "चावल, मक्का, सरसों, सूरजमुखी, कपास, गेहूं";
                break;
            case "जम्मू":
                result = "गेहूं, चावल, मसूर, मटर, चना";
                break;
            case "सागर":
                result = "गेहूं, चावल, सोयाबीन्स, चना (चना), सरसों";
                break;
            case "बुलढाना":
                result = "कपास, सोयाबीन्स, ज्वार (ज्वार), गेहूं, चने (चना)";
                break;
            case "जलगांव":
                result = "गेहूं, ज्वार (ज्वार), कपास, सोयाबीन्स, गन्ना, मक्का";
                break;
            case "नागपुर":
                result = "संतरे, गन्ना, कपास, सोयाबीन्स, गेहूं, चावल";
                break;
            case "नासिक":
                result = "अंगूर, प्याज, टमाटर, गेहूं, गन्ना, सोयाबीन्स";
                break;
            case "रत्नागिरि":
                result = "काजू करनेल, हल्दी, काली मिर्च, अरेकनट पत्तियां, अरेकनट फूल";
                break;
            case "सतारा":
                result = "गन्ना, ज्वार (ज्वार), बाजरा (पर्ल मिलेट), गेहूं, चावल, मूंगफली";
                break;
            case "अमृतसर":
            case "फाजिल्का":
            case "होशियारपुर":
            case "जालंधर":
            case "लुधियाना":
            case "पटियाला":
            case "संगरूर":
            case "तरनतारन":
            case "अलीगढ":
            case "बरेली":
            case "बिजनौर":
            case "मेरठ":
            case "मुजफ्फरनगर":
                result = "कपास, चने (चना), मूंगफली, मक्का, हल्दी";
                break;
            case "कोयंबटूर":
            case "तंजावुर":
            case "तिरुचिरापल्ली":
                result = "टमाटर, बैंगन, गाजर, बीन, पपीता, अमरूद, चावल, बाजरा, गेहूं";
                break;
            case "करीमनगर":
            case "खम्मम":
            case "निजामाबाद":
            case "वरंगल":
                result = "टमाटर, बैंगन, हल्दी, लौकी, करेला, तोरी, चावल, बाजरा, गेहूं";
                break;
            default:
                result = "इस जिले के लिए कोई फसल सुझाव उपलब्ध नहीं हैं।";
        }
    } else if (season == "बरसात") {
        switch (district) {
            case "अनंतपुर":
                result = "मक्का, मूंगफली, हल्दी";
                break;
            case "करनाल":
                result = "मसूर, चना, सोयाबीन्स, मूंगफली";
                break;
            case "जम्मू":
                result = "सेब, नाशपाती, केसर";
                break;
            case "सागर":
                result = "कपास, आलू, टमाटर, प्याज";
                break;
            case "बुलढाना":
            case "जलगांव":
            case "नागपुर":
            case "नासिक":
            case "रत्नागिरि":
            case "सतारा":
                result = "कुछ भी नहीं बढ़ता";
                break;
            case "अमृतसर":
            case "फाजिल्का":
            case "होशियारपुर":
            case "जालंधर":
            case "लुधियाना":
            case "पटियाला":
            case "संगरूर":
            case "तरनतारन":
            case "अलीगढ":
            case "बरेली":
            case "बिजनौर":
            case "मेरठ":
            case "मुजफ्फरनगर":
            case "कोयंबटूर":
            case "तंजावुर":
            case "तिरुचिरापल्ली":
            case "करीमनगर":
            case "खम्मम":
            case "निजामाबाद":
            case "वरंगल":
                result = "कुछ भी नहीं बढ़ता";
                break;
            default:
                result = "इस जिले के लिए कोई फसल सुझाव उपलब्ध नहीं हैं।";
        }
    }
    if (district != "") {
        cropList.innerText = district + " में " + season + " में सुझाव :- \n" + result
    }
    else if (district == "") {
        cropList.innerText = "! जिला चुनें !";
    }
    
}
function speakLang() {
    var welcomeMessage = new SpeechSynthesisUtterance();
    welcomeMessage.text = "phaasal soojhaav";
    welcomeMessage.lang = "ge";
    window.speechSynthesis.speak(welcomeMessage);
  }
  
  // Call the function when the page is reloaded.
  window.addEventListener('load', speakLang);
