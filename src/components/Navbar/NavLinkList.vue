<template>
  <div class="collapse navbar-collapse" id="sidebarCollapse">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/home" class="nav-link ui-link">
          <i class="fe fe-home"></i> Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/users"
          data-toggle="collapse"
          role="button"
          aria-controls="sidebarUsers"
        >
          <i class="fe fe-users"></i> Team
        </router-link>
        <div class="collapse" id="sidebarUsers">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <a
                href="https://app.stent.io/2311456874/members"
                class="nav-link ui-link"
                >Members</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://app.stent.io/2311456874/dashboard-user"
                class="nav-link ui-link"
                >Dashboard</a
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/contacts"
          data-toggle="collapse"
          role="button"
          aria-controls="sidebarContacts"
        >
          <i class="fe fe-target"></i> Audience
        </router-link>
        <div class="collapse" id="sidebarContacts">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <a
                href="https://app.stent.io/2311456874/finder-list"
                class="nav-link ui-link"
                >Finders</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://app.stent.io/2311456874/contacts"
                class="nav-link ui-link"
                >Contacts</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://app.stent.io/2311456874/segments-list"
                class="nav-link ui-link"
                >Segments</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://app.stent.io/2311456874/funnel"
                class="nav-link ui-link"
                >Funnel</a
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/campaigns"
          data-toggle="collapse"
          role="button"
          aria-controls="sidebarDashboards"
        >
          <i class="fe fe-send"></i> Campaigns
        </router-link>
        <div class="collapse" id="sidebarCampaigns">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <a
                href="https://app.stent.io/2311456874/campaign-list-nurture-linkedin-cohort"
                class="nav-link ui-link"
                >Invites</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://app.stent.io/2311456874/campaign-list-nurture-linkedin-segment"
                class="nav-link ui-link"
                >Nurtures</a
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/newsfeed"
          data-toggle="collapse"
          role="button"
          aria-controls="sidebarNewsfeed"
        >
          <i class="fe fe-file-text"></i> Content
        </router-link>
        <div class="collapse" id="sidebarNewsfeed">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <a
                href="https://app.stent.io/2311456874/tenant-media-list"
                class="nav-link ui-link"
                >Media</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://app.stent.io/2311456874/tenant-planification"
                class="nav-link ui-link"
                >Calendar</a
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <hr class="navbar-divider my-3" />
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/settings"
          data-toggle="collapse"
          role="button"
          aria-controls="errorsMenu"
          aria-expanded="true"
        >
          <i class="fe fe-settings"></i> Settings
        </router-link>
        <div class="collapse show" id="settingsMenu">
          <ul class="nav nav-sm flex-column">
            <li class="nav-item">
              <router-link to="/settings/apps" class="nav-link ui-link"
                >Apps</router-link
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
