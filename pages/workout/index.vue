<template>
  <div>
    <div class='grid 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-1 lg:gap-5 gap-y-5 grid-flow-row grid-flow-column sm:p-5 p-2'>
      <workout-filter :workouts='workouts' :section-data='sectionData' class='col-span-2 2xl:col-span-3'/>
      <next-workout :section-data='sectionData' class='col-span-1'/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodMenu',
  layout: 'dashboardLayout',

  data() {
    return {
      workouts: [
        {
          id: 1,
          date: '1998-05-15',
          name: 'Routine Cardio Burn Workout',
          status: 'unfinished',
          exercise: {
            img: 'https://picsum.photos/80/80',
            short_name: 'Cycling',
            name: 'Cycling Routing',
            color: '#1EA7C5'
          },
          spend: '00:23:55',
          distance: '34km'
        },
        {
          id: 2,
          date: '1998-05-15',
          name: 'Routine Cardio Burn Workout',
          status: 'on progress',
          exercise: {
            img: 'https://picsum.photos/80/80',
            short_name: 'Running',
            name: 'Running',
            color: '#1EA7C5'
          },
          spend: '00:23:55',
          distance: '34km'
        },
        {
          id: 2,
          date: '1998-05-15',
          name: 'Routine Cardio Burn Workout',
          status: 'finished',
          exercise: {
            img: 'https://picsum.photos/80/80',
            short_name: 'Running',
            name: 'Running',
            color: '#1EA7C5'
          },
          spend: '00:23:55',
          distance: '34km'
        }
      ],
      next_week_workout: [
        {
          id: 2,
          date: '1998-05-15',
          name: 'Routine Cardio Burn Workout',
          status: 'on_progress',
          exercise: {
            img: 'https://picsum.photos/80/80',
            short_name: 'Running',
            name: 'Running',
            color: '#FFBC11'
          }
        }
      ],
      sectionData: {
        title: 'Diet Menus',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        searchPlaceholder: 'Search Menus here',
        filterItems: [
          { name: 'All', value: 'all' },
          { name: 'Finished', value: 'Finished' },
          { name: 'Unfinished', value: 'Unfinished' }
        ]
      }
    }
  }
}
</script>
