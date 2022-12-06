<template>
  <div>
    <Breadcumb
      class='sm:p-5 p-2'
      :routes='[
                 {name:"App",path:"#"},
                 {name:"Profile",path:"/user/profile"},
               ]'
    />
    <div class='sm:m-5 m-3 p-3 sm:p-5'>
      <div class='flex'>
        <div class='lg:w-full bg-white px-4 py-4 rounded-2xl'>
          <div class='profile-card'>
            <div class='cover-photo' :style='{backgroundImage:`url(${user.cover})`}'>
            </div>
            <div class='py-4 px-5 flex'>
              <div class='profile-photo'>
                <img :src='user.profile' class='rounded-full shadow-md border' alt=''>
              </div>
              <div class='flex flex-1'>
                <div class='px-3 pt-2'>
                  <h4 class='text-primary mb-0 text-lg'>Mitchell C. Shay</h4>
                  <p class='text-secondary-600'>UX / UI Designer</p>
                </div>
                <div class='px-2 pt-2'>
                  <h4 class='text-lg mb-0'>info@example.com</h4>
                </div>
                <div class='ml-auto'>
                  <VDropdown
                    placement='bottom-end'
                    :delay='{ show: 300, hide: 100 }'
                  >
                    <button
                      class='rounded-full w-10 h-10 bg-primary-100 hover:bg-primary hover:text-white xl:rounded-2xl more-button'
                    >
                      <font-awesome-icon icon='fa fa-ellipsis-h' class='xl:text-lg md:text-md text-sm' />
                    </button>

                    <template #popper>
                      <div class='w-52 flex-col flex items-start'>
                        <button
                          type='button'
                          class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                        >
                          <font-awesome-icon icon='fa fa-user-circle' class='mr-1' />
                          View profile
                        </button>
                        <button
                          type='button'
                          class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                        >
                          <font-awesome-icon icon='fa fa-users' class='mr-1' />
                          Add to close friends
                        </button>
                        <button
                          type='button'
                          class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                        >
                          <font-awesome-icon icon='fa fa-plus' class='mr-1' />
                          Add to group
                        </button>
                        <button
                          type='button'
                          class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                        >
                          <font-awesome-icon icon='fa fa-ban' class='mr-1' />
                          Block
                        </button>
                      </div>
                    </template>
                  </VDropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='grid grid-cols-12 gap-8 mt-5'>
        <div class='col-span-4'>
          <div class='bg-white px-4 xl:px-8 py-4 xl:py-8 rounded-2xl h-full'>
            <div class='grid grid-cols-3 text-center'>
              <div class='col-span-1'>
                <h3 class='text-2xl'>150</h3>
                <span class='text-secondary-600 text-sm'>Follower</span>
              </div>
              <div class='col-span-1'>
                <h3 class='text-2xl'>140</h3><span class='text-secondary-600 text-sm'>Place Stay</span>
              </div>
              <div class='col-span-1'>
                <h3 class='text-2xl'>45</h3><span class='text-secondary-600 text-sm'>Reviews</span>
              </div>
            </div>
            <div class='mt-4 text-center'>
              <button
                class='bg-primary hover:bg-primary-700 mb-1 mr-1 rounded-2xl py-2 xl:py-3 text-white px-5 text-sm xl:text-lg'>
                Follow
              </button>
              <button
                class='bg-primary hover:bg-primary-700 mb-1 mr-1 rounded-2xl py-2 xl:py-3 text-white px-5 text-sm xl:text-lg'
                @click='addModal=true'>
                Send Message
              </button>
            </div>
            <Modal :show='addModal' @close='addModal=false'>
              <div class='flex justify-between border-b py-4 px-7'>
                <span class='font-semibold'>Send Message</span>
                <font-awesome-icon icon='fa fa-close' class='cursor-pointer' @click='addModal=false' />
              </div>
              <div class='p-6'>
                <div class='grid grid-cols-2 gap-5'>
                  <div class='col-span-1'>
                    <tw-input label='Name*' placeholder='Author' rounded class='mb-5'>
                    </tw-input>
                  </div>
                  <div class='col-span-1'>
                    <tw-input label='Email*' placeholder='Email' rounded class='mb-5'>
                    </tw-input>
                  </div>
                  <div class='col-span-2'>
                    <tw-text-area label='Comment' placeholder='Comment' rounded class='mb-5' :rows='7'>
                    </tw-text-area>
                  </div>
                </div>

                <button
                  class='bg-primary hover:bg-primary-700  rounded-2xl py-2 xl:py-3 text-white px-5 text-sm xl:text-lg'>
                  Post Comment
                </button>
              </div>
            </Modal>
            <div class='flex justify-between mt-10'>
              <h5 class='text-primary'>
                Today Highlights
              </h5>
              <a class='text-secondary-600'>More</a>
            </div>
            <div class=''>
              <div v-for='(item,idx) in user.highlights' :key='idx' class='mb-5'>

                <img :src='item.image' alt='' class='mt-4 mb-4 w-full'>
                <h4>
                  <nuxt-link to='#' class='text-black text-lg mb-2'>{{ item.title }}</nuxt-link>
                </h4>
                <p class='mb-0 text-secondary-600 leading-7'>{{ item.description }}</p>
              </div>


              <div class='mb-5'>
                <h5 class='text-primary'>Interest</h5>
                <div class='grid grid-cols-3 mt-4 gap-1'>
                  <nuxt-link
                    v-for='(item,i_idx) in user.interests'
                    :key="'interest'+i_idx"
                    to='#'
                    class='col-span-1'>
                    <img :src='item.image' alt=''>
                  </nuxt-link>
                </div>
              </div>
              <div class=''>
                <h5 class='text-primary d-inline'>Our Latest News</h5>
                <div
                  v-for='(item,n_idx) in user.news'
                  :key="'news'+n_idx"
                  class='flex pt-3 pb-3'>
                  <img :src='item.image' alt='image' class='mr-3 rounded-2xl' width='75'>
                  <div class='media-body'>
                    <h5>
                      <nuxt-link to='#' class='text-black text-lg mb-3'>
                        {{ item.title }}
                      </nuxt-link>
                    </h5>
                    <p class='text-secondary-600 leading-7'>
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='col-span-8'>
          <div class='bg-white px-4 xl:px-8 py-4 xl:py-8 rounded-2xl'>
            <profile-card/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'dashboardLayout',
  data() {
    return {
      addModal: false,
      user: {
        cover: require('~/assets/images/profile/cover.jpg'),
        profile: require('~/assets/images/profile/profile.png'),
        name: 'Mitchell C. Shay',
        job: 'UX / UI Designer',
        email: 'info@example.com',
        follower: 150,
        stay: 140,
        reviews: 45,
        interests: [
          { image: require('~/assets/images/profile/2.jpg') },
          { image: require('~/assets/images/profile/2.jpg') },
          { image: require('~/assets/images/profile/2.jpg') },
          { image: require('~/assets/images/profile/2.jpg') },
          { image: require('~/assets/images/profile/2.jpg') },
          { image: require('~/assets/images/profile/2.jpg') }
        ],
        posts: [
          {
            title: 'Collection of textile samples lay spread',
            description: 'A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.',
            image: require('~/assets/images/profile/8.jpg')
          },
          {
            title: 'Collection of textile samples lay spread',
            description: 'A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.',
            image: require('~/assets/images/profile/8.jpg')
          }
        ],
        highlights: [
          {
            title: 'Darwin Creative Agency Theme',
            description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
            image: require('~/assets/images/profile/1.jpg')
          }
        ],
        news: [
          {
            title: 'Collection of textile samples',
            description: 'I shared this on my fb wall a few months back, and I thought.',
            image: require('~/assets/images/profile/5.jpg')
          },
          {
            title: 'Collection of textile samples',
            description: 'I shared this on my fb wall a few months back, and I thought.',
            image: require('~/assets/images/profile/5.jpg')
          },
          {
            title: 'Collection of textile samples',
            description: 'I shared this on my fb wall a few months back, and I thought.',
            image: require('~/assets/images/profile/5.jpg')
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.profile-card {
  .cover-photo {
    background-size: cover;
    background-position: center;
    min-height: 250px;
    width: 100%;
    background-repeat: no-repeat;
  }

  .profile-photo {
    max-width: 100px;
    position: relative;
    z-index: 1;
    margin-top: -40px;
    margin-right: 10px;
  }
}
</style>
