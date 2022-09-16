<template>
<div class="ma-5">
    <v-row>
        <v-col cols="12"><h1>Nomenclatura dos músculos esqueléticos</h1></v-col>
        <v-col md="4" cols="12">
            <v-img
                class="bg-white borda-card"
                width="400"
                :aspect-ratio="1"
                src="https://static.todamateria.com.br/upload/55/77/55771934478af-musculos-do-corpo-humano.jpg?auto_optimize=low"
                height="566"
                cover
            ></v-img>
        </v-col>

        <v-col md="8" cols="12">
            <v-img
                class="bg-white borda-card"
                width="675"
                :aspect-ratio="1"
                src="https://pt-static.z-dn.net/files/d64/16664fbc696124351257242ec89112a3.gif"
                height="566"
                cover
            ></v-img>
        </v-col>
    </v-row>
</div>
  
</template>

<script>
export default {

}
</script>

<style>
.borda-card {
    border-style: groove;
}
</style>