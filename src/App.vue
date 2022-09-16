<template>
  <v-app>
    <v-main>
      <NavHeader :info="login"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavHeader from './components/commons/NavHeader.vue';


export default {
  name: 'App',

  components: {
    NavHeader,
  },

  data() {
    return {
      login: null
    }
  },

  mounted() {
    this.login = sessionStorage.getItem('login')
    console.log('Login aqui', this.login)

    if (this.login == null) {
      this.$router.push('/')
    }
  }
}
</script>
