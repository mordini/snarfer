// Contains functions to manage the map and POIs (Points of Interest), 
// such as.... getAllPOIs, addPOI, displayPOI, updatePOI, initializeMap, and addMapClickListener.

import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import sword_icon from '@/assets/boot1.png';
import defaultIconSrc from '@/assets/arena.png';
import sandwichPic from '@/assets/boot1.png';
import beerPic from '@/assets/beerMug.png';
import marketIcon from '@/assets/market.png'; // Marketplace icon
import landmarkIcon from '@/assets/adventurerCard.png'; // Landmark or monument icon
import treeIcon from '@/assets/tree.png'; // Park and nature icon
import stadiumIcon from '@/assets/arena.png'; // Arena or sports venue icon
import questionMarkIcon from '@/assets/treasureClosed.png'; // Mystery locations icon
import ritualIcon from '@/assets/obelisk.png'; // Ritual or legend-related icon
import scrollIcon from '@/assets/scroll.png'; // Historical event document or scroll icon
import adventurerIcon from '@/assets/adventurerSpooky.png'; // Adventurer icon for user location




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
    case 'market':
        iconUrl = marketIcon; // Example: Icon representing a marketplace
        break;
    case 'landmark':
        iconUrl = landmarkIcon; // Example: Monument or landmark icon
        break;
    case 'restaurant':
        iconUrl = sandwichPic; // Example: Food-related icon
        break;
    case 'park':
        iconUrl = treeIcon; // Example: Tree icon for parks and nature
        break;
    case 'arena':
        iconUrl = stadiumIcon; // Example: Sports or battle arena icon
        break;
    case 'brewery':
        iconUrl = beerPic; // Example: Beer mug or brewery icon
        break;
    case 'mystery':
        iconUrl = questionMarkIcon; // Example: A mysterious or hidden location icon
        break;
    case 'ritual':
        iconUrl = ritualIcon; // Example: A symbolic or spiritual icon
        break;
    case 'battle':
        iconUrl = sword_icon; // Example: Crossed swords or battle icon
        break;
    case 'historical_event':
        iconUrl = scrollIcon; // Example: Scroll or document icon for historical events
        break;
    default:
        iconUrl = defaultIconSrc; // Fallback icon for undefined categories
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
    { lat: 35.7796, lng: -78.6382, name: "Raleigh City Market", description: "Historic market featuring local vendors and artisan goods.", category: "market", userId: "user101" },
    { lat: 35.9940, lng: -78.8986, name: "Durham Farmers' Market", description: "A bustling local market with fresh produce and crafts.", category: "market", userId: "user102" },
    { lat: 35.7915, lng: -78.7811, name: "Western Wake Farmers' Market", description: "Community-driven farmers' market with a variety of local goods.", category: "market", userId: "user103" },
    { lat: 35.7804, lng: -78.6391, name: "North Carolina State Capitol", description: "Historic government building from 1840.", category: "landmark", userId: "user104" },
    { lat: 35.7877, lng: -78.6534, name: "Mordecai Historic Park", description: "Home of the oldest house in Raleigh.", category: "landmark", userId: "user105" },
    { lat: 35.8992, lng: -78.9405, name: "Duke Chapel", description: "Iconic Gothic-style chapel at Duke University.", category: "landmark", userId: "user106" },
    { lat: 35.7796, lng: -78.6393, name: "Beasley's Chicken + Honey", description: "Famous for fried chicken and waffles.", category: "restaurant", userId: "user107" },
    { lat: 35.7864, lng: -78.6650, name: "The Pit Authentic BBQ", description: "Classic Carolina barbecue spot.", category: "restaurant", userId: "user108" },
    { lat: 35.7912, lng: -78.6473, name: "Big Ed’s City Market Restaurant", description: "Southern comfort food and a Raleigh staple.", category: "restaurant", userId: "user109" },
    { lat: 35.7915, lng: -78.7811, name: "William B. Umstead State Park", description: "A scenic park with hiking trails.", category: "park", userId: "user110" },
    { lat: 35.7153, lng: -78.8820, name: "Lake Johnson Park", description: "A beautiful lake with walking trails.", category: "park", userId: "user111" },
    { lat: 35.7712, lng: -78.6791, name: "Dorothea Dix Park", description: "Expansive park with skyline views and open fields.", category: "park", userId: "user112" },
    { lat: 35.8033, lng: -78.7214, name: "PNC Arena", description: "Home to the Carolina Hurricanes and major concerts.", category: "arena", userId: "user113" },
    { lat: 35.9940, lng: -78.8986, name: "Durham Bulls Athletic Park", description: "Minor league baseball stadium with a great atmosphere.", category: "arena", userId: "user114" },
    { lat: 35.9915, lng: -78.9046, name: "Cameron Indoor Stadium", description: "Legendary basketball venue at Duke University.", category: "arena", userId: "user115" },
    { lat: 36.0975, lng: -79.4378, name: "Red Oak Brewery", description: "Famous for unfiltered lagers brewed using Bavarian techniques.", category: "brewery", userId: "user116" },
    { lat: 35.9916, lng: -78.9013, name: "Fullsteam Brewery", description: "Brewery specializing in Southern-inspired craft beers.", category: "brewery", userId: "user117" },
    { lat: 35.7820, lng: -78.6455, name: "Brewery Bhavana", description: "A unique mix of brewery, dim sum, and bookstore.", category: "brewery", userId: "user118" },
    { lat: 35.9940, lng: -78.8986, name: "The Devil’s Tramping Ground", description: "A barren circle of land where nothing grows—steeped in legend.", category: "mystery", userId: "user119" },
    { lat: 35.9472, lng: -78.8225, name: "Crybaby Lane", description: "A haunted road with ghostly legends of crying children.", category: "mystery", userId: "user120" },
    { lat: 36.1312, lng: -78.7006, name: "Brown Mountain Lights", description: "Mysterious glowing orbs seen in the mountains.", category: "mystery", userId: "user121" },
    { lat: 35.7700, lng: -78.6385, name: "Historic Yates Mill", description: "A historic gristmill with rumored spiritual significance.", category: "ritual", userId: "user122" },
    { lat: 36.0954, lng: -79.4371, name: "Occaneechi Indian Village", description: "A reconstructed village honoring the indigenous Occaneechi people.", category: "ritual", userId: "user123" },
    { lat: 35.7967, lng: -78.7810, name: "Pullen Park Carousel", description: "A century-old carousel with folklore tied to its origins.", category: "ritual", userId: "user124" },
    { lat: 35.9121, lng: -79.0846, name: "Bennett Place", description: "Site of the largest surrender of Confederate troops in the Civil War.", category: "battle", userId: "user125" },
    { lat: 35.6825, lng: -78.6754, name: "Averasboro Battlefield & Museum", description: "Civil War battlefield with historical exhibits.", category: "battle", userId: "user126" },
    { lat: 36.1312, lng: -78.7006, name: "Alamance Battleground", description: "Site of a pre-Revolutionary War battle.", category: "battle", userId: "user127" },
    { lat: 35.7796, lng: -78.6382, name: "Site of the Halifax Resolves", description: "First formal call for independence from Britain by an American colony.", category: "historical_event", userId: "user128" },
    { lat: 35.6891, lng: -78.5595, name: "State Fairgrounds", description: "Home of the historic North Carolina State Fair since 1853.", category: "historical_event", userId: "user129" },
    { lat: 36.0999, lng: -80.2442, name: "Old Salem", description: "A living history museum of Moravian settlement life in NC.", category: "historical_event", userId: "user130" },
    { lat: 35.2271, lng: -80.8431, name: "Charlotte Regional Farmers Market", description: "One of the largest farmers markets in North Carolina.", category: "market", userId: "user201" },
    { lat: 35.9230, lng: -81.5370, name: "Hickory Farmers Market", description: "A vibrant market showcasing local produce and crafts.", category: "market", userId: "user202" },
    { lat: 35.7704, lng: -82.6186, name: "Biltmore Estate", description: "America’s largest home, built by George Vanderbilt.", category: "landmark", userId: "user203" },
    { lat: 35.6893, lng: -81.9931, name: "Linville Caverns", description: "A network of underground caves with unique rock formations.", category: "landmark", userId: "user204" },
    { lat: 35.9927, lng: -78.9025, name: "Duke University Chapel", description: "An iconic Gothic chapel at the heart of Duke’s campus.", category: "landmark", userId: "user205" },
    { lat: 35.2269, lng: -80.8433, name: "Price’s Chicken Coop", description: "A Charlotte staple for classic Southern fried chicken.", category: "restaurant", userId: "user206" },
    { lat: 35.6127, lng: -78.5661, name: "Stephenson’s Bar-B-Q", description: "A must-visit for Eastern North Carolina barbecue.", category: "restaurant", userId: "user207" },
    { lat: 35.6111, lng: -83.4773, name: "Great Smoky Mountains National Park", description: "One of the most-visited national parks in the U.S.", category: "park", userId: "user208" },
    { lat: 36.0962, lng: -81.9318, name: "Grandfather Mountain", description: "Home to the famous Mile High Swinging Bridge.", category: "park", userId: "user209" },
    { lat: 35.2251, lng: -80.8392, name: "Spectrum Center", description: "Home of the Charlotte Hornets and major concerts.", category: "arena", userId: "user210" },
    { lat: 35.2476, lng: -80.8313, name: "Bank of America Stadium", description: "Home of the Carolina Panthers.", category: "arena", userId: "user211" },
    { lat: 35.5939, lng: -82.5540, name: "Wicked Weed Brewing", description: "Popular craft brewery known for its creative beers.", category: "brewery", userId: "user212" },
    { lat: 35.6096, lng: -82.5570, name: "Highland Brewing Company", description: "Asheville’s first craft brewery.", category: "brewery", userId: "user213" },
    { lat: 35.9932, lng: -78.9023, name: "Ponysaurus Brewing Co.", description: "A Durham brewery known for its unique flavors.", category: "brewery", userId: "user214" },
    { lat: 36.0946, lng: -81.1782, name: "Brown Mountain Lights", description: "Mysterious glowing orbs seen in the Blue Ridge Mountains.", category: "mystery", userId: "user215" },
    { lat: 35.2840, lng: -80.7600, name: "Latta Plantation Ghosts", description: "A historic plantation with tales of ghostly encounters.", category: "mystery", userId: "user216" },
    { lat: 36.1700, lng: -81.8195, name: "Blowing Rock", description: "A cliff where Cherokee lovers supposedly leaped together.", category: "ritual", userId: "user217" },
    { lat: 35.3915, lng: -82.5843, name: "Jump Off Rock", description: "A scenic overlook with a tragic legend of lost love.", category: "ritual", userId: "user218" },
    { lat: 36.1400, lng: -78.7072, name: "Guilford Courthouse National Military Park", description: "Site of a major Revolutionary War battle.", category: "battle", userId: "user219" },
    { lat: 35.2509, lng: -81.1782, name: "Kings Mountain National Military Park", description: "Site of a pivotal Revolutionary War battle.", category: "battle", userId: "user220" },
    { lat: 35.6843, lng: -78.5512, name: "Bentonville Battlefield", description: "Site of the largest Civil War battle in North Carolina.", category: "historical_event", userId: "user221" },
    { lat: 36.0986, lng: -80.2407, name: "Old Salem", description: "A preserved Moravian settlement from the 1700s.", category: "historical_event", userId: "user222" },
    { lat: 35.5951, lng: -82.5515, name: "The Omni Grove Park Inn", description: "Historic hotel with alleged haunted rooms.", category: "mystery", userId: "user223" },
    { lat: 36.2196, lng: -81.6746, name: "Moses Cone Memorial Park", description: "A scenic park with trails and a historic mansion.", category: "park", userId: "user224" },
    { lat: 35.7840, lng: -78.6210, name: "North Carolina Museum of Art", description: "Features historic and contemporary artwork.", category: "landmark", userId: "user225" },
    { lat: 36.0217, lng: -78.9397, name: "Sarah P. Duke Gardens", description: "Botanical gardens at Duke University.", category: "park", userId: "user226" },
    { lat: 35.7877, lng: -78.6463, name: "Joel Lane House", description: "Historic home known as the birthplace of Raleigh.", category: "historical_event", userId: "user227" },
    { lat: 35.6892, lng: -82.5564, name: "Basilica of St. Lawrence", description: "A historic Catholic church with unique architecture.", category: "landmark", userId: "user228" },
    { lat: 36.4956, lng: -79.7514, name: "Reed Gold Mine", description: "Site of America’s first gold rush in 1799.", category: "historical_event", userId: "user229" },
    { lat: 35.2140, lng: -80.9435, name: "Carowinds", description: "Popular amusement park on the NC/SC border.", category: "landmark", userId: "user230" },
    { lat: 35.2465, lng: -80.8562, name: "NASCAR Hall of Fame", description: "Celebrating the history of stock car racing.", category: "landmark", userId: "user231" },
    { lat: 35.1028, lng: -83.2224, name: "Dry Falls", description: "A scenic waterfall you can walk behind.", category: "landmark", userId: "user232" },
    { lat: 36.1350, lng: -81.6776, name: "Tweetsie Railroad", description: "A Wild West-themed amusement park.", category: "historical_event", userId: "user233" },
    { lat: 35.3733, lng: -80.7350, name: "Historic Rosedale", description: "A well-preserved 19th-century plantation house.", category: "historical_event", userId: "user234" },
    { lat: 35.5959, lng: -82.5515, name: "Cúrate", description: "Award-winning Spanish tapas restaurant in Asheville.", category: "restaurant", userId: "user301" },
    { lat: 36.0999, lng: -80.2442, name: "Sweet Potatoes", description: "Southern-inspired comfort food in Winston-Salem.", category: "restaurant", userId: "user302" },
    { lat: 35.2271, lng: -80.8431, name: "Mert’s Heart and Soul", description: "Popular for Lowcountry and soul food in Charlotte.", category: "restaurant", userId: "user303" },
    { lat: 35.7877, lng: -78.6446, name: "Angus Barn", description: "Famous steakhouse serving aged beef and fine wine in Raleigh.", category: "restaurant", userId: "user304" },
    { lat: 34.2257, lng: -77.9447, name: "Catch", description: "Seafood restaurant focused on local and sustainable ingredients in Wilmington.", category: "restaurant", userId: "user305" },
    { lat: 35.4963, lng: -80.8607, name: "Kindred", description: "Highly rated modern American dining in Davidson.", category: "restaurant", userId: "user306" },
    { lat: 35.6139, lng: -77.3722, name: "B’s Barbecue", description: "One of the best whole hog barbecue spots in the state, located in Greenville.", category: "restaurant", userId: "user307" },
    { lat: 35.4676, lng: -83.3145, name: "Haywood Smokehouse", description: "Authentic barbecue spot in Dillsboro known for its smoky flavors.", category: "restaurant", userId: "user308" },
    { lat: 35.7596, lng: -78.8658, name: "The Fearrington House", description: "Fine dining experience in a charming countryside setting.", category: "restaurant", userId: "user309" },
    { lat: 35.7765, lng: -78.6360, name: "Poole’s Diner", description: "Iconic Raleigh eatery famous for its mac and cheese.", category: "restaurant", userId: "user310" },
    { lat: 35.9606, lng: -80.0053, name: "Piedmont Triad Farmers Market", description: "A hub for fresh produce and local goods in Greensboro.", category: "market", userId: "user311" },
    { lat: 35.0527, lng: -78.8784, name: "Dirtbag Ales Farmers Market", description: "A brewery-based farmers market with local goods in Hope Mills.", category: "market", userId: "user312" },
    { lat: 35.9712, lng: -78.9015, name: "Durham Farmers' Market", description: "A lively weekend market featuring fresh produce and artisan goods.", category: "market", userId: "user313" },
    { lat: 35.5685, lng: -77.3968, name: "Pitt County Farmers Market", description: "A popular spot for fresh seafood, vegetables, and crafts.", category: "market", userId: "user314" },
    { lat: 35.2072, lng: -80.8341, name: "South End Market", description: "Charlotte’s go-to place for organic produce and handmade goods.", category: "market", userId: "user315" },
    { lat: 35.5958, lng: -82.5534, name: "Burial Beer Co.", description: "Known for its innovative craft beer and rustic taproom in Asheville.", category: "brewery", userId: "user316" },
    { lat: 36.0999, lng: -80.2442, name: "Foothills Brewing", description: "A staple of the North Carolina craft beer scene in Winston-Salem.", category: "brewery", userId: "user317" },
    { lat: 35.9932, lng: -78.8986, name: "Fullsteam Brewery", description: "A Durham brewery with a focus on Southern farm-to-glass beers.", category: "brewery", userId: "user318" },
    { lat: 35.2331, lng: -80.8461, name: "Olde Mecklenburg Brewery", description: "Charlotte’s oldest and largest craft brewery.", category: "brewery", userId: "user319" },
    { lat: 36.1263, lng: -81.6784, name: "Booneshine Brewing Company", description: "Boone’s favorite craft brewery with mountain views.", category: "brewery", userId: "user320" },
    { lat: 35.9154, lng: -81.5384, name: "Blowing Rock", description: "Scenic cliff with breathtaking views and Native American legends.", category: "landmark", userId: "user321" },
    { lat: 35.5300, lng: -82.6271, name: "Blue Ridge Parkway", description: "One of the most scenic drives in the country, cutting through NC.", category: "landmark", userId: "user322" },
    { lat: 35.2308, lng: -80.8460, name: "Billy Graham Library", description: "A museum dedicated to the life of the famous evangelist.", category: "landmark", userId: "user323" },
    { lat: 35.7855, lng: -78.6831, name: "North Carolina State Capitol", description: "Historic government building in downtown Raleigh.", category: "landmark", userId: "user324" },
    { lat: 35.3856, lng: -77.9945, name: "Ava Gardner Museum", description: "Celebrating the legacy of the famous actress from North Carolina.", category: "landmark", userId: "user325" }
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
  const map = L.map(mapContainerId).setView([35.788, -78.644], 13);
  // Add tile layer
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  // Locate user and zoom to their location
  displayUserLocation(map);
  // Fetch and display all POIs
  const poiData = getAllPOIs();
  poiData.features.forEach(poi => {
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



export function displayUserLocation(map) {
  const userIcon = L.icon({
    iconUrl: adventurerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });
  let userMarker;
  // Start continuous geolocation tracking
  map.locate({ setView: true, maxZoom: 16, watch: true });
  // Event: On location found, update marker position
  map.on('locationfound', (e) => {
    // If a marker already exists, update its position
    if (userMarker) {
      userMarker.setLatLng(e.latlng);
    } else {
      // If no marker exists, create one at the user's location
      userMarker = L.marker(e.latlng, { icon: userIcon })
        .addTo(map)
        .bindPopup("You are here");
    }
  });
  // Event: On location error
  map.on('locationerror', (e) => {
    console.error("Geolocation error:", e.message);
  });
}
