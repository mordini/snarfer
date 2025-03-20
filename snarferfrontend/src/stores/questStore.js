import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useUserStore } from '@/stores/userStore';

export const useQuestStore = defineStore('questStore', () => {
  const userStore = useUserStore();

  // 🏆 All possible quests
  const allQuests = ref([
    {
      id: 1,
      name: "Explorer's Path",
      type: "visit_locations",
      locations: ["poi_1", "poi_2", "poi_3"], // IDs of POIs
      progress: [],
      completed: false,
    },
    {
      id: 2,
      name: "Master of the Streets",
      type: "master_area",
      requiredMasteries: 3, // Needs to master 3 locations
      progress: 0,
      completed: false,
    },
    {
      id: 3,
      name: "Leaderboard Climber",
      type: "leaderboard_rank",
      targetRank: 10,
      completed: false,
    },
    {
      id: 4,
      name: "Support Local Business",
      type: "buy_item",
      storeId: "store_123",
      completed: false,
    },
  ]);

  // 📝 Quests that the user has started
  const activeQuests = ref(
    JSON.parse(localStorage.getItem('active_quests')) || []
  );

  // ✅ Completed quests
  const completedQuests = computed(() =>
    activeQuests.value.filter((quest) => quest.completed)
  );

  // 📌 Watch for quest progress and update localStorage
  watch(activeQuests, (newQuests) => {
    localStorage.setItem('active_quests', JSON.stringify(newQuests));
  }, { deep: true });

  // 🎯 Start a new quest
  function startQuest(questId) {
    const quest = allQuests.value.find(q => q.id === questId);
    if (!quest) return;
    
    // Avoid duplicate quest tracking
    if (activeQuests.value.some(q => q.id === questId)) return;

    activeQuests.value.push({ ...quest });
  }

  // 🏅 Mark a quest as completed
  function completeQuest(questId) {
    const quest = activeQuests.value.find(q => q.id === questId);
    if (quest && !quest.completed) {
      quest.completed = true;
      userStore.incrementQuestsCompleted(); // Award progress to user
    }
  }

  // 🚀 Update progress for a specific quest type
  function updateQuestProgress(questId, data) {
    const quest = activeQuests.value.find(q => q.id === questId);
    if (!quest || quest.completed) return;

    switch (quest.type) {
      case "visit_locations":
        if (!quest.progress.includes(data.locationId)) {
          quest.progress.push(data.locationId);
        }
        if (quest.progress.length >= quest.locations.length) {
          completeQuest(questId);
        }
        break;

      case "master_area":
        quest.progress = userStore.currentUser.masteredLocations;
        if (quest.progress >= quest.requiredMasteries) {
          completeQuest(questId);
        }
        break;

      case "leaderboard_rank":
        if (userStore.currentUser.leaderboardPosition <= quest.targetRank) {
          completeQuest(questId);
        }
        break;

      case "buy_item":
        if (data.storeId === quest.storeId) {
          completeQuest(questId);
        }
        break;

      default:
        console.warn("Unknown quest type:", quest.type);
    }
  }

  return {
    allQuests,
    activeQuests,
    completedQuests,
    startQuest,
    completeQuest,
    updateQuestProgress,
  };
});
