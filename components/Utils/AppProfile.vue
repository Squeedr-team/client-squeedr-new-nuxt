<template>
  <div>
    <div class='cursor-pointer flex items-center'>
      <img
        src='https://picsum.photos/80/80'
        class='rounded-full bg-gray-200 w-11 lg:w-14 h-11 lg:h-14'
        alt='user' />
      <div class='ml-3 hidden sm:block'>
        <div class='font-semibold'>Peter Parker</div>
        <div class='text-xs text-dustTxtColor'>Super admin</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppProfile'
}
</script>

<style scoped>

</style>
