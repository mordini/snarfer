# 🌍 Snarfer App

Snarfer is an app for all platforms that [REDACTED] [TOP SECRET].

## 🚀 Main front end files
0. **Splashy.vue**
The splash page. First thing users see if they aren't logged in.
Connects to login and user creation.
Maybe should connect to an "About Us" or "What is Snarfer" page?
1. **homePage.vue**
Currently, just holds mapView, but will hold Featured Quests, basic profile info, and navigation to all other main elements.
Will be connected to POI search, Quests search, mapView, and profileView.
2. **mapView.vue**
Displays a full-screen interactive map.
Uses Leaflet to load OpenStreetMap tiles.
Formats the map display.
Highly ranked users will gain the ability to click on a spot and create a POI there, or edit existing POIs.
3. **useMap.js**
Defines JS functions for map interaction.
Holds initializeMap, createMarker, onMapClick, etc.
Is called inside of mapView.vue.


---

🌟 ToDo
✅ Databases for POIs, Quests, and users.
✅ Color coding map components.
✅ Navigation mode.
✅ Add catalog entries to POI markers.
✅ Add POI search bar.
✅ Create questsExplore page.
✅ Add catalog entries to POI markers.


🤝 Contributing
Want to help improve this project?

Fork the repository
Create a branch (feature-new-functionality)
Commit changes (git commit -m "Added new feature")
Push your branch (git push origin feature-new-functionality)
Submit a Pull Request 🎉

