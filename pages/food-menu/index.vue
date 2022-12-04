<template>
  <div>
    <div class='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:gap-8 grid-flow-row grid-flow-column xl:p-8 p-2'>
      <template v-for='section in pageData'>
        <component
          :is='section.component_name'
          v-if='section.component'
          :key='section.id'
          :class='section.className'
          :section-data='section.content'
          :food-items='foodItems'
        />
      </template>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'FoodMenu',
        layout: 'dashboardLayout',

        data() {
            return {
                foodItems: [
                    {
                        img: require('~/assets/images/menu1.png'),
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
                        name: 'Hearty Italian-Style White Bean Soup',
                        author: {name: 'Andrew Sceenshaver', avatar: 'https://picsum.photos/80/8'},
                        cookTime: '4-6 mins',
                        schedule: 'Breakfast (Monday, Tuesday)',
                        ingredients_count: 8,
                        reviews_count: 568
                    }, {
                        img: require('~/assets/images/menu1.png'),
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
                        name: 'Hearty Italian-Style White Bean Soup',
                        author: {name: 'Andrew', avatar: 'https://picsum.photos/80/8'},
                        cookTime: '4-6 mins',
                        schedule: 'Breakfast (Monday, Tuesday)',
                        ingredients_count: 8,
                        reviews_count: 568
                    },
                    {
                        img: require('~/assets/images/menu1.png'),
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
                        name: 'Hearty Italian-Style White Bean Soup',
                        author: {name: 'Andrew', avatar: 'https://picsum.photos/80/8'},
                        cookTime: '4-6 mins',
                        schedule: 'Breakfast (Monday, Tuesday)',
                        ingredients_count: 8,
                        reviews_count: 568
                    }
                ],
                pageData: [
                    {
                        id: 1,
                        component: true,
                        component_name: 'food-panel',
                        className: 'md:col-span-2 lg:row-span-3 col-span-1 2xl:col-span-3',
                        content: {
                            title: 'Diet Menus',
                            description: 'Lorem ipsum dolor sit amet, consectetur',
                            searchPlaceholder: 'Search Menus here',
                            filterItems: [
                                {name: 'Recommended for you', value: 'recommend'},
                                {name: 'Salad', value: 'salad'},
                                {name: 'Breakfast', value: 'breakfast'},
                                {name: 'Lunch', value: 'lunch'}
                            ]
                        }
                    },

                    {
                        id: 2,
                        component: true,
                        component_name: 'diet-menu',
                        className: 'col-span-1 row-span-1',
                        content: {
                            title: 'Current Diet Menu',
                            description: 'Lorem ipsum dolor sit amet',
                            item: {
                                img: 'https://picsum.photos/80/80',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
                                name: 'Hearty Italian-Style White Bean Soup',
                                author: {name: 'Andrew', avatar: 'https://picsum.photos/80/8'},
                                cookTime: '4-6 mins',
                                schedule: 'Breakfast (Monday, Tuesday)',
                                ingredients_count: 8,
                                reviews_count: 568
                            }
                        }
                    },

                    {
                        id: 3,
                        component: true,
                        component_name: 'trending-food',
                        className: 'col-span-1 row-span-1',
                        content: {
                            title: 'Trending Ingridients',
                            description: 'Lorem ipsum dolor sit amet',
                            items: [
                                {
                                    img: 'https://picsum.photos/80/80',
                                    description: 'Vitamin A, B, C',
                                    name: 'Strawberry Fruit',
                                    rank: 1,
                                    id: 1
                                },
                                {
                                    img: 'https://picsum.photos/80/80',
                                    description: 'Vitamin A, B, C',
                                    name: 'Orange Fruit',
                                    rank: 2,
                                    id: 2
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
</script>
