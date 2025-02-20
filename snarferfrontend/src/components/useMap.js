import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import lanternPic from '@/assets/newLanternpic.jpg';
import sword_icon from '@/assets/sword_icon.jpg';
import defaultIconSrc from '@/assets/questionMarkShaded.jpg';



export function getAllPOIs() {
  return JSON.parse(localStorage.getItem("poiData")) || {
    type: "FeatureCollection",
    features: []
  };
}




// Add a new POI to the database
export function addPOI(lat, lng, name, description, category, createdBy) {
  const newPOI = {
    type: "Feature",
    id: Date.now(),
    properties: {
      name,
      description,
      category,
      created_by: createdBy,
      timestamp: new Date().toISOString()
    },
    geometry: {
      type: "Point",
      coordinates: [lng, lat]
    }
  };

  // Add POI to the dataset and update localStorage
  const poiData = getAllPOIs();
  poiData.features.push(newPOI);
  localStorage.setItem("poiData", JSON.stringify(poiData));

  return newPOI;
}



// Function to display a POI with a custom marker and popup
export function displayPOI(map, poi, router) {
  const { coordinates } = poi.geometry;
  const { name, description, category } = poi.properties;

  // Determine the icon based on POI category
  let iconUrl;
  switch (category) {
    case 'history':
      iconUrl = 'lanternPic';  // Example: Replace with the correct path
      break;
    case 'food':
      iconUrl = 'sword_icon';  // Example: Replace with the correct path
      break;
    case 'battle':
      iconUrl = 'sword_icon';  // Example: Replace with the correct path
      break;
    case 'drink':
      iconUrl = 'defaultIconSrc'; // Example: Replace with the correct path
      break;
    case 'curiosity':
      iconUrl = 'defaultIconSrc'; // Example: Replace with the correct path
      break;
    default:
      iconUrl = 'defaultIconSrc'; // Default icon
      break;
  }

  // Create marker with the determined icon
  const icon = L.icon({
    iconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  const marker = L.marker([coordinates[1], coordinates[0]], { icon }).addTo(map);

  // Create popup content with custom title and description
  const popupContent = document.createElement("div");
  popupContent.innerHTML = `<b>${name || "Point of Interest"}</b><br>${description || ""}<br><i>Category: ${category}</i>`;

  // Add button to edit POI
  const editButton = document.createElement("button");
  editButton.innerText = "Edit this POI";
  editButton.style.padding = "5px";
  editButton.style.marginTop = "5px";
  editButton.style.cursor = "pointer";
  editButton.onclick = () => {
    router.push(`/catEdit?poiId=${poi.id}`);
  };

  popupContent.appendChild(editButton);
  marker.bindPopup(popupContent);
}




export function initializeMap(mapContainerId, router) {
  if (!mapContainerId) {
    console.error("No map container ID provided.");
    return;
  }
  // Create and return the map instance (default view: Raleigh)
  const map = L.map(mapContainerId).setView([35.788, -78.644], 13);

  // Add tile layer
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  // Fetch and display all POIs
  const poiData = getAllPOIs();
  poiData.features.forEach(poi => {
    const { coordinates } = poi.geometry;
    // Display all POIs found in the database
    displayPOI(map, poi, router);
  });

  return map;
}



// Handle map click event (create popup with "Create POI" button)
export function addMapClickListener(map) {
  const popup = L.popup();

  function onMapClick(e) {
    const lat = e.latlng.lat.toFixed(5);
    const lng = e.latlng.lng.toFixed(5);

    const createPoiButton = `<button id="create-poi-btn" style="
      background-color: #42b883; color: white; border: none; padding: 5px 10px; 
      border-radius: 5px; cursor: pointer; margin-top: 5px;">
      Create POI
    </button>`;

    popup
      .setLatLng(e.latlng)
      .setContent(`You clicked at:<br>Lat: ${lat}, Lng: ${lng}<br>${createPoiButton}`)
      .openOn(map);

    setTimeout(() => {
      document.getElementById("create-poi-btn").addEventListener("click", () => {
        window.location.href = `/catEdit?lat=${lat}&lng=${lng}`;
      });
    }, 10);
  }
  map.on("click", onMapClick);
}