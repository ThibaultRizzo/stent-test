<template>
  <div class="col">
    <div class="header">
      <div class="header-body">
        <div class="row align-items-end">
          <div class="d-inline-flex" v-if="logo">
            <img
              class="ws-logo--l"
              src="@/assets/img/avatars/teams/team-logo-1.jpg"
              alt="A logo"
            />
          </div>
          <div class="col container-fluid">
            <h6 class="header-pretitle" v-if="pretitle">{{ pretitle }}</h6>
            <h1 class="header-title">{{ title }}</h1>
          </div>
          <div class="d-inline-flex">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String
    },
    pretitle: {
      type: String
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style></style>
