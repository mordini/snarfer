import L from 'leaflet';
import "leaflet/dist/leaflet.css"; 

export function initializeMap(mapContainerId, router) {
  if (!mapContainerId) {
    console.error("No map container ID provided.");
    return;
  }

  // Create map instance. Default to Raleigh
  const map = L.map(mapContainerId).setView([35.788, -78.644], 13);

  // Add tile layer
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Function to create POIs
  function createMarker(lat, lng, poiId) {
    const marker = L.marker([lat, lng]).addTo(map);

    const popupContent = document.createElement("div");
    popupContent.innerHTML = `<b>Point of Interest</b><br>`;
    
    // Create button at bottom of popup that takes you to Catalog Edit page
    const editButton = document.createElement("button");
    editButton.innerText = "editThisPOI";
    editButton.style.padding = "5px";
    editButton.style.marginTop = "5px";
    editButton.style.cursor = "pointer";
    editButton.onclick = () => {
      router.push(`/catEdit?poiId=${poiId}`);
    };

    popupContent.appendChild(editButton);
    marker.bindPopup(popupContent);

    return marker;
  }

  // Add markers with buttons
  createMarker(35.7, -78.6, 1);
  createMarker(35.8, -78.7, 2);
  createMarker(35.75, -78.65, 3);

  // Click event
  const popup = L.popup();

  function onMapClick(e) {
    const lat = e.latlng.lat.toFixed(5); // Round coordinates for better readability
    const lng = e.latlng.lng.toFixed(5);

    // Create a button inside the popup
    const createPoiButton = `<button id="create-poi-btn" style="
      background-color: #42b883; color: white; border: none; padding: 5px 10px; 
      border-radius: 5px; cursor: pointer; margin-top: 5px;">
      Create POI
    </button>`;

    popup
      .setLatLng(e.latlng)
      .setContent(`You clicked at:<br>Lat: ${lat}, Lng: ${lng}<br>${createPoiButton}`)
      .openOn(map);

    // Wait for Vue to render, then attach an event listener to the new button
    setTimeout(() => {
      document.getElementById("create-poi-btn").addEventListener("click", () => {
        window.location.href = `/catEdit?lat=${lat}&lng=${lng}`;
      });
    }, 10);
  }

  // Attach the click event to the map
  map.on("click", onMapClick);


  return map;
}
