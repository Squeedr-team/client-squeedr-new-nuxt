<template>
  <div>
    <Breadcumb
      class='sm:p-5 p-2'
      :routes='[
                 {name:"Shop",path:"#"},
                 {name:"Orders",path:"/orders"},
               ]'
    />
    <div class='bg-white rounded-2xl sm:m-5 m-3 p-3 sm:p-5'>
      <data-table :data='data' :headers='headers' :stripe='false' bordered>
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
        <template #cell(order)='{ item }'>
          <div><span class='text-secondary-400 mr-1 font-semibold'>#{{ item.order_no }}</span>by
            <span class='text-secondary-400 ml-1 font-semibold'>{{ item.user_name }}</span><br />
            {{ item.email }}
          </div>
        </template>
        <template #cell(amount)='{ item }'>
          <div class='text-right'>${{ item.amount }}</div>
        </template>
        <template #cell(status)='{ item }'>
          <div class='flex justify-end'>
            <div
              class='rounded-2xl px-3 py-1 capitalize text-center text-sm font-semibold'
              :style='{background: item.status.bg_color,color:item.status.text_color}'>
              {{ item.status.stat }}
              <font-awesome-icon v-if='item.status.stat==="on hold"' icon='fa fa-ban' />
              <font-awesome-icon v-else-if='item.status.stat==="completed"' icon='fa fa-check' />
            </div>
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
              <font-awesome-icon icon='fa fa-ellipsis-h' class='xl:text-lg md:text-md text-sm' />
            </button>

            <template #popper>
              <div class='w-32 flex-col flex items-start'>
                <button
                  type='button'
                  class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                  @click='console.log(item.email)'
                >
                  Completed
                </button>
                <button
                  type='button'
                  class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                  @click='console.log(item.email)'
                >
                  Processing
                </button>
                <button
                  type='button'
                  class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                  @click='console.log(item.email)'
                >
                  On Hold
                </button>
                <button
                  type='button'
                  class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                  @click='console.log(item.email)'
                >
                  Pending
                </button>
                <button
                  type='button'
                  class='text-red-600 border-t hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
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
  name: 'Orders',
  components: { DataTable },
  layout: 'dashboardLayout',

  data() {
    return {
      data: [
        {
          order_no: '181',
          user_name: 'Antonio Okoro',
          email: 'cheezytony1@gmail.com',
          date: '30/03/2018',
          amount: 99,
          status: {
            bg_color: '#2BC155',
            text_color: 'white',
            stat: 'completed'
          },
          billing_Address: 'Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149 Via Flat Rate'
        },
        {
          order_no: '181',
          user_name: 'Antonio Okoro',
          email: 'cheezytony1@gmail.com',
          date: '30/03/2018',
          amount: 99,
          status: {
            bg_color: '#0B2A97',
            text_color: 'white',
            stat: 'processing'
          },
          billing_Address: 'Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149 Via Flat Rate'
        },
        {
          order_no: '181',
          user_name: 'Antonio Okoro',
          email: 'cheezytony1@gmail.com',
          date: '30/03/2018',
          amount: 99,
          status: {
            bg_color: '#A02CFA',
            text_color: 'white',
            stat: 'on hold'
          },
          billing_Address: 'Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149 Via Flat Rate'

        },
        {
          order_no: '181',
          user_name: 'Antonio Okoro',
          email: 'cheezytony1@gmail.com',
          date: '30/03/2018',
          amount: 99,
          status: {
            bg_color: '#FFBC11',
            text_color: '#212529',
            stat: 'pending'
          },
          billing_Address: 'Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149 Via Flat Rate'

        }


      ],
      selected: [],
      // Columns that should be displayed on The Table
      headers: [
        { name: 'select', th: '' },
        {
          name: 'order', th: 'Order'
        },
        { name: 'date', th: 'Date' },
        { name: 'billing_Address', th: 'Ship To' },
        {
          name: 'status', th: 'Status', thClass: 'text-right'
        },
        {
          name: 'amount', th: 'amount', thClass: 'text-right'
        },
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
