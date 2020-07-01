<template>
  <div id="workspaces-wrapper-column">
    <div id="workspaces-wrapper">
      <div id="workspaces">
        <div class="list">
          <a
            data-tenant-id="tenants/2537425154"
            data-tenant-host="mtlesportsacademy"
            data-href="https://app.stent.io/2537425154/"
            href="https://app.stent.io/2537425154/"
            class="name"
          >
            <span
              title="Académie eSports Montréal"
              style="background-color: rgba(136, 123, 181, 1);"
              class="initials"
              >AE</span
            >
            <span class="name">Académie eSports Montréal</span>
          </a>
          <a
            data-tenant-id="tenants/2250377376"
            data-tenant-host="acme"
            data-href="https://app.stent.io/2250377376/"
            href="https://app.stent.io/2250377376/"
            class="name"
          >
            <span
              title="ACME"
              style="background-color: rgba(130, 130, 136, 1);"
              class="initials"
              >AC</span
            >
            <span class="name">ACME</span>
          </a>
          <a
            data-tenant-id="tenants/2455767334"
            data-tenant-host="wawawoom"
            data-href="https://app.stent.io/2455767334/"
            href="https://app.stent.io/2455767334/"
            class="name"
          >
            <span
              title="wawawoom"
              style="background-color: rgba(108, 71, 112, 1);"
              class="initials"
              >WA</span
            >
            <span class="name">wawawoom</span>
          </a>
        </div>
      </div>
      <div id="search-and-admin-wrapper">
        <div id="search-workspace-wrapper">
          <span id="search-tenant">
            <img src="@/assets/img/search.svg" />
          </span>
          <input
            type="text"
            class="form-control search"
            id="filter-tenant"
            placeholder="Type a workspace name"
            autocomplete="off"
          />
          <button type="button" class="close" id="close-search">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div id="new-tenant-wrapper" style="display: flex;">
          <div class="icon">
            <img src="@/assets/img/plus.svg" />
          </div>
          <span class="create-tenant-title">Create workspace</span>
        </div>
        <router-link
          to="/workspaces"
          id="go-to-admin-wrapper"
          style="display: flex;"
        >
          <div class="icon">
            <img src="@/assets/img/admin.svg" />
          </div>
          <span class="goto-admin-title">Administration</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
