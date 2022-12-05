<template>
  <div class='bg-white rounded-2xl sm:m-5 m-3'>
    <div class='border-b lg:py-6 lg:px-6 px-4 py-5 text-xl font-semibold'>Patient Datatable</div>
    <div class='p-4 lg:p-6'>
      <data-table :data='data' :headers='headers' bordered :stripe='false' client>
        <template #head(select)='{  }'>
          <label class='custom-control'>
            <input type='checkbox' class='custom-control-input' @change='selectAll'>
          </label>
        </template>
        <template #cell(select)='{ item }'>
          <label class='custom-control'>
            <input
              v-model='selected' type='checkbox' class='custom-control-input'
              :value='item.order_id'>
          </label>
        </template>
        <template #cell(status)='{ item }'>
          <div class='flex'>
            <div
              v-if='item.status'
              class='rounded-2xl px-3 py-1 capitalize text-center text-sm font-semibold'
              :class='`bg-${item.variant}-100 text-${item.variant}`'>
              <font-awesome-icon icon='fa fa-circle' class='mr-1'/>
              {{ item.status }}
            </div>
          </div>
        </template>
        <template #cell(actions)='{ item }'>
          <div class='text-center'>
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
              <div class='w-52 flex-col flex items-start'>
                <button
                  type='button'
                  class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                  @click='console.log(item.order_id)'
                >
                  Accept Patient
                </button>
                <button
                  type='button'
                  class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                  @click='console.log(item.order_id)'
                >
                  Reject Order
                </button>
                <button
                  type='button'
                  class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                  @click='console.log(item.order_id)'
                >
                  View Details
                </button>
              </div>
            </template>
          </VDropdown>
          </div>
        </template>
      </data-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatentDataTable',
  data() {
    return {
      selected:[],
      data: [
        {
          order_id: '#P-00001',
          name: 'Brielle Williamson',
          check_in: '26/02/2020, 12:42 AM',
          fees_type: 'Library',
          assigned: 'Dr. Cedric',
          disease: 'Cold & Flu',
          variant: 'danger',
          status:'New Patient',
          table: 'AB-001',
        },
        {
          order_id: '#P-00002',
          name: 'Brielle Williamson',
          check_in: '26/02/2020, 12:42 AM',
          fees_type: 'Library',
          assigned: 'Dr. Cedric',
          disease: 'Cold & Flu',
          variant: 'warning',
          status:'In Treatment',
          table: 'AB-001',
        },
        {
          order_id: '#P-00003',
          name: 'Brielle Williamson',
          check_in: '26/02/2020, 12:42 AM',
          fees_type: 'Library',
          assigned: 'Dr. Cedric',
          disease: 'Cold & Flu',
          variant: 'success',
          status:'Recover',
          table: 'AB-001',
        },
        {
          order_id: '#P-00004',
          name: 'Brielle Williamson',
          check_in: '26/02/2020, 12:42 AM',
          fees_type: 'Library',
          assigned: 'Dr. Cedric',
          disease: 'Cold & Flu',
          variant: 'success',
          status:'Recover',
          table: 'AB-001',
        },
        {
          order_id: '#P-00005',
          name: 'Brielle Williamson',
          check_in: '26/02/2020, 12:42 AM',
          fees_type: 'Library',
          assigned: 'Dr. Cedric',
          disease: 'Cold & Flu',
          variant: 'success',
          status:'Recover',
          table: 'AB-001',
        },
        {
          order_id: '#P-00006',
          name: 'Brielle Williamson',
          check_in: '26/02/2020, 12:42 AM',
          fees_type: 'Library',
          assigned: 'Dr. Cedric',
          disease: 'Cold & Flu',
          variant: 'success',
          status:'Recover',
          table: 'AB-001',
        },
        {
          order_id: '#P-00007',
          name: 'Brielle Williamson',
          check_in: '26/02/2020, 12:42 AM',
          fees_type: 'Library',
          assigned: 'Dr. Cedric',
          disease: 'Cold & Flu',
          variant: 'success',
          status:'Recover',
          table: 'AB-001',
        },
        {
          order_id: '#P-00008',
          name: 'Brielle Williamson',
          check_in: '26/02/2020, 12:42 AM',
          fees_type: 'Library',
          assigned: 'Dr. Cedric',
          disease: 'Cold & Flu',
          variant: 'success',
          status:'Recover',
          table: 'AB-001',
        },
        {
          order_id: '#P-00009',
          name: 'Brielle Williamson',
          check_in: '26/02/2020, 12:42 AM',
          fees_type: 'Library',
          assigned: 'Dr. Cedric',
          disease: 'Cold & Flu',
          variant: 'success',
          status:'Recover',
          table: 'AB-001',
        },
        {
          order_id: '#P-00010',
          name: 'Brielle Williamson',
          check_in: '26/02/2020, 12:42 AM',
          fees_type: 'Library',
          assigned: 'Dr. Cedric',
          disease: 'Cold & Flu',
          variant: 'success',
          status:'Recover',
          table: 'AB-001',
        },
        {
          order_id: '#P-00011',
          name: 'Brielle Williamson',
          check_in: '26/02/2020, 12:42 AM',
          fees_type: 'Library',
          assigned: 'Dr. Cedric',
          disease: 'Cold & Flu',
          variant: 'success',
          status:'Recover',
          table: 'AB-001',
        }
      ],
      headers: [
        {
          name: 'select',
          th: '',
          thStyle: { width: '45px' },
          thClass: 'text-black whitespace-nowrap'
        },
        {
          name: 'order_id',
          th: 'Order ID',
          sortable: true,
          thStyle: { width: '100px' },
          thClass: 'text-black whitespace-nowrap'
        },
        {
          name: 'check_in',
          th: 'Date Check In',
          sortable: true,
          thStyle: { width: '220px' },
          thClass: 'text-black whitespace-nowrap',
          tdClass: 'whitespace-nowrap'
        },
        {
          name: 'name',
          sortable: true,
          th: 'Name',
          thStyle: { width: '150px' },
          thClass: 'text-black whitespace-nowrap',
          tdClass: 'whitespace-nowrap'
        },
        {
          name: 'assigned',
          th: 'Assigned',
          sortable: true,
          thStyle: { width: '110px' },
          thClass: 'text-black whitespace-nowrap',
          tdClass: 'whitespace-nowrap'
        },
        {
          name: 'disease',
          th: 'Disease',
          sortable: true,
          thStyle: { width: '150px' },
          thClass: 'text-black whitespace-nowrap',
          tdClass: 'whitespace-nowrap'
        },
        { name: 'status', th: 'Status', sortable: true, thStyle: { width: '180px' }, thClass: 'text-black' },
        {
          name: 'table',
          th: 'Table no',
          sortable: true,
          thStyle: { width: '100px' },
          thClass: 'text-black whitespace-nowrap'
        },
        { name: 'actions', th: 'Action', sortable: true, thStyle: { width: '85px' }, thClass: 'text-black' }
      ]
    }
  },
  methods:{
    selectAll() {
      if (this.selected.length > 0) {
        this.selected = []
      } else {
        this.selected = this.data.map(i => i.order_id)
      }
    }
  }
}
</script>

<style scoped>

</style>
