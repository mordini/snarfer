import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import defaultProfilePic from '@/assets/defaultProfile.png';

export const useUserStore = defineStore('userStore', () => {
  // Reactive State
  const currentUser = ref(JSON.parse(localStorage.getItem('current_user')) || null);
  const allUsers = ref(JSON.parse(localStorage.getItem('all_users')) || []);

  // Getters (Computed Properties)
  const isLoggedIn = computed(() => !!currentUser.value);
  const userLevel = computed(() => currentUser.value?.level || 1);
  const userBadges = computed(() => currentUser.value?.badges || []);
  const isAdmin = computed(() => currentUser.value?.isAdmin || false);
  
  // Watchers: Automatically update localStorage when currentUser changes
  watch(currentUser, (newUser) => {
    localStorage.setItem('current_user', JSON.stringify(newUser));
  }, { deep: true });

  // Actions
  function createUser(username, password) {
    if (allUsers.value.some(user => user.username === username)) {
      throw new Error('Username already exists!');
    }

    const newUser = {
      id: Date.now(),
      username,
      password, // TODO: Hash password for security
      isAdmin: false,
      level: 1,
      badges: [],
      leaderboardPosition: 999,
      poisCreated: 0,
      poisEdited: 0,
      questsCompleted: 0,
      profilePic: defaultProfilePic,
      masteredLocations: 0,
      logbook: {},
    };

    allUsers.value.push(newUser);
    localStorage.setItem('all_users', JSON.stringify(allUsers.value));
  }

  function loginUser(username, password) {
    const user = allUsers.value.find(user => user.username === username && user.password === password);
    if (!user) throw new Error('Invalid username or password.');

    currentUser.value = user;
  }

  function logoutUser() {
    currentUser.value = null;
    localStorage.removeItem('current_user');
    
  }
  

  function levelUpUser() {
    if (!currentUser.value) return;
    currentUser.value.level++;
  }

  function addBadgeToUser(badge) {
    if (!currentUser.value) return;
    currentUser.value.badges.push(badge);
  }

  function updateLeaderboardPosition(newPosition) {
    if (!currentUser.value) return;
    currentUser.value.leaderboardPosition = newPosition;
  }

  function incrementPoisCreated() {
    if (!currentUser.value) return;
    currentUser.value.poisCreated++;
  }

  function incrementPoisEdited() {
    if (!currentUser.value) return;
    currentUser.value.poisEdited++;
  }

  function incrementQuestsCompleted() {
    if (!currentUser.value) return;
    currentUser.value.questsCompleted++;
  }

  function updateProfilePic(newPic) {
    if (!currentUser.value) return;
    currentUser.value.profilePic = newPic;
  }

  function incrementMasteredLocations() {
    if (!currentUser.value) return;
    currentUser.value.masteredLocations++;
  }

  function addToLogbook(key, value) {
    if (!currentUser.value) return;
    if (currentUser.value.logbook[key]) {
      currentUser.value.logbook[key] += value;
    } else {
      currentUser.value.logbook[key] = value;
    }
  }

  return {
    // State
    currentUser,
    allUsers,

    // Getters
    isLoggedIn,
    userLevel,
    userBadges,

    // Actions
    createUser,
    loginUser,
    logoutUser,
    levelUpUser,
    addBadgeToUser,
    updateLeaderboardPosition,
    incrementPoisCreated,
    incrementPoisEdited,
    incrementQuestsCompleted,
    updateProfilePic,
    incrementMasteredLocations,
    addToLogbook,
  };
});
