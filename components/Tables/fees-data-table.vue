<template>
  <div class='bg-white rounded-2xl sm:m-5 m-3'>
    <div class='border-b lg:py-6 lg:px-6 px-4 py-5 text-xl font-semibold'>Fees Datatable</div>
    <div class='p-4 lg:p-6'>
      <data-table :data='data' :headers='headers' bordered :stripe='false' client>
        <template #cell(amount)='{ item }'>
          <div class='font-semibold text-black'>
            ${{ item.amount }}
          </div>
        </template>
        <template #cell(status)='{ item }'>
          <div class='flex'>
            <div
              v-if='item.status'
              class='rounded-2xl px-3 py-1 capitalize text-center text-sm font-semibold'
              :class='`bg-${item.variant}-100 text-${item.variant}`'>
              {{ item.status }}
            </div>
          </div>
        </template>
      </data-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeesDataTable',
  data() {
    return {
      data: [
        {
          roll_no: '01',
          name: 'Brielle Williamson',
          invoice_number: '#54605',
          fees_type: 'Library',
          payment_type: 'Cash',
          status: 'paid',
          variant: 'success',
          date: '2011/04/25',
          amount: 120
        },
        {
          roll_no: '01',
          name: 'Brielle Williamson',
          invoice_number: '#54605',
          fees_type: 'Library',
          payment_type: 'Cash',
          status: 'pending',
          variant: 'warning',
          date: '2011/04/25',
          amount: 120
        },
        {
          roll_no: '01',
          name: 'Brielle Williamson',
          invoice_number: '#54605',
          fees_type: 'Library',
          payment_type: 'Cash',
          status: 'unpaid',
          variant: 'danger',
          date: '2011/04/25',
          amount: 120
        },
        {
          roll_no: '01',
          name: 'Brielle Williamson',
          invoice_number: '#54605',
          fees_type: 'Library',
          payment_type: 'Cash',
          status: 'paid',
          variant: 'success',
          date: '2011/04/25',
          amount: 120
        },
        {
          roll_no: '01',
          name: 'Brielle Williamson',
          invoice_number: '#54605',
          fees_type: 'Library',
          payment_type: 'Cash',
          status: 'unpaid',
          variant: 'danger',
          date: '2011/04/25',
          amount: 120
        },
        {
          roll_no: '01',
          name: 'Brielle Williamson',
          invoice_number: '#54605',
          fees_type: 'Library',
          payment_type: 'Cash',
          status: 'paid',
          variant: 'success',
          date: '2011/04/25',
          amount: 120
        },
        {
          roll_no: '01',
          name: 'Brielle Williamson',
          invoice_number: '#54605',
          fees_type: 'Library',
          payment_type: 'Cash',
          status: 'paid',
          variant: 'success',
          date: '2011/04/25',
          amount: 120
        },
        {
          roll_no: '01',
          name: 'Brielle Williamson',
          invoice_number: '#54605',
          fees_type: 'Library',
          payment_type: 'Cash',
          status: 'paid',
          variant: 'success',
          date: '2011/04/25',
          amount: 120
        },
        {
          roll_no: '01',
          name: 'Brielle Williamson',
          invoice_number: '#54605',
          fees_type: 'Library',
          payment_type: 'Cash',
          status: 'paid',
          variant: 'success',
          date: '2011/04/25',
          amount: 120
        },
        {
          roll_no: '01',
          name: 'Brielle Williamson',
          invoice_number: '#54605',
          fees_type: 'Library',
          payment_type: 'Cash',
          status: 'paid',
          variant: 'success',
          date: '2011/04/25',
          amount: 120
        },
        {
          roll_no: '01',
          name: 'Brielle Williamson',
          invoice_number: '#54605',
          fees_type: 'Library',
          payment_type: 'Cash',
          status: 'paid',
          variant: 'success',
          date: '2011/04/25',
          amount: 120
        },
        {
          roll_no: '01',
          name: 'Brielle Williamson',
          invoice_number: '#54605',
          fees_type: 'Library',
          payment_type: 'Cash',
          status: 'paid',
          variant: 'success',
          date: '2011/04/25',
          amount: 120
        }
      ],
      headers: [
        {
          name: 'roll_no',
          th: 'Roll No',
          sortable: true,
          thStyle: { width: '100px' },
          thClass: 'text-black whitespace-nowrap'
        },
        {
          name: 'name',
          sortable: true,
          th: 'Student Name',
          thStyle: { width: '200px' },
          thClass: 'text-black whitespace-nowrap',
          tdClass: 'whitespace-nowrap'
        },
        {
          name: 'invoice_number',
          th: 'Invoice number',
          sortable: true,
          thStyle: { width: '200px' },
          thClass: 'text-black whitespace-nowrap'
        },
        {
          name: 'fees_type',
          th: 'Fees Type',
          sortable: true,
          thStyle: { width: '135px' },
          thClass: 'text-black whitespace-nowrap'
        },
        {
          name: 'payment_type',
          th: 'Payment Type',
          sortable: true,
          thStyle: { width: '180px' },
          thClass: 'text-black whitespace-nowrap'
        },
        { name: 'status', th: 'Status', sortable: true, thStyle: { width: '120px' }, thClass: 'text-black' },
        { name: 'date', th: 'Date', sortable: true, thStyle: { width: '120px' }, thClass: 'text-black' },
        { name: 'amount', th: 'Amount', sortable: true, thStyle: { width: '100px' }, thClass: 'text-black' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
