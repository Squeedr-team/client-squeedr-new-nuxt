<template>
  <div>
    <Breadcumb
      class='sm:p-5 p-2'
      :routes='[
                 {name:"Shop",path:"#"},
                 {name:"Customers",path:"/customers"},
               ]'
    />
    <div class='bg-white rounded-2xl sm:m-5 m-3 p-3 sm:p-5'>
      <data-table :data='data' :headers='headers' client>
        <template #head(select)='{  }'>
          <label class='custom-control'>
            <input type='checkbox' class='custom-control-input' @change='selectAll'>
          </label>
        </template>
        <template #cell(select)='{ item }'>
          <label class='custom-control'>
            <input
              v-model='selected' type='checkbox' class='custom-control-input'
              :value='item.email'>
          </label>
        </template>
        <template #cell(name)='{ item }'>
          <div class='flex items-center'>
            <img
              width='30px' height='30px' src='https://picsum.photos/80/80'
              class='rounded-full bg-gray-200' />
            <span class='ml-2 font-semibold whitespace-nowrap'>
              {{ item.first_name + ' ' + item.last_name }}</span>
          </div>
        </template>
        <template #cell(actions)='{ item }'>
          <VDropdown
            placement='bottom-end'
            :delay='{ show: 300, hide: 100 }'
          >
            <button
              class='rounded-full w-10 h-10 hover:bg-primary-100 xl:rounded-2xl more-button'
            >
              <font-awesome-icon icon='fa fa-ellipsis-h' class='xl:text-lg md:text-base text-sm' />
            </button>

            <template #popper>
              <div class='w-32 flex-col flex items-start'>
                <button
                  type='button'
                  class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                  @click='console.log(item.email)'
                >
                  Edit
                </button>
                <button
                  type='button'
                  class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                  @click='console.log(item.email)'
                >
                  Delete
                </button>
              </div>
            </template>
          </VDropdown>
        </template>
      </data-table>
    </div>
  </div>

</template>

<script>
import DataTable from '~/components/ui/DataTable'

export default {
  name: 'Customers',
  components: { DataTable },
  layout: 'dashboardLayout',
  data() {
    return {
      selected: [],
      data: [
        {
          first_name: 'Antonio',
          last_name: 'Okoro',
          email: 'cheezytony1@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address: '2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Naruto',
          last_name: 'Uzumaki',
          email: 'narutouzumaki@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address: '2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Sasuke',
          last_name: 'Uchiha',
          email: 'sasukeuchiha@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address: '2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Rock',
          last_name: 'Lee',
          email: 'rocklee@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address: '2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Neji',
          last_name: 'Hyuga',
          email: 'nejihyuga@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address: '2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Shikamaru',
          last_name: 'Nara',
          email: 'shikamarunara@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address: '2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Shikamaru',
          last_name: 'Nara',
          email: 'shikamarunara@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address: '2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Shikamaru',
          last_name: 'Nara',
          email: 'shikamarunara@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address: '2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Shikamaru',
          last_name: 'Nara',
          email: 'shikamarunara@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address: '2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Shikamaru',
          last_name: 'Nara',
          email: 'shikamarunara@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address: '2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Shikamaru',
          last_name: 'Nara',
          email: 'shikamarunara@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address: '2392 Main Avenue, Penasauka'
        }

      ],

      // Columns that should be displayed on The Table
      headers: [
        { name: 'select', th: '' },
        {
          name: 'name', th: 'Name'
        },
        { name: 'email', sortable: true, th: 'Email Address' },
        { name: 'phone', th: 'Phone Number' },
        { name: 'billing_Address', th: 'Billing Address' },
        { name: 'joined', th: 'Joined' },
        { name: 'actions', th: '' }
      ]
    }
  },
  methods: {
    selectAll() {
      if (this.selected.length > 0) {
        this.selected = []
      } else {
        this.selected = this.data.map(i => i.email)
      }
    }
  }
}
</script>

<style scoped>

</style>
