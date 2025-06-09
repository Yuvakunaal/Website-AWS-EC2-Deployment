var map = L.map('map').setView([22.5937, 78.9629], 4); // India visibility coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://opentopomap.org">OpenStreetMap</a> contributors'
}).addTo(map);

var andhraPradeshDistricts = [
    { name: "Anantapur", coordinates: [14.6546, 77.5568] }
];
  
var haryanaDistricts = [
    { name: "Karnal", coordinates: [29.6857, 76.9905] }
];
  
var jammuKashmirDistricts = [
    { name: "Jammu", coordinates: [32.7266, 74.8570] }
];
  
var madhyaPradeshDistricts = [
    { name: "Sagar", coordinates: [23.8392, 78.7378] }
];
  
var maharashtraDistricts = [
    { name: "Buldhana", coordinates: [20.5330, 76.1810] },
    { name: "Jalgaon", coordinates: [21.0077, 75.5626] },
    { name: "Nagpur", coordinates: [21.1458, 79.0882] },
    { name: "Nashik", coordinates: [20.0063, 73.7798] },
    { name: "Ratnagiri", coordinates: [16.9944, 73.3002] },
    { name: "Satara", coordinates: [17.6794, 74.0195] }
];
  
var punjabDistricts = [
    { name: "Amritsar", coordinates: [31.6340, 74.8723] },
    { name: "Fazilka", coordinates: [30.4046, 74.0265] },
    { name: "Hoshiarpur", coordinates: [31.5273, 75.9110] },
    { name: "Jalandhar", coordinates: [31.3260, 75.5762] },
    { name: "Ludhiana", coordinates: [30.9000, 75.8573] },
    { name: "Patiala", coordinates: [30.3402, 76.3869] },
    { name: "Sangrur", coordinates: [30.2448, 75.8354] },
    { name: "Tarn Taran", coordinates: [31.4504, 74.9272] }
];
  
var tamilNaduDistricts = [
    { name: "Coimbatore", coordinates: [11.0168, 76.9558] },
    { name: "Thanjavur", coordinates: [10.7860, 79.1378] },
    { name: "Tiruchirappalli", coordinates: [10.7905, 78.7047] }
];
  
var telanganaDistricts = [
    { name: "Karimnagar", coordinates: [18.4392, 79.1288] },
    { name: "Khammam", coordinates: [17.2477, 80.1514] },
    { name: "Nizamabad", coordinates: [18.6725, 78.0940] },
    { name: "Warangal", coordinates: [17.9784, 79.6003] }
];
  
var uttarPradeshDistricts = [
    { name: "Aligarh", coordinates: [27.8974, 78.0880] },
    { name: "Bareilly", coordinates: [28.3670, 79.4304] },
    { name: "Bijnor", coordinates: [29.3722, 78.1366] },
    { name: "Meerut", coordinates: [28.9845, 77.7064] },
    { name: "Muzaffarnagar", coordinates: [29.4744, 77.7041] }
];
  
var currentDistricts = []; // Variable to hold current districts data

// Populate district dropdown based on selected state
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
      currentDistricts = districts; // Update current districts data
      var districtDropdown = document.getElementById("district");
      districtDropdown.innerHTML = "";
      districts.forEach(function(district) {
        var option = document.createElement("option");
        option.value = district.name;
        option.text = district.name;
        districtDropdown.appendChild(option);
      });
      plotDistricts(); // Plot districts on map
}
// Zoom to the selected state and populate districts dropdown
function zoomToState() {
    var state = document.getElementById("state").value;
    var centerCoordinates = state === "telangana" ? [18.1124, 79.0193] : [11.1271, 78.6569];
    map.setView(centerCoordinates, 8); // Zoom level may need adjustment
    populateDistricts(); // Populate district dropdown after zooming to state
}

// Function to plot districts on the map
function plotDistricts() {
    // Remove existing markers
    map.eachLayer(function(layer) {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
    });
      
    // Plot markers for districts
    currentDistricts.forEach(function(district) {
        var marker = L.marker(district.coordinates).addTo(map);
        marker.bindPopup(district.name);
        
      });
}

// Function to get crop suggestions
function getCrops(season) {
    var district = document.getElementById("district").value;
    var cropList = document.getElementById("crop-list");
    var result = "";
    if (season == "summer") {
        switch (district) {
            case "Anantapur":
                result = "Mangoes, Groundnut, Pomegranates, Grapes, Chillies, Tomatoes";
                break;
            case "Karnal":
                result = "Onions, Cauliflower, Peas, Potatoes, Tomatoes, Cabbage";
                break;
            case "Jammu":
                result = "Potatoes, Tomatoes, Onions, Guavas, Apples, Cherries";
                break;
            case "Sagar":
                result = "Groundnut, Sunflower, Sesame, Urad dal, Mung beans, Rice";
                break;
            case "Buldhana":
                result = "Mangoes, Oranges, Pomegranates, Grapes, Guavas, Bananas";
                break;
            case "Jalgaon":
                result = "Grapes, Pomegranates, Oranges, Mangoes, Tomatoes, Brinjal (Eggplant)";
                break;
            case "Nagpur":
                result = "Chillies, Tomatoes, Brinjal (Eggplant), Okra (Ladyfinger), Capsicum, Mangoes";
                break;
            case "Nashik":
                result = "Brinjal, Capsicum, Okra (Ladyfinger), Mangoes, Pomegranates, Guavas";
                break;
            case "Ratnagiri":
                result = "Alphonso Mangoes, Cashewnuts, Coconuts, Betel nuts (Areca nuts), Cashew apples";
                break;
            case "Satara":
                result = "Grapes, Brinjal (Eggplant), Okra (Ladyfinger), Capsicum, Cauliflower, Cabbage";
                break;
            case "Amritsar":
            case "Fazilka":
            case "Hoshiarpur":
            case "Jalandhar":
            case "Ludhiana":
            case "Patiala":
            case "Sangrur":
            case "Tarn Taran":
                result = "Mangoes, Groundnut, Pomegranates, Grapes, Chillies, Tomatoes";
                break;
            case "Coimbatore":
            case "Thanjavur":
            case "Tiruchirappalli":
                result = "Tomato, Brinjal, Carrot, Bean, Papaya, Guava";
                break;
            case "Karimnagar":
            case "Khammam":
            case "Nizamabad":
            case "Warangal":
                result = "Tomato, Brinjal, Turmeric, Bottle gourd, Bitter gourd, Ridge gourd";
                break;
            case "Aligarh":
            case "Bareilly":
            case "Bijnor":
            case "Meerut":
            case "Muzaffarnagar":
                result = "Mangoes, Groundnut, Pomegranates, Grapes, Chillies, Tomatoes";
                break;
            default:
                result = "No crop suggestions available for this district.";
        }
    } else if (season == "winter") {
        switch (district) {
            case "Anantapur":
                result = "Cotton, Chickpeas (Chana), Groundnut, Maize, Turmeric";
                break;
            case "Karnal":
                result = "Rice, Maize, Mustard, Sunflower, Cotton, Wheat";
                break;
            case "Jammu":
                result = "Wheat, Rice, Lentils, Peas, Chickpeas";
                break;
            case "Sagar":
                result = "Wheat, Rice, Soybeans, Gram (Chickpeas), Mustard";
                break;
            case "Buldhana":
                result = "Cotton, Soybeans, Sorghum (Jowar), Wheat, Chickpeas (Chana)";
                break;
            case "Jalgaon":
                result = "Wheat, Jowar (Sorghum), Cotton, Soybeans, Sugarcane, Maize";
                break;
            case "Nagpur":
                result = " Oranges, Sugarcane, Cotton, Soybeans, Wheat, Rice";
                break;
            case "Nashik":
                result = "Grapes, Onions, Tomatoes, Wheat, Sugarcane, Soybeans";
                break;
            case "Ratnagiri":
                result = "Cashew kernels, Turmeric, Black pepper, Arecanut leaves, Arecanut flowers";
                break;
            case "Satara":
                result = "Sugarcane, Jowar (Sorghum), Bajra (Pearl millet), Wheat, Rice, Groundnut";
                break;
            case "Amritsar":
            case "Fazilka":
            case "Hoshiarpur":
            case "Jalandhar":
            case "Ludhiana":
            case "Patiala":
            case "Sangrur":
            case "Tarn Taran":
            case "Aligarh":
            case "Bareilly":
            case "Bijnor":
            case "Meerut":
            case "Muzaffarnagar":
                result = "Cotton, Chickpeas (Chana), Groundnut, Maize, Turmeric";
                break;
            case "Coimbatore":
            case "Thanjavur":
            case "Tiruchirappalli":
                result = "Tomato, Brinjal, Carrot, Bean, Papaya, Guava, Rice, Bajra, Wheat";
                break;
            case "Karimnagar":
            case "Khammam":
            case "Nizamabad":
            case "Warangal":
                result = "Tomato, Brinjal, Turmeric, Bottle gourd, Bitter gourd, Ridge gourd, Rice, Bajra, Wheat";
                break;
            default:
                result = "No crop suggestions available for this district.";
        }
    } else if (season == "rainy") {
        switch (district) {
            case "Anantapur":
                result = "Maize, Groundnut, Turmeric";
                break;
            case "Karnal":
                result = "Lentils, Chickpeas, Soybeans, Groundnut";
                break;
            case "Jammu":
                result = "Apples, Pears, Saffron";
                break;
            case "Sagar":
                result = "Cotton, Potatoes, Tomatoes, Onions";
                break;
            case "Buldhana":
            case "Jalgaon":
            case "Nagpur":
            case "Nashik":
            case "Ratnagiri":
            case "Satara":
                result = "Nothing grows";
                break;
            case "Amritsar":
            case "Fazilka":
            case "Hoshiarpur":
            case "Jalandhar":
            case "Ludhiana":
            case "Patiala":
            case "Sangrur":
            case "Tarn Taran":
            case "Aligarh":
            case "Bareilly":
            case "Bijnor":
            case "Meerut":
            case "Muzaffarnagar":
                result = "Maize, Groundnut, Turmeric";
                break;
            case "Coimbatore":
            case "Thanjavur":
            case "Tiruchirappalli":
                result = "Tomato, Brinjal, Carrot, Bean, Papaya, Guava";
                break;
            case "Karimnagar":
            case "Khammam":
            case "Nizamabad":
            case "Warangal":
                result = "Tomato, Brinjal, Turmeric, Bottle gourd, Bitter gourd, Ridge gourd";
                break;
            default:
                result = "No crop suggestions available for this district.";
        }
    }

    if (district != "") {
        cropList.innerText = "Suggestions for " + district + " in " + season + " :- \n" + result;
    }
    else if (district == "") {
        cropList.innerText = "! Select District !";
    }
}
function speakLang() {
    var welcomeMessage = new SpeechSynthesisUtterance();
    welcomeMessage.text = "Crop suggeshon";
    welcomeMessage.lang = "en";
    window.speechSynthesis.speak(welcomeMessage);
  }
  // Call the function when the page is reloaded.
  window.addEventListener('load', speakLang);
