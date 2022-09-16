<template>
  <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <div>
          <img class="rounded-circle mx-2 mt-1" width="60" height="60" src="https://media.istockphoto.com/vectors/anatomy-logo-vector-icon-design-vector-id660540530" alt="">
        </div>

        <v-app-bar-title>Anatomia Humana</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn v-if="info == null" @click="$router.push('/login')" variant="text">
          <v-icon class="mx-2" size="small">fa-regular fa-user</v-icon>
          Login
        </v-btn>

        <div @click="deslogar()" variant="text" class="mr-3" v-else>
          <v-btn>
            Sair
          </v-btn>

          <strong>{{info}}</strong>
        </div>

  </v-app-bar>
</template>

<script>
export default {
  props: {
    info: String
  },
  methods: {
    deslogar() {
      sessionStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>