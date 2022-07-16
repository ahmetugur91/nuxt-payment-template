<template>
  <v-app dark>
    <v-main>
      <v-container class="fill-height" fluid>
        <Nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
    }
  }
}
</script>

<style>
.v-main {
  background: linear-gradient(90deg,#292929,#de3f4d 0,#901f80 53%);;
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>
