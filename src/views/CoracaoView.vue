<template>
  <AnatomiaCoracao/>
  <v-btn
      color="warning"
      class="ma-4"
      @click="$router.push('/dash')"
      >
      voltar
  </v-btn>
</template>

<script>
import AnatomiaCoracao from '../components/AnatomiaCoracao.vue'
export default {
 components: {
    AnatomiaCoracao

 }
}
</script>

<style>

</style>