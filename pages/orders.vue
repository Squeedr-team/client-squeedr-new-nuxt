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
      <data-table :data='data' :columns='columns' :actions='actions' :index='false' selectable :stripe='false'/>
    </div>
  </div>

</template>

<script>
import DataTable from '~/components/ui/DataTable'

const getButton = (row) => {
  return `<div class='flex justify-end'><div class='rounded-2xl px-3 py-1 capitalize text-center text-sm font-semibold' style='background: ${row.status.bg_color};color:${row.status.text_color}'>
${row.status.stat} <font-awesome-icon icon='fa fa-star'/>
</div></div>`
}
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

      // Columns that should be displayed on The Table
      columns: [
        {
          name: 'order', th: 'Order', render(row, cell, index) {
            // Parse date and display difference
            return `<div><span class='text-secondary-400 mr-1 font-semibold'>#${row.order_no}</span>by<span class='text-secondary-400 ml-1 font-semibold'>${row.user_name}</span><br/>${row.email}</div>`
          }
        },
        { name: 'date', th: 'Date' },
        { name: 'billing_Address', th: 'Ship To' },
        {
          name: 'status', th: 'Status', render(row, cell, index) {
            return getButton(row)
          }
        },
        {
          name: 'amount', th: 'amount', render(row, cell, index) {
            return '<div class="text-right">$' + row.amount + '</div>'
          }
        }
      ],
      actions: [
        {
          text: 'Edit', color: 'primary', action: (row, index) => {
            alert(`about to edit ${row.first_name} ${row.last_name}`)
          }
        },
        {
          text: 'Delete', color: 'danger', action: (row, index) => {
            alert(`about to delete ${row.first_name} ${row.last_name}`)
          }
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
