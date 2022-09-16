<template>
  <v-row>
    <v-col class="mt-4 text-center" cols="12">
        <h1 class="border-title">Agora você já pode começar a estudar anatomia!</h1>
        <h2>Sabia que a palavra anatomia vem do grego "cortar em partes" ?</h2>
        <br>

    </v-col>
    <v-col class="mt-5">
        <v-card
            class="mx-auto borda-card"
            max-width="344"
        >
            <div class="d-flex">
                <v-img 
                    class="ma-auto"
                    src="../assets/caveroso.png"
                    width="320"
                    height="318"
                ></v-img>
            </div>

            <v-card-title>
            Anatomia dos ossos e esqueleto
            </v-card-title>

            <v-card-subtitle>
            Os 206 ossos que compõe o esqueleto.
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                color="orange-lighten-2"
                variant="text"
                @click="$router.push('/ossos')"
            >
                Estude 
            </v-btn>

            <v-spacer></v-spacer>

            </v-card-actions>
        </v-card>
    </v-col>

    <v-col class="mt-5">
        <v-card
            class="mx-auto borda-card"
            max-width="344"
        >
            <div class="d-flex">
                <v-img
                    class="ma-auto"
                    src="https://images.vexels.com/media/users/3/141930/isolated/lists/2ed42771cb75bb544a24633f91e33e16-anatomia-do-sistema-muscular-corpo-humano.png"
                    height="320"
                    width="386"
                    cover
                ></v-img>
            </div>

            <v-card-title>
            Anatomia dos Músculos
            </v-card-title>

            <v-card-subtitle>
            Há em média 600 músculos no corpo!  
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                color="orange-lighten-2"
                variant="text"
                @click="$router.push('/musculos')"
            >
                Estude
            </v-btn>

            <v-spacer></v-spacer>

            </v-card-actions>
        </v-card>
    </v-col>

    <v-col class="mt-5">
        <v-card
            class="mx-auto borda-card"
            max-width="344"
        >
            <div class="d-flex">
                <v-img
                    src="../assets/orgaos_anatomia-removebg-preview.png"
                    class="ma-auto"
                    height="320px"
                    width="300"
                    cover
                ></v-img>
            </div>

            <v-card-title>
            Anatomia do Coração 
            </v-card-title>

            <v-card-subtitle>
            Nosso órgão que bombeia sangue!
            </v-card-subtitle>

            <v-card-actions>
            <v-row>
                <v-col cols="6">
                    <v-btn
                    color="orange-lighten-2"
                    variant="text"
                    @click="$router.push('coracao')"
                    >
                        Estude
                    </v-btn>
                </v-col>
            </v-row>
            <v-spacer></v-spacer>

            </v-card-actions>
        </v-card>
    </v-col>

    <br>

    <v-col cols="12">
        <v-btn
        color="warning"
        class="pa-2 mx-auto ml-5"
        @click="$router.push('/')"
        >
            Voltar
        </v-btn>
    </v-col>

  </v-row>
</template>

<script>
export default {

}
</script>

<style>
.borda-card {
    border-right-width: medium;
}
</style>