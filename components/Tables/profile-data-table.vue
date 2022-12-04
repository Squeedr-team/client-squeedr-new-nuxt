<template>
  <div class='bg-white rounded-2xl sm:m-5 m-3'>
    <div class='border-b lg:py-6 lg:px-6 px-4 py-5 text-xl font-semibold'>Profile Datatable</div>
    <div class='p-4 lg:p-6'>
      <data-table :data='data' :headers='headers' bordered :stripe='false'>
        <template #cell(image)='{ item }'>
          <div class='flex items-center'>
            <img
              width='35px' height='35px' :src='item.image'
              class='rounded-full bg-gray-200' />
          </div>
        </template>
        <template #cell(mobile)='{ item }'>
          <a :href='item.mobile' class='font-semibold text-secondary-600'>
            {{ item.mobile }}
          </a>
        </template>
        <template #cell(email)='{ item }'>
          <a :href='item.email' class='font-semibold text-secondary-600'>
            {{ item.email }}
          </a>
        </template>
        <template #cell(action)='{  }'>
          <div class='flex items-center'>
            <button class='bg-primary rounded-full text-xs w-7 h-7 text-white shadow-lg'>
              <font-awesome-icon icon='fa fa-pencil' />
            </button>
            <button class='bg-danger rounded-full text-xs w-7 h-7 text-white shadow-lg ml-1'>
              <font-awesome-icon icon='fa fa-trash' />
            </button>
          </div>
        </template>
      </data-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileDataTable',
  data() {
    return {
      data: [
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000',
          email: 'info@example.com',
          mobile: '123 456 7890',
          education: 'M.COM., P.H.D.',
          gender: 'Male',
          department: 'Architect',
          image: require('~/assets/images/tab1.jpg')
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000',
          email: 'info@example.com',
          mobile: '123 456 7890',
          education: 'M.COM., P.H.D.',
          gender: 'Male',
          department: 'Architect',
          image: require('~/assets/images/tab1.jpg')
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000',
          email: 'info@example.com',
          mobile: '123 456 7890',
          education: 'M.COM., P.H.D.',
          gender: 'Male',
          department: 'Architect',
          image: require('~/assets/images/tab1.jpg')
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000',
          email: 'info@example.com',
          mobile: '123 456 7890',
          education: 'M.COM., P.H.D.',
          gender: 'Male',
          department: 'Architect',
          image: require('~/assets/images/tab1.jpg')
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000',
          email: 'info@example.com',
          mobile: '123 456 7890',
          education: 'M.COM., P.H.D.',
          gender: 'Male',
          department: 'Architect',
          image: require('~/assets/images/tab1.jpg')
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000',
          email: 'info@example.com',
          mobile: '123 456 7890',
          education: 'M.COM., P.H.D.',
          gender: 'Male',
          department: 'Architect',
          image: require('~/assets/images/tab1.jpg')
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000',
          email: 'info@example.com',
          mobile: '123 456 7890',
          education: 'M.COM., P.H.D.',
          gender: 'Male',
          department: 'Architect',
          image: require('~/assets/images/tab1.jpg')
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000',
          email: 'info@example.com',
          mobile: '123 456 7890',
          education: 'M.COM., P.H.D.',
          gender: 'Male',
          department: 'Architect',
          image: require('~/assets/images/tab1.jpg')
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000',
          email: 'info@example.com',
          mobile: '123 456 7890',
          education: 'M.COM., P.H.D.',
          gender: 'Male',
          department: 'Architect',
          image: require('~/assets/images/tab1.jpg')
        },
        {
          name: 'Angelica Ramos',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          joined: '30/03/2018',
          salary: '$1,200,000',
          email: 'info@example.com',
          mobile: '123 456 7890',
          education: 'M.COM., P.H.D.',
          gender: 'Male',
          department: 'Architect',
          image: require('~/assets/images/tab1.jpg')
        }

      ],
      headers: [
        {
          name: 'image',
          th: '',
          sortable: false,
          thStyle: { width: '40px' },
          thClass: 'text-black',
          tdClass: 'whitespace-nowrap'
        },
        {
          name: 'name',
          th: 'Name',
          sortable: true,
          thStyle: { width: '164px' },
          thClass: 'text-black',
          tdClass: 'whitespace-nowrap'
        },
        { name: 'department', sortable: true, th: 'Department', thStyle: { width: '196px' }, thClass: 'text-black' },
        { name: 'gender', th: 'Gender', sortable: true, thStyle: { width: '78px' }, thClass: 'text-black' },
        {
          name: 'education',
          th: 'Education',
          sortable: true,
          thStyle: { width: '155px' },
          thClass: 'text-black',
          tdClass: 'whitespace-nowrap'
        },
        { name: 'mobile', th: 'Mobile', sortable: true, thStyle: { width: '132px' }, thClass: 'text-black' },
        { name: 'email', th: 'email', sortable: true, thStyle: { width: '180px' }, thClass: 'text-black' },
        {
          name: 'joined',
          th: 'Start Date',
          sortable: true,
          thStyle: { width: '130px' },
          thClass: 'text-black whitespace-nowrap'
        },
        { name: 'action', th: 'Action', sortable: false, thStyle: { width: '70px' }, thClass: 'text-black' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
