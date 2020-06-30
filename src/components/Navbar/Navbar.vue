<template>
  <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-dark" id="sidebar">
    <div class="container-fluid">
      <NavbarHeader />
      <NavLinkList />
      <WorkspaceNavbar />
    </div>
  </nav>
</template>

<script>
import NavbarHeader from "./NavbarHeader";
import NavLinkList from "./NavLinkList";
import WorkspaceNavbar from "./WorkspaceNavbar";

export default {
  name: "Layout",
  components: { NavbarHeader, NavLinkList, WorkspaceNavbar }
};
</script>

<style>
</style>