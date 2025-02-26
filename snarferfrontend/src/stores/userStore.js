import { defineStore } from 'pinia';

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
        password, // Store hashed password in real implementation
        rank: 1,
        completedQuests: [],
        questsInProgress: [],
        poisCreated: [],
        poisEdited: [],
        leaderboardPosition: null,
        badges: [],
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
  }
});
