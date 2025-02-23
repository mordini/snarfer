# 🌍 Snarfer App


---

## 🚀 Main front end files
1. **Splashy.vue**

The splash page. First thing users see if they aren't logged in.

Connects to login and user creation.

Maybe should connect to an "About Us" or "What is Snarfer" page?

2. **homePage.vue**
   
Currently, just holds mapView, but will hold Featured Quests, basic profile info, and navigation to all other main elements.

Will be connected to POI search, Quests search, mapView, and profileView.

3. **mapView.vue**

Displays a full-screen interactive map.

Uses Leaflet to load OpenStreetMap tiles.

Formats the map display.

Highly ranked users will gain the ability to click on a spot and create a POI there, or edit existing POIs.

4. **useMap.js**

Defines JS functions for map interaction.

Holds initializeMap, createMarker, onMapClick, etc.

Is called inside of mapView.vue.



---

🌟 ToDo

✅ Databases for POIs, Quests, and users.

✅ Color coding map components.

✅ Navigation mode.

✅ Add POI search bar.

✅ Create questsExplore page.

✅ Expand homePage to include "Featured Quests", "Featured POIs", link to questsExplore, POI search bar, and link to user info.

✅ Refine UX/UI: Define color palettes and imagery style(in progress). Beautify layout. User testing.


---

🤝 Contributing
Want to help improve this project?

Fork the repository

Create a branch (feature-new-functionality)

Commit changes (git commit -m "Added new feature")

Push your branch (git push origin feature-new-functionality)

Submit a Pull Request 🎉

