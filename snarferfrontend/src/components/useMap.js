// Contains functions to manage the map and POIs (Points of Interest), 
// such as.... getAllPOIs, addPOI, displayPOI, updatePOI, initializeMap, and addMapClickListener.

import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import lanternPic from '@/assets/newLanternpic.jpg';
import sword_icon from '@/assets/sword_icon.jpg';
import defaultIconSrc from '@/assets/questionMarkShaded.jpg';
import sandwichPic from '@/assets/sandwichPic.jpg';
import beerPic from '@/assets/beerPic.jpg';
import cupcakePic from '@/assets/cupcakePic.jpg';



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
      iconUrl = lanternPic;
      break;
    case 'food':
      iconUrl = sandwichPic;
      break;
    case 'battle':
      iconUrl = sword_icon;
      break;
    case 'drink':
      iconUrl = beerPic;
      break;
    case 'curiosity':
      iconUrl = cupcakePic;
      break;
    default:
      iconUrl = defaultIconSrc;
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



function displayPredefinedPOIs(map, router) {
  const predefinedPOIs = [
    { lat: 35.7796, lng: -78.6382, name: "Moore Square", description: "A historic park in downtown Raleigh.", category: "curiosity", userId: "user001" },
    { lat: 35.7915, lng: -78.7811, name: "William B. Umstead State Park", description: "A scenic park with hiking trails.", category: "curiosity", userId: "user002" },
    { lat: 35.7153, lng: -78.8820, name: "Lake Johnson Park", description: "A beautiful lake with walking trails.", category: "curiosity", userId: "user003" },
    { lat: 35.7804, lng: -78.6391, name: "North Carolina State Capitol", description: "Historic government building from 1840.", category: "history", userId: "user004" },
    { lat: 35.7877, lng: -78.6534, name: "Mordecai Historic Park", description: "Home of the oldest house in Raleigh.", category: "history", userId: "user005" },
    { lat: 35.7955, lng: -78.6360, name: "Historic Oakwood Cemetery", description: "Resting place of notable North Carolinians.", category: "history", userId: "user006" },
    { lat: 35.7796, lng: -78.6393, name: "Beasley's Chicken + Honey", description: "Famous for fried chicken and waffles.", category: "food", userId: "user007" },
    // Food POIs
    { lat: 35.7864, lng: -78.6650, name: "The Pit Authentic BBQ", description: "Classic Carolina barbecue spot.", category: "food", userId: "user008" },
    { lat: 35.7912, lng: -78.6473, name: "Big Ed’s City Market Restaurant", description: "Southern comfort food and a Raleigh staple.", category: "food", userId: "user009" },
    { lat: 35.9012, lng: -79.0513, name: "Al’s Burger Shack", description: "Famous for its juicy burgers and local ingredients.", category: "food", userId: "user019" },
    { lat: 36.0726, lng: -79.7910, name: "Dame’s Chicken & Waffles", description: "A beloved Southern spot known for its waffle and chicken combos.", category: "food", userId: "user020" },
    { lat: 35.5963, lng: -78.7310, name: "Stephenson’s BBQ", description: "A hidden gem serving Eastern North Carolina-style barbecue.", category: "food", userId: "user021" },
    { lat: 35.9132, lng: -79.0558, name: "Mediterranean Deli", description: "Popular for fresh Mediterranean cuisine in Chapel Hill.", category: "food", userId: "user022" },
    { lat: 35.7570, lng: -78.7440, name: "Guasaca Arepa & Grill", description: "Known for delicious arepas and South American flavors.", category: "food", userId: "user023" },
  
    // Drink POIs
    { lat: 35.7820, lng: -78.6455, name: "Brewery Bhavana", description: "A unique mix of brewery, dim sum, and bookstore.", category: "drink", userId: "user013" },
    { lat: 35.7918, lng: -78.6420, name: "Clouds Brewing", description: "German-inspired beer hall with a pour-your-own tap wall.", category: "drink", userId: "user014" },
    { lat: 35.7782, lng: -78.6375, name: "The Raleigh Wine Shop", description: "A cozy spot for curated wine selections.", category: "drink", userId: "user015" },
    { lat: 35.9111, lng: -79.0662, name: "The Crunkleton", description: "An upscale bar in Chapel Hill known for handcrafted cocktails.", category: "drink", userId: "user024" },
    { lat: 35.2269, lng: -80.8415, name: "The Cellar at Duckworth's", description: "Speakeasy-style bar with vintage cocktails in Charlotte.", category: "drink", userId: "user025" },
    { lat: 35.2286, lng: -80.8453, name: "The Suffolk Punch", description: "A modern brewery, coffeehouse, and restaurant in Charlotte.", category: "drink", userId: "user026" },
    { lat: 35.9940, lng: -78.8996, name: "Fullsteam Brewery", description: "Durham-based brewery focused on Southern farm ingredients.", category: "drink", userId: "user027" },
    { lat: 36.0975, lng: -79.4378, name: "Red Oak Brewery", description: "Famous for unfiltered lagers brewed using Bavarian techniques.", category: "drink", userId: "user028" },
  
    // Curiosity POIs
    { lat: 35.8841, lng: -78.8658, name: "Museum of Life and Science", description: "A hands-on science museum with a butterfly house.", category: "curiosity", userId: "user016" },
    { lat: 35.8992, lng: -78.9405, name: "Duke Lemur Center", description: "Home to the largest colony of lemurs outside of Madagascar.", category: "curiosity", userId: "user017" },
    { lat: 35.7806, lng: -78.6389, name: "CAM Raleigh", description: "Contemporary art museum with unique exhibits.", category: "curiosity", userId: "user018" },
    { lat: 36.0115, lng: -78.9286, name: "Sarah P. Duke Gardens", description: "Beautiful botanical gardens with walking trails.", category: "curiosity", userId: "user029" },
    { lat: 35.9675, lng: -78.9038, name: "Eno River State Park", description: "Great for hiking and discovering local wildlife.", category: "curiosity", userId: "user030" },
    { lat: 35.1571, lng: -79.4197, name: "North Carolina Zoo", description: "One of the largest natural habitat zoos in the world.", category: "curiosity", userId: "user031" },
    { lat: 35.7662, lng: -78.6336, name: "Marbles Kids Museum", description: "Interactive museum with hands-on exhibits for children.", category: "curiosity", userId: "user032" },
    { lat: 35.2273, lng: -80.8431, name: "Discovery Place Science", description: "Popular science and technology museum in Charlotte.", category: "curiosity", userId: "user033" }    
  ];
  // Convert and display each POI
  predefinedPOIs.forEach(poiData => {
    const poi = {
      id: Math.random().toString(36).substr(2, 9),  // Generate a random ID
      geometry: {
        type: "Point",
        coordinates: [poiData.lng, poiData.lat]  // GeoJSON format
      },
      properties: {
        name: poiData.name,
        description: poiData.description,
        category: poiData.category,
        userId: poiData.userId
      }
    };
    displayPOI(map, poi, router);
  });
}



// Update an existing POI in the GeoJSON dataset and localStorage
export function updatePOI(poiId, updatedData) {
  console.log("Updating POI with ID:", poiId, "New Data:", updatedData);
  // Retrieve POI data from localStorage
  const poiData = JSON.parse(localStorage.getItem("poiData")) || { features: [] };
  // Find POI by ID
  const poiIndex = poiData.features.findIndex(poi => poi.id === Number(poiId));

  if (poiIndex === -1) {
    console.error("POI with ID", poiId, "not found.");
    return;
  }
  // Update POI properties
  Object.assign(poiData.features[poiIndex].properties, updatedData);
  // Save updated POI data back to localStorage
  localStorage.setItem("poiData", JSON.stringify(poiData));
  console.log("POI updated successfully:", poiData.features[poiIndex]);
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
  displayPredefinedPOIs(map, router);

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