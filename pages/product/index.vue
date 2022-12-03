<template>
  <div>
    <Breadcumb
      class='sm:p-5 p-2'
      :routes='[
                 {name:"Dashboard",path:"/"},
                 {name:"Product",path:"/product"},
               ]'
    />
    <div class='grid md:grid-cols-2 grid-cols-1 gap-5 2xl:gap-8 sm:p-5 p-2'>
      <template v-for='(product,idx) in products'>
        <product-list-card
          :key='idx'
          :info='product'
        >
        </product-list-card>
      </template>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ProductList',
  layout: 'dashboardLayout',
  data() {
    return {

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
