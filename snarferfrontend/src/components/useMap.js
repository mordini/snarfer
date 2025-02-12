import L from 'leaflet';
import "leaflet/dist/leaflet.css"; 

export function initializeMap(mapContainerId) {
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

  return map;
}

// Function to create a marker with an edit button
export function createMarker(map, lat, lng, poiId, router) {
  const marker = L.marker([lat, lng]).addTo(map);

  const popupContent = document.createElement("div");
  popupContent.innerHTML = `<b>Point of Interest</b><br>`;

  // Create button to edit POI
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

// Function to handle map click event (create POI button)
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
