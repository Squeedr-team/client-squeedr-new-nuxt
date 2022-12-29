<template>
  <div
    v-if="workout"
    class="flex border-b flex-wrap sm:p-3 p-2 workout-card items-center mb-2 gap-y-3"
  >
    <div class="flex items-center">
      <div
        class="mr-3 rounded-2xl flex flex-col justify-center items-center lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14"
        :class="
          workout.status === 'finished' ? 'bg-primary-200' : 'bg-primary-100'
        "
      >
        <p
          class="lg:text-2xl md:text-lg text-base text-primary-900 mb-0 font-semibold"
        >
          {{ $moment(workout.date).format('DD') }}
        </p>
        <span class="md:text-sm text-xs text-primary-900 font-semibold">{{
          $moment(workout.date).format('ddd')
        }}</span>
      </div>
      <div class="flex-1 mb-2">
        <h4 class="lg:text-xl sm:text-base text-sm pb-2">
          <a class="font-semibold">{{ workout.name }}</a>
        </h4>
        <div class="statusTxt lg:text-base sm:text-sm text-xs">
          <p class="text-warning font-semibold capitalize lg:text-lg">
            {{ workout.status }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-1 items-center mr-auto pl-3 pr-3 sm:justify-center">
      <span class="text-info ml-2">start Time and Durations</span>
    </div>
    <div class="flex flex-1 items-center mr-auto pl-3 pr-3 sm:justify-center">
      <span class="text-info ml-2">Location</span>
    </div>
    <div class="flex flex-1 items-center mr-auto pl-3 pr-3 sm:justify-center">
      <span class="text-info ml-2">Capacity</span>
    </div>
    <div class="flex items-center">
      <!-- <button
        class="play-button xl:rounded-2xl rounded-2xl lg:px-5 lg:py-3 px-4 py-2 mr-3 flex items-center 2xl:ml-auto xl:ml-0 lg:ml-auto md:ml-0"
      >
        <font-awesome-icon
          icon="fa fa-caret-right"
          class="mr-3 xl:text-3xl text-xl"
        ></font-awesome-icon>
        <span class="text-sm lg:text-base 2xl:text-lg">Start Workout</span>
      </button> -->
      <div
        :class="
          workout.status !== 'finished'
            ? 'xl:ml-auto 2xl:ml-0 lg:ml-0 ml-auto'
            : 'ml-auto'
        "
      >
        <VDropdown placement="bottom-end" :delay="{ show: 300, hide: 0 }">
          <button
            class="xl:w-14 xl:h-14 lg:w-12 lg:h-12 w-10 h-10 rounded-2xl bg-secondary-100 xl:rounded-2xl more-button"
          >
            <font-awesome-icon
              icon="fa fa-ellipsis-vertical"
              class="xl:text-3xl md:text-xl text-sm"
            />
          </button>

          <template #popper>
            <div class="w-32 flex-col flex items-start">
              <button
                class="text-dustTxtColor hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left"
              >
                Edit
              </button>
              <!-- <button
                class="text-dustTxtColor hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left"
              >
                Delete
              </button> -->
            </div>
          </template>
        </VDropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkoutItem',
  props: {
    workout: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped lang="scss">
.workout-card {
  transition: all 0.5s;
  border-radius: 1.25rem;

  .play-button {
    background: theme('colors.secondary.100') !important;
    color: theme('colors.primary.900') !important;
    transition: all 0.5s;
  }

  &:hover {
    background: theme('colors.primary.DEFAULT');
    color: white;

    .status {
      color: white !important;

      svg {
        path {
          fill: white !important;
        }
      }
    }

    .play-button {
      background: theme('colors.warning.DEFAULT') !important;
      color: white !important;
    }

    .more-button {
      background: rgba(255, 255, 255, 0.3) !important;
    }

    .statusTxt span {
      color: white !important;
    }
  }
}
</style>
