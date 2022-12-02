<template>
  <div>
    Breadcum here
    <div class='grid md:grid-cols-2 grid-cols-1 gap-5 sm:p-5 p-2'>
      <template v-for='(product,idx) in products'>
        <product-list-card
          :key='idx'
          :info='product'
        >
        </product-list-card>
      </template>
    </div>
    <div class='bg-white rounded-2xl p-5 m-5'>
      <data-table :data='data' :columns='columns' :actions='actions' />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import DataTable from '../../components/ui/DataTable'

export default {
  name: 'ProductList',
  components: { DataTable },
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
        { name: 'first_name', th: 'First Name' },
        { name: 'last_name', th: 'Last Name' },
        { name: 'email', th: 'Email Address' },
        { name: 'phone', th: 'Phone Number' },
        { name: 'date_of_birth', th: 'Date Of Birth', show: false },
        {
          name: 'age', th: 'Age', render(row, cell, index) {
            // Parse date and display difference
            return moment(row.date_of_birth).fromNow()
          }
        }
      ],
      actions: [
        {
          text: 'Delete', color: 'danger', action: (row, index) => {
            alert(`about to delete ${row.first_name} ${row.last_name}`)
          }
        }
      ],
      products: [
        {
          img: '/v1663308694/Video_shoot_tile_v2.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
          name: 'Hearty Italian-Style White Bean Soup',
          author: { name: 'Andrew', avatar: 'https://picsum.photos/80/8' },
          cookTime: '4-6 mins',
          schedule: 'Breakfast (Monday, Tuesday)',
          ingredients_count: 8,
          reviews_count: 568,
          review: 3.2,
          in_stock: true,
          code: '0405689',
          brand: 'Lee',
          price: 320,
          id: 1,
          slug: 'abc-1'
        }, {
          img: '/v1663308694/Video_shoot_tile_v2.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
          name: 'Hearty Italian-Style White Bean Soup',
          author: { name: 'Andrew', avatar: 'https://picsum.photos/80/8' },
          cookTime: '4-6 mins',
          schedule: 'Breakfast (Monday, Tuesday)',
          ingredients_count: 8,
          reviews_count: 568,
          review: 4.3,
          in_stock: true,
          code: '0405689',
          brand: 'Lee',
          price: 320,
          id: 2,
          slug: 'abc-2'
        },
        {
          img: '/v1663308694/Video_shoot_tile_v2.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
          name: 'Hearty Italian-Style White Bean Soup',
          author: { name: 'Andrew', avatar: 'https://picsum.photos/80/8' },
          cookTime: '4-6 mins',
          schedule: 'Breakfast (Monday, Tuesday)',
          ingredients_count: 8,
          reviews_count: 568,
          review: 3.7,
          in_stock: true,
          code: '0405689',
          brand: 'Lee',
          price: 320,
          id: 3,
          slug: 'abc-3'
        }
      ]
      // pageData: [
      //     {
      //         id: 1,
      //         component: true,
      //         component_name: 'food-panel',
      //         className: 'md:col-span-2 lg:row-span-3 col-span-1',
      //         content: {
      //             title: 'Diet Menus',
      //             description: 'Lorem ipsum dolor sit amet, consectetur',
      //             searchPlaceholder: 'Search Menus here',
      //             filterItems: [
      //                 {name: 'Recommended for you', value: 'recommend'},
      //                 {name: 'Salad', value: 'salad'},
      //                 {name: 'Breakfast', value: 'breakfast'},
      //                 {name: 'Lunch', value: 'lunch'}
      //             ]
      //         }
      //     },
      //
      //     {
      //         id: 2,
      //         component: true,
      //         component_name: 'diet-menu',
      //         className: 'col-span-1 row-span-1',
      //         content: {
      //             title: 'Current Diet Menu',
      //             description: 'Lorem ipsum dolor sit amet',
      //             item: {
      //                 img: 'https://picsum.photos/80/80',
      //                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      //                 name: 'Hearty Italian-Style White Bean Soup',
      //                 author: {name: 'Andrew', avatar: 'https://picsum.photos/80/8'},
      //                 cookTime: '4-6 mins',
      //                 schedule: 'Breakfast (Monday, Tuesday)',
      //                 ingredients_count: 8,
      //                 reviews_count: 568
      //             }
      //         }
      //     },
      //
      //     {
      //         id: 3,
      //         component: true,
      //         component_name: 'trending-food',
      //         className: 'col-span-1 row-span-1',
      //         content: {
      //             title: 'Trending Ingridients',
      //             description: 'Lorem ipsum dolor sit amet',
      //             items: [
      //                 {
      //                     img: 'https://picsum.photos/80/80',
      //                     description: 'Vitamin A, B, C',
      //                     name: 'Strawberry Fruit',
      //                     rank: 1,
      //                     id: 1
      //                 },
      //                 {
      //                     img: 'https://picsum.photos/80/80',
      //                     description: 'Vitamin A, B, C',
      //                     name: 'Orange Fruit',
      //                     rank: 2,
      //                     id: 2
      //                 }
      //             ]
      //         }
      //     }
      // ]
    }
  }
}
</script>
