<template>
  <div class="col">
    <div class="header">
      <div class="header-body">
        <div class="row align-items-end">
          <div class="col">
            <h6 class="header-pretitle">{{ pretitle }}</h6>
            <h1 class="header-title">{{ title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
