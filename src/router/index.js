import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import EmployeeView from "../views/EmployeeView.vue";
import AdminView from "../views/AdminView.vue";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/employee",
      name: "employee",
      component: EmployeeView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useAuthStore();

  if (to.meta.requiresAuth && !store.user.isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
