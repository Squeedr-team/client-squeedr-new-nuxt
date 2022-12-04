<template>
  <div class='bg-white rounded-2xl sm:m-5 m-3'>
    <div class='border-b lg:py-6 lg:px-6 text-xl font-semibold'>Basic Datatable</div>
    <div class='p-3 lg:p-6'>
      <data-table :data='data' :headers='headers' bordered :stripe='false'>
      </data-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicDataTable',
  data() {
    return {
      data: [
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000'
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000'
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000'
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000'
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000'
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000'
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000'
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000'
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000'
        }

      ],
      headers: [
        {
          name: 'name', th: 'Name', sortable: true, thStyle: { width: '247px' }, thClass: 'text-black'
        },
        { name: 'position', sortable: true, th: 'Position', thStyle: { width: '394px' }, thClass: 'text-black' },
        { name: 'office', th: 'Office', sortable: true, thStyle: { width: '189px' }, thClass: 'text-black' },
        { name: 'age', th: 'Age', sortable: true, thStyle: { width: '89px' }, thClass: 'text-black' },
        { name: 'joined', th: 'Start Date', sortable: true, thStyle: { width: '167px' }, thClass: 'text-black' },
        { name: 'salary', th: 'Salary', sortable: true, thStyle: { width: '150px' }, thClass: 'text-black' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
