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
      <data-table :data='data' :columns='columns' :actions='actions' :index='false' selectable />
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
      data: [
        {
          first_name: 'Antonio',
          last_name: 'Okoro',
          email: 'cheezytony1@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address:'2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Naruto',
          last_name: 'Uzumaki',
          email: 'narutouzumaki@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address:'2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Sasuke',
          last_name: 'Uchiha',
          email: 'sasukeuchiha@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address:'2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Rock',
          last_name: 'Lee',
          email: 'rocklee@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address:'2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Neji',
          last_name: 'Hyuga',
          email: 'nejihyuga@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address:'2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Shikamaru',
          last_name: 'Nara',
          email: 'shikamarunara@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address:'2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Shikamaru',
          last_name: 'Nara',
          email: 'shikamarunara@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address:'2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Shikamaru',
          last_name: 'Nara',
          email: 'shikamarunara@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address:'2392 Main Avenue, Penasauka'
        },
        {
          first_name: 'Shikamaru',
          last_name: 'Nara',
          email: 'shikamarunara@gmail.com',
          joined: '30/03/2018',
          phone: '(201) 200-1851',
          billing_Address:'2392 Main Avenue, Penasauka'
        },

      ],

      // Columns that should be displayed on The Table
      columns: [
        {
          name: 'first_name', th: 'First Name', render(row, cell, index) {
            // Parse date and display difference
            return '<div class=\'flex items-center\'><img width=\'30px\' height=\'30px\' src=\'https://picsum.photos/80/80\' ' +
              `class='rounded-full bg-gray-200' /> <span class='ml-2 font-semibold whitespace-nowrap'>${row.first_name + ' ' + row.last_name}</span></div>`
          }
        },
        { name: 'email', sortable: true, th: 'Email Address' },
        { name: 'phone', th: 'Phone Number' },
        { name: 'billing_Address', th: 'Billing Address' },
        { name: 'joined', th: 'Joined'},
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
  }
}
</script>

<style scoped>

</style>
