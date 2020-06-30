import Vue from "vue";
import Router from "vue-router";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import TeamPage from "@/pages/team/TeamPage";
import AudiencePage from "@/pages/audience/AudiencePage";
import CampaignsPage from "@/pages/campaigns/CampaignsPage";
import ContentPage from "@/pages/content/ContentPage";
import SettingsPage from "@/pages/settings/SettingsPage";
import AppSettings from "@/pages/settings/AppSettings";

Vue.use(Router);

export default new Router({
  mode: "hash",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/home",
      name: "Dashboard",
      component: DashboardPage,
    },
    {
      path: "/users",
      name: "Team",
      component: TeamPage,
    },
    {
      path: "/contacts",
      name: "Audience",
      component: AudiencePage,
    },
    {
      path: "/campaigns",
      name: "Campaigns",
      component: CampaignsPage,
    },
    {
      path: "/newsfeed",
      name: "Content",
      component: ContentPage,
    },
    {
      path: "/settings",
      name: "Settings",
      component: SettingsPage,
    },
    {
      path: "/settings/apps",
      name: "App Settings",
      component: AppSettings,
    },
    {
      // will match everything
      path: "*",
      redirect: "/settings/apps",
    },
  ],
});
