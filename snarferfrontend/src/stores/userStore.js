import { defineStore } from 'pinia';
import defaultProfilePic from '@/assets/defaultProfile.png';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    currentUser: JSON.parse(localStorage.getItem('current_user')) || null,
    allUsers: JSON.parse(localStorage.getItem('all_users')) || [],
  }),
  actions: {
    createUser(username, password) {
      if (this.allUsers.some(user => user.username === username)) {
        throw new Error('Username already exists!');
      }

      const newUser = {
        id: Date.now(),
        username,
        password, // Store hashed password in the future
        level: 1,
        badges: [],
        leaderboardPosition: 999,
        poisCreated: 0,
        poisEdited: 0,
        questsCompleted: 0,
        profilePic: defaultProfilePic,
        masteredLocations: 0,
        logbook: {}, // Dictionary to store multiple long strings
      };

      this.allUsers.push(newUser);
      localStorage.setItem('all_users', JSON.stringify(this.allUsers));
    },

    loginUser(username, password) {
      const user = this.allUsers.find(user => user.username === username && user.password === password);
      if (!user) throw new Error('Invalid username or password.');

      this.currentUser = user;
      localStorage.setItem('current_user', JSON.stringify(user));
    },

    logoutUser() {
      this.currentUser = null;
      localStorage.removeItem('current_user');
    },

    levelUpUser() {
      this.currentUser.level++;
    },

    addBadgeToUser(badge) {
      this.currentUser.badges.push(badge);
    },

    updateLeaderboardPosition(newPosition) {
      this.currentUser.leaderboardPosition = newPosition;
    },

    incrementPoisCreated() {
      this.currentUser.poisCreated++;
    },

    incrementPoisEdited() {
      this.currentUser.poisEdited++;
    },

    incrementQuestsCompleted() {
      this.currentUser.questsCompleted++;
    },

    updateProfilePic(newPic) {
      this.currentUser.profilePic = newPic;
    },

    incrementMasteredLocations() {
      this.currentUser.masteredLocations++;
    },

    addToLogbook(key, value) {
      if (this.currentUser.logbook[key]) {
        this.currentUser.logbook[key] += value;
      } else {
        this.currentUser.logbook[key] = value;
      }
    },
  }
});
