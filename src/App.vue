<template>
  <div>
    <RouterLink to="/profile">
      profile
    </RouterLink>
  </div>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<style></style>
