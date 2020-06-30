<template>
  <div id="navigation-header">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#sidebarCollapse"
      aria-controls="sidebarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a href="https://app.stent.io/2311456874/" id="current-workspace-avatar">
      <div
        style="background-image:url('https://stentcdn.s3.amazonaws.com/resources/Logo-512x512.png');"
        id="workspace-logo"
      ></div>
    </a>
    <div id="workspace-and-user-wrapper">
      <div id="workspace-name">Stent.io</div>
      <div id="user-wrapper" class="dropdown">
        <img
          id="user-avatar"
          src="@/assets/img/avatars/profiles/avatar-1.jpg"
          class="avatar dropdown-toggle"
          data-toggle="dropdown"
          onerror="this.onerror=null;this.src='/assets/img/avatars/profiles/default-avatar.gif'"
          :alt="fullName"
        />
        <div id="user-name">{{ fullName }}</div>
        <a
          href="https://app.stent.io/2311456874/apps#"
          class="dropdown-toggle flex-row align-items-center"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          id="arrow-sign-out"
        ></a>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="sidebarIconCopy"
        >
          <a
            href="https://app.stent.io/sign-out.html?tenantKey=2311456874"
            class="dropdown-item"
            id="sign-out-link"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["currentUser"]),
    ...mapGetters(["fullName"])
  }
};
</script>

<style></style>
