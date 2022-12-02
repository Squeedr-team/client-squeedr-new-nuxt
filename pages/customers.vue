<template>
  <div class='bg-white rounded-2xl p-5 m-5'>
    <data-table :data='data' :columns='columns' :actions='actions' :index="false" selectable/>
  </div>
</template>

<script>
    import moment from 'moment'
    import DataTable from '~/components/ui/DataTable'

    export default {
        name: 'Customers',
        components: {DataTable},
        layout: 'dashboardLayout',
        data() {
            return {
                data: [
                    {
                        first_name: 'Antonio',
                        last_name: 'Okoro',
                        email: 'cheezytony1@gmail.com',
                        date_of_birth: '1998-05-15'
                    },
                    {
                        first_name: 'Naruto',
                        last_name: 'Uzumaki',
                        email: 'narutouzumaki@gmail.com',
                        date_of_birth: '1987-10-10'
                    },
                    {
                        first_name: 'Sasuke',
                        last_name: 'Uchiha',
                        email: 'sasukeuchiha@gmail.com',
                        date_of_birth: '1987-07-23'
                    },
                    {
                        first_name: 'Rock',
                        last_name: 'Lee',
                        email: 'rocklee@gmail.com',
                        date_of_birth: '1985-11-27'
                    },
                    {
                        first_name: 'Neji',
                        last_name: 'Hyuga',
                        email: 'nejihyuga@gmail.com',
                        date_of_birth: '1985-09-22'
                    },
                    {
                        first_name: 'Shikamaru',
                        last_name: 'Nara',
                        email: 'shikamarunara@gmail.com',
                        date_of_birth: '1987-09-22'
                    },
                    {
                        first_name: 'Shikamaru',
                        last_name: 'Nara',
                        email: 'shikamarunara@gmail.com',
                        date_of_birth: '1987-09-22'
                    },
                    {
                        first_name: 'Shikamaru',
                        last_name: 'Nara',
                        email: 'shikamarunara@gmail.com',
                        date_of_birth: '1987-09-22'
                    },
                    {
                        first_name: 'Shikamaru',
                        last_name: 'Nara',
                        email: 'shikamarunara@gmail.com',
                        date_of_birth: '1987-09-22'
                    },
                    {
                        first_name: 'Shikamaru',
                        last_name: 'Nara',
                        email: 'shikamarunara@gmail.com',
                        date_of_birth: '1987-09-22'
                    }, {
                        first_name: 'Shikamaru',
                        last_name: 'Nara',
                        email: 'shikamarunara@gmail.com',
                        date_of_birth: '1987-09-22'
                    },
                    {
                        first_name: 'Shikamaru',
                        last_name: 'Nara',
                        email: 'shikamarunara@gmail.com',
                        date_of_birth: '1987-09-22'
                    },
                    {
                        first_name: 'Shikamaru',
                        last_name: 'Nara',
                        email: 'shikamarunara@gmail.com',
                        date_of_birth: '1987-09-22'
                    },
                    {
                        first_name: 'Shikamaru',
                        last_name: 'Nara',
                        email: 'shikamarunara@gmail.com',
                        date_of_birth: '1987-09-22'
                    }, {
                        first_name: 'Shikamaru',
                        last_name: 'Nara',
                        email: 'shikamarunara@gmail.com',
                        date_of_birth: '1987-09-22'
                    }


                ],

                // Columns that should be displayed on The Table
                columns: [
                    {
                        name: 'first_name', th: 'First Name', render(row, cell, index) {
                            // Parse date and display difference
                            return "<div class='flex items-center'><img width='30px' height='30px' src='https://picsum.photos/80/80' " +
                                `class='rounded-full bg-gray-200' /> <span class='ml-2 font-semibold'>${row.first_name+' '+row.last_name}</span></div>`
                        }
                    },
                    {name: 'email', th: 'Email Address'},
                    {name: 'phone', th: 'Phone Number'},
                    {name: 'date_of_birth', th: 'Date Of Birth', show: false},
                    {
                        name: 'age', th: 'Age', render(row, cell, index) {
                            // Parse date and display difference
                            return moment(row.date_of_birth).fromNow()
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
                ],
            }
        }
    }
</script>

<style scoped>

</style>
