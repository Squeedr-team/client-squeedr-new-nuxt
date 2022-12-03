<template>
  <div>
    <Breadcumb
      class='sm:p-5 p-2'
      :routes='[
                 {name:"Email",path:"#"},
                 {name:"Inbox",path:"/email/inbox"},
               ]'
    />
    <div class='bg-white rounded-2xl sm:m-5 m-3 px-3 py-5 sm:p-5 flex flex-wrap shadow-sm'>

      <div class='email-left-box px-0 mb-3'>
        <div class='p-0'>
          <button class='w-full rounded-2xl bg-primary hover:bg-primary-700 py-3 text-white font-semibold'>
            Compose
          </button>
        </div>
        <div class='mail-list mt-4 '>
          <button class='w-full bg-primary flex justify-between items-center py-3 px-4 border'>
            <div class='text-white'>
              <font-awesome-icon icon='fa fa-inbox' class='fa fa-inbox mr-2' />
              <span class='font-semibold'>Inbox</span>
            </div>

            <span class='bg-primary text-white rounded-3xl text-xs p-1'>198</span>
          </button>
          <button class='w-full flex justify-between items-center py-3 px-4 border border-t-0'>
            <div class='text-secondary-600'>
              <font-awesome-icon icon='fa fa-paper-plane' class='fa fa-inbox mr-2 text-secondary-300' />
              <span class='font-semibold '>Sent</span>
            </div>
          </button>
          <button class='w-full flex justify-between items-center py-3 px-4 border border-t-0'>
            <div class='text-secondary-600'>
              <font-awesome-icon icon='fa fa-star' class='fa fa-inbox mr-2 text-secondary-300' />
              <span class='font-semibold'>Important</span>
            </div>
            <span class='bg-pink-600 text-white rounded-3xl text-xs py-1 px-2'>24</span>
          </button>
          <button class='w-full flex justify-between items-center py-3 px-4 border border-t-0'>
            <div class='text-secondary-600'>
              <font-awesome-icon icon='fa fa-table-list' class='fa fa-inbox mr-2 text-secondary-300' />
              <span class='font-semibold'>Draft</span>
            </div>
          </button>
          <button class='w-full flex justify-between items-center py-3 px-4 border border-t-0'>
            <div class='text-secondary-600'>
              <font-awesome-icon icon='fa fa-trash' class='fa fa-inbox mr-2 text-secondary-300' />
              <span class='font-semibold'>Trash</span>
            </div>
          </button>
        </div>
        <div class='intro-title flex justify-between bg-primary-100 py-2 px-3 mt-5 mb-4'>
          <h5>Categories</h5>
          <font-awesome-icon icon='fa fa-chevron-down'></font-awesome-icon>
        </div>
        <div class='mail-list mt-4'>
          <button class='w-full flex justify-between items-center py-3 px-4 border'>
            <div class='text-secondary-600'>
              <font-awesome-icon icon='fa fa-circle' class='fa fa-inbox mr-2 text-secondary-300' />
              <span class='font-semibold'>Work</span>
            </div>
          </button>
          <button class='w-full flex justify-between items-center py-3 px-4 border border-t-0'>
            <div class='text-secondary-600'>
              <font-awesome-icon icon='fa fa-circle' class='fa fa-inbox mr-2 text-secondary-300' />
              <span class='font-semibold'>Private</span>
            </div>
          </button>
          <button class='w-full flex justify-between items-center py-3 px-4 border border-t-0'>
            <div class='text-secondary-600'>
              <font-awesome-icon icon='fa fa-circle' class='fa fa-inbox mr-2 text-secondary-300' />
              <span class='font-semibold'>Support</span>
            </div>
          </button>
          <button class='w-full flex justify-between items-center py-3 px-4 border border-t-0'>
            <div class='text-secondary-600'>
              <font-awesome-icon icon='fa fa-circle' class='fa fa-inbox mr-2 text-secondary-300' />
              <span class='font-semibold'>Social</span>
            </div>
          </button>
        </div>
      </div>
      <div class='email-right-box flex-1'>
        <div class='flex items-center md:px-5 px-3'>
          <div class='m-1'>
            <div class='custom-control custom-checkbox pl-2'>
              <input id='checkAll' type='checkbox' class='custom-control-input'>
              <label class='custom-control-label' for='checkAll'></label>
            </div>
          </div>
          <div class='m-1'>
            <button class='bg-primary-100 hover:bg-primary hover:text-white px-4 py-3 rounded-2xl' type='button'>
              <font-awesome-icon icon='fa fa-refresh'></font-awesome-icon>
            </button>
          </div>
          <div class='m-1'>
            <VDropdown
              placement='bottom-start'
              :delay='{ show: 300, hide: 0 }'
              class='no-arrow'
            >
              <button class='bg-primary-100 hover:bg-primary hover:text-white px-4 py-3 rounded-2xl'
              >
                More
                <font-awesome-icon icon='fa fa-chevron-down' class='text-sm'></font-awesome-icon>
              </button>

              <template #popper>
                <div class='w-40 flex-col flex items-start rounded-2xl'>
                  <button class='text-dustTxtColor hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'>
                    Mark as Unread
                  </button>
                  <button class='text-dustTxtColor hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'>
                    Add to Tasks
                  </button>
                  <button class='text-dustTxtColor hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'>
                    Add Star
                  </button>
                  <button class='text-dustTxtColor hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'>
                    Mute
                  </button>
                </div>
              </template>
            </VDropdown>
          </div>
        </div>
        <div class='email-list md:p-5 p-3'>
          <div v-for='(email,idx) in 10' :key='idx' class='flex message-single hover:bg-secondary-100'>
            <div>
              <div class='flex items-center'>
                <div class='custom-control custom-checkbox px-2 '>
                  <input type='checkbox' class='custom-control-input'>
                  <label class='custom-control-label' for='checkAll'></label>
                </div>
                <button  class='text-secondary-600 mx-1'>
                  <font-awesome-icon icon='fa fa-star'></font-awesome-icon>
                </button>
              </div>
              <a class='justify-between items-baseline  email'>
                <div class='text-secondary-600 subject'>
                  <div class='ellipsis-text'>
                    Ingredia Nutrisha, A collection of textile samples lay spread out on the table -
                    Samsa was a travelling salesman - and above it there hung a picture
                  </div>

                </div>
                <div class='text-secondary-600 date'>11:49 am</div>
              </a>
            </div>
        </div>
      </div>
      <Pagination :current-page='1' :page-size='1' :total-count='100' :sibling-count='1' class='mt-4' />
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Inbox',
  layout: 'dashboardLayout'
}
</script>

<style scoped lang='scss'>
.email-left-box {
  width: 15rem;
  min-width: 15rem;
  padding: 0 1.25rem 1.25rem 1rem;
  border-top: 0;
  border-left: 0;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
}

.message-single {
  position: relative;
  display: block;
  height: 3.125rem;
  line-height: 3.125rem;
  cursor: default;
  transition-duration: 0.3s;

  .email {
    position: absolute;
    top: 0;
    left: 5.625rem;
    right: 0;
    bottom: 0;
    .subject{
      position: absolute;
      top: 0;
      left: 0;
      right: 5.5rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .date {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}

</style>
