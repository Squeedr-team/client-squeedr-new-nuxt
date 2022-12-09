<template>
  <div>
    <tw-tabs :tabs='tabs'>
      <div>
        <div class='pt-3'>
          <div class='post-input'>
            <tw-text-area
              :rows='3'
              rounded
              class='w-full bg-transparent'
              placeholder='Please type what you want....'>
            </tw-text-area>
            <div class='flex flex-wrap py-4 gap-1'>
              <button class='bg-primary-100 hover:bg-primary hover:text-white lg:px-4 px-3 lg:py-4 py-2 rounded-2xl'>
                <font-awesome-icon icon='fa fa-link'>
                </font-awesome-icon>
              </button>
              <button class='bg-primary-100 hover:bg-primary hover:text-white lg:px-4 px-3 lg:py-4 py-2 rounded-2xl'>
                <font-awesome-icon icon='fa fa-camera'></font-awesome-icon>
              </button>
              <button class='bg-primary hover:bg-primary-700 text-white lg:px-7 px-4 lg:py-3 py-2 rounded-2xl'>
                Post
              </button>
            </div>
          </div>
          <div v-for='(post,idx) in 3' :key='idx' class='py-5'>
            <img
              :src='require("~/assets/images/profile/8.jpg")'
              alt=''
              class='max-w-full'>
            <nuxt-link to='#'>
              <h3 class='text-black xl:text-xl text-lg mt-3'>
                Collection of textile samples lay spread
              </h3>
            </nuxt-link>
            <p class='text-secondary-600 leading-7 mt-3 text-base xl:text-lg mb-6'>
              A wonderful serenity has take possession of my entire soul like these sweet
              morning of
              spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul
              like these sweet morning
              of spare which enjoy whole heart.
            </p>
            <button class='bg-primary hover:bg-primary-700 text-white lg:py-4 lg:px-7 px-4 py-2 rounded-2xl mr-2 text-sm lg:text-base'>
              <font-awesome-icon icon='fa fa-heart' class='mr-2'></font-awesome-icon>
              Like
            </button>
            <button
              class='bg-primary-900 hover:shadow-lg text-white lg:py-4 lg:px-7 px-4 py-2 rounded-2xl text-sm lg:text-base'
              @click='addModal=true'>
              <font-awesome-icon icon='fa fa-reply' class='mr-2'></font-awesome-icon>
              Reply
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class=''>
          <div class='pt-4 border-bottom-1 pb-3'>
            <h4 class='text-primary text-lg mb-1'>About Me</h4>
            <p class='mb-2 text-secondary-600 leading-7'>A wonderful serenity has taken possession of my entire soul, like these sweet
              mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of
              existence was created for the bliss of souls like mine.I am so happy, my dear friend, so
              absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</p>
            <p class='mb-2 text-secondary-600 leading-7'>A collection of textile samples lay spread out on the table - Samsa was a travelling
              salesman - and above it there hung a picture that he had recently cut out of an illustrated
              magazine and housed in a nice, gilded frame.</p>
          </div>
        </div>
        <div class='profile-skills mb-5'>
          <h4 class='text-primary text-lg mb-2'>Skills</h4>
          <button class='bg-primary-100 text-primary-900 hover:bg-primary hover:text-white rounded-2xl mb-1 px-3 py-2 text-sm'>Admin</button>
          <button class='bg-primary-100 text-primary-900 hover:bg-primary hover:text-white rounded-2xl mb-1 px-3 py-2 text-sm'>
            Dashboard
          </button>
          <button class='bg-primary-100 text-primary-900 hover:bg-primary hover:text-white rounded-2xl mb-1 px-3 py-2 text-sm'>
            Photoshop
          </button>
          <button class='bg-primary-100 text-primary-900 hover:bg-primary hover:text-white rounded-2xl mb-1 px-3 py-2 text-sm'>
            Bootstrap
          </button>
          <button class='bg-primary-100 text-primary-900 hover:bg-primary hover:text-white rounded-2xl mb-1 px-3 py-2 text-sm'>
            Responsive
          </button>
          <button class='bg-primary-100 text-primary-900 hover:bg-primary hover:text-white rounded-2xl mb-1 px-3 py-2 text-sm'>
            Crypto
          </button>
        </div>
        <div class='profile-lang  mb-5'>
          <h4 class='text-primary mb-2 text-lg'>Language</h4>
          <button class='text-secondary-600 pr-3 f-s-16'>English</button>
          <button class='text-secondary-600 pr-3 f-s-16'>French</button>
          <button class='text-secondary-600 pr-3 f-s-16'>Bangla</button>
        </div>
        <div class='profile-personal-info'>
          <h4 class='text-primary mb-4 text-lg'>Personal Information</h4>
          <div class='grid grid-cols-12 mb-2'>
            <div class='sm:col-span-3 col-span-5 pr-3 py-1'>
              <h5 class='font-semibold'>Name <span class='float-right'>:</span>
              </h5>
            </div>
            <div class='sm:col-span-9 col-span-7 px-3 py-1 text-secondary-600'><span>Mitchell C.Shay</span>
            </div>
          </div>
          <div class='grid grid-cols-12 mb-2'>
            <div class='sm:col-span-3 col-span-5 pr-3 py-1'>
              <h5 class='font-semibold'>Email <span class='float-right'>:</span>
              </h5>
            </div>
            <div class='sm:col-span-9 col-span-7 px-3 py-1 text-secondary-600'>
              <span>example@examplel.com</span>
            </div>
          </div>
          <div class='grid grid-cols-12 mb-2'>
            <div class='sm:col-span-3 col-span-5 pr-3 py-1'>
              <h5 class='font-semibold'>Availability <span class='float-right'>:</span>
              </h5>
            </div>
            <div class='sm:col-span-9 col-span-7 px-3 py-1 text-secondary-600'>
              <span>Full Time (Free Lancer)</span>
            </div>
          </div>
          <div class='grid grid-cols-12 mb-2'>
            <div class='sm:col-span-3 col-span-5 pr-3 py-1'>
              <h5 class='font-semibold'>Age <span class='float-right'>:</span>
              </h5>
            </div>
            <div class='sm:col-span-9 col-span-7 px-3 py-1 text-secondary-600'>
              <span>27</span>
            </div>
          </div>
          <div class='grid grid-cols-12 mb-2'>
            <div class='sm:col-span-3 col-span-5 pr-3 py-1'>
              <h5 class='font-semibold'>Location <span class='float-right'>:</span>
              </h5>
            </div>
            <div class='sm:col-span-9 col-span-7 px-3 py-1 text-secondary-600'>
              <span>Rosemont Avenue Melbourne, Florida</span>
            </div>
          </div>
          <div class='grid grid-cols-12 mb-2'>
            <div class='sm:col-span-3 col-span-5 pr-3 py-1'>
              <h5 class='font-semibold'>Year Experience <span class='float-right'>:</span>
              </h5>
            </div>
            <div class='sm:col-span-9 col-span-7 px-3 py-1 text-secondary-600'>
              <span>07 Year Experiences</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='pt-3'>
          <div class=''>
            <h4 class='text-primary text-lg'>Account Setting</h4>
            <ValidationObserver v-slot='{ invalid }'>
              <form
                class='grid gap-5 grid-cols-12'
                @submit.prevent='onSubmit'>
                <div class='sm:col-span-6 col-span-12'>
                  <ValidationProvider
                    v-slot='{ errors }'
                    name='email'
                    rules='required'>
                    <tw-input v-model='form.email' label='Email' :errors='errors' rounded placeholder='email'/>
                  </ValidationProvider>
                </div>
                <div class='sm:col-span-6 col-span-12'>
                  <ValidationProvider
                    v-slot='{ errors }'
                    name='password'
                    rules='required'>
                    <tw-input
                      v-model='form.password'
                      label='Password'
                      type='password'
                      :errors='errors'
                      rounded />
                  </ValidationProvider>
                </div>

                <div class='col-span-12'>
                  <ValidationProvider
                    v-slot='{ errors }'
                    name='address'
                    rules='required'>
                    <tw-input
                      v-model='form.address'
                      label='Address'
                      :errors='errors'
                      placeholder='Enter your address'
                      rounded>
                    </tw-input>
                  </ValidationProvider>
                </div>
                <div class='col-span-12'>
                    <tw-input
                      v-model='form.address2'
                      label='Address 2'
                      placeholder='Enter your address 2'
                      rounded>
                    </tw-input>
                </div>

                <div class='sm:col-span-5 col-span-12'>
                  <tw-input
                    v-model='form.city'
                    label='City'
                    rounded>
                  </tw-input>
                </div>
                <div class='sm:col-span-4 col-span-6'>
                  <tw-select
                    v-model='form.state'
                    label='State'
                    :options="[
                      {id:1,name:'California'}
                    ]"
                    item-text='name'
                    item-value='id'
                    rounded>
                  </tw-select>
                </div>
                <div class='sm:col-span-3 col-span-6'>
                  <tw-input
                    v-model='form.zip'
                    label='Zip'
                    rounded>
                  </tw-input>
                </div>
                <div class='col-span-12'>
                  <div class='custom-control mb-2'>
                    <input id='same-address' type='checkbox'>
                    <label class='text-secondary-600' for='same-address'>
                      Check me out
                    </label>
                  </div>
                </div>

                <div class='col-span-12'>
                  <button
                    :disabled='invalid'
                    class='bg-primary py-2 lg:py-3 text-lg md:text-xl rounded-2xl text-white px-5 hover:bg-primary-700'>
                    Sign In
                  </button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </tw-tabs>
    <Modal :show='addModal' @close='addModal=false'>
      <div class='flex justify-between border-b py-4 px-7'>
        <span class='font-semibold'>Post Reply</span>
        <font-awesome-icon icon='fa fa-close' class='cursor-pointer' @click='addModal=false' />
      </div>
      <div class='p-6'>
        <tw-text-area :rows='4' rounded placeholder='Message'>
        </tw-text-area>
      </div>
      <div class='flex justify-end border-t py-4 px-7'>
        <button
          class='bg-danger-100 hover:bg-danger hover:text-white text-danger lg:py-4 lg:px-7 px-4 py-2 rounded-2xl mr-2'>
          Close
        </button>
        <button
          class='bg-primary hover:bg-primary-700 text-white lg:py-4 lg:px-7 px-4 py-2 rounded-2xl'>
          Reply
        </button>
      </div>
    </Modal>

  </div>
</template>

<script>

import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  name: 'ProfileCard',
    components: {
      ValidationObserver,
      ValidationProvider
    },
  data() {
    return {
      addModal: false,
      form:{},
      tabs: [
        {
          label: 'Posts'
        },
        {
          label: 'About Me'
        },
        {
          label: 'Setting'
        }
      ]

    }
  },
  methods:{
    onSubmit(){

    }
  }
}
</script>

<style scoped>

</style>
