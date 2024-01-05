import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = reactive()({
    username: "admin",
    password: "admin",
    isAuthenticated: false,
  });

  return { user };
});
