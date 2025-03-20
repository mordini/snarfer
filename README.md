# 🌍 Snarfer App


---

## 🚀 Main front end files
1. **Splashy.vue**

The splash page. First thing users see if they aren't logged in.

Connects to login and user creation.


2. **homePage.vue**
   
Holds Featured Quests component(featuredQuests.vue in src/components), featured POIs, basic profile info(featuredProfile.vue in src/components), and navigation to all other main elements.

Connected to POI search, Quests search, mapView, profileView, catalog, and leaderboards.

3. **mapView.vue**

Displays a full-screen interactive map.

Uses Leaflet to load OpenStreetMap tiles.

Highly ranked users will gain the ability to click on a spot and request to create a POI there, or edit existing POIs. But changes must be approved by us? Or a council of some sort?

4. **useMap.js**

Defines JS functions for map interaction.

Imports many icons and maps them to categories of POIs. Has exportable functions like "addPOI", "updatePOI", "initializeMap", and "displayUserLocation".

Is called inside of mapView.vue.


---
**Next Up**
1. Proper databases for Users, POIs, and Quests.

3. Make a page to search for quests and a component that shows featured quests on the home page.

4. Restrict POI creation.

6. Add logbook.

7. Add leaderboard.

8. Test for all platforms.



---
**Questions/Ideas**
1. Users should be able to DM each other. 

2. Do we need an admin view? For creating quests, approving new POIs/POI edits, changing featured POIs and featured Quests, etc.

3. Markeroni had a blog. Is that a good idea here?

4. What security issues do we need to consider? How to counter each of them?

5. Is there an AI solution for verifying users' attendance at a POI? Perhaps via image recognition?


---


🤝 Contributing
Want to help improve this project?

Fork the repository

Create a branch (feature-new-functionality)

Commit changes (git commit -m "Added new feature")

Push your branch (git push origin feature-new-functionality)

Submit a Pull Request 🎉

