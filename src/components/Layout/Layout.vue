<template>
  <div>
    <Navbar />

    <transition name="slide-left">
      <div class="main-content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
export default {
  name: "Layout",
  components: { Navbar }
};
</script>
