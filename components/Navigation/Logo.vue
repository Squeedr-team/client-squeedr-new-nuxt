<template>
  <div class="flex justify-center logo items-center">
    <img v-if="open && !isMobile" :src="require('~/assets/icons/logo.svg')" class="h-14" alt=''/>
    <img :src="require('~/assets/icons/logoTxt.svg')" class="h-8 sm:h-10" alt=''/>
    </div>
</template>

<script>
    export default {
        name: "Logo",
        props: {
            open: {
                default: true,
                type: Boolean
            },
            isMobile: {
                default: false,
                type: Boolean
            }
        },
    }
</script>

<style scoped>
  .logoImg{
    font-size: 32px;
  }

</style>
