<template>
  <div>

    <VDropdown
      placement='bottom-end'
      :delay='{ show: 300, hide: 100 }'
    >
      <button class='cursor-pointer flex items-center text-left'>
        <img
          src='https://picsum.photos/80/80'
          class='rounded-full bg-gray-200 w-11 lg:w-14 h-11 lg:h-14'
          alt='user' />
        <div class='ml-3 hidden sm:block'>
          <div class='font-semibold'>Peter Parker</div>
          <div class='text-xs text-dustTxtColor'>Super admin</div>
        </div>
      </button>

      <template #popper>
        <div class='w-40 flex-col flex items-start'>
          <button
            type='button'
            class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
            @click="$router.push('/user/profile')"
          >
            <font-awesome-icon icon='fa fa-user' class='mr-1' />
            Profile
          </button>
          <button
            type='button'
            class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
          >
            <font-awesome-icon icon='fa fa-inbox' class='mr-1 text-success' />
            Inbox
          </button>
          <button
            type='button'
            class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
          >
            <font-awesome-icon icon='fa fa-arrow-right-from-bracket' class='mr-1 text-danger' />
            Logout
          </button>
        </div>
      </template>
    </VDropdown>
  </div>
</template>

<script>
export default {
  name: 'AppProfile'
}
</script>

<style scoped>

</style>
