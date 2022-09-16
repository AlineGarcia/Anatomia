<template>
  <div class="text-center">
    <div class="img-fundo"></div>
    <br>
    <h1>Anatomia Humana</h1>
    <h2>Nós viemos para facilitar seus estudos anatômicos</h2>

    <v-btn
      variant="outlined"
      color="primary"
      class="px-15 mt-4"
      @click="$router.push('/cadastro')"
    >
      <v-icon class="mx-2" size="small">fa-solid fa-user-plus</v-icon>
      Cadastre-se
    </v-btn>
  </div>

  <FooterHome/>
</template>

<script>
import FooterHome from '../components/commons/FooterHome.vue'
export default {
  components: {
    FooterHome
  }
}
</script>

<style>
.img-fundo {
  width: 100%;
  height: 480px;
  background-image: url('https://www.kenhub.com/thumbor/0cYHMn020ZdJ5vYlsY2ZygV7AD0=/images/landing_page/pt/imagens-anatomia/GChDM0u8YWH6DLYltLiA_faces.png');
  background-position: center;
  background-size: contain;
}
</style>