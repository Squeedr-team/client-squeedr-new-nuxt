<template>
  <div v-if='workout' class='flex  border-b flex-wrap sm:p-3 p-2 workout-card items-center mb-2 gap-y-3'>
    <div
      class='flex items-center'
      :class='workout.status!=="finished"?"2xl:w-5/12 xl:w-8/12 lg:w-1/2 sm:w-2/3 w-full":"2xl:w-5/12 xl:w-7/12 lg:w-1/2 sm:w-7/12 w-full"'
    >
      <div
        class='mr-3 rounded-2xl flex flex-col justify-center items-center lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14'
        :class="workout.status==='finished'?'bg-primary-200':'bg-primary-100'"
      >
        <p class='lg:text-2xl md:text-lg text-md text-primary-900 mb-0 font-semibold'>
          {{ $moment(workout.date).format('DD') }}</p>
        <span class='md:text-sm text-xs text-primary-900 font-semibold'>{{ $moment(workout.date).format('ddd') }}</span>
      </div>
      <div class='flex-1 mb-2'>
        <h4 class='lg:text-xl sm:text-md text-sm pb-2'><a class='font-semibold'>{{ workout.name }}</a></h4>
        <div class='statusTxt lg:text-md sm:text-sm text-xs'>
        <span class='text-warning font-semibold capitalize lg:text-lg'>
          {{ workout.status }}
        </span>
          <span v-if='workout.status==="finished"' class='2xl:text-lg text-dustTxtColor px-3'>34km</span>
          <span v-if='workout.status==="finished"' class='2xl:text-lg text-dustTxtColor'>00:23:45”</span>
        </div>
      </div>
    </div>
    <div
      class=' flex flex-1 items-center mr-auto pl-3 pr-3 sm:justify-center status'
      :class='workout.status!=="finished"?"2xl:w-1/6 xl:1/3 lg:w-1/6 sm:w-1/3 w-full":"2xl:w-1/6 lg:w-1/6 sm:w-1/4 w-1/2"'
      :style='{color: workout.exercise?workout.exercise.color:"#000000"}'
    >
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip8)'>
          <path
            d='M10.8586 5.22599L5.87121 10.5543C5.50758 11.0846 5.64394 11.8068 6.17172 12.1679L11.1945 15.6098L11.1945 18.9558C11.1945 19.5921 11.6995 20.125 12.3359 20.1376C12.9874 20.1477 13.5177 19.625 13.5177 18.976L13.5177 15.0013C13.5177 14.6174 13.3283 14.2588 13.0126 14.0442L9.79041 11.8346L12.5025 8.95837L13.8914 12.1225C14.0758 12.5442 14.4949 12.817 14.9546 12.817L19.1844 12.817C19.8207 12.817 20.3536 12.3119 20.3662 11.6755C20.3763 11.024 19.8536 10.4937 19.2046 10.4937L15.7172 10.4937C15.2576 9.44824 14.7677 8.41289 14.3409 7.35228C14.1237 6.81693 14.0025 6.5846 13.6036 6.21592C13.5227 6.14016 12.9596 5.62501 12.4571 5.16541C11.995 4.74619 11.2828 4.77397 10.8586 5.22599Z'
            fill='#1EA7C5'></path>
          <path
            d='M15.6162 5.80681C17.0861 5.80681 18.2778 4.61517 18.2778 3.1452C18.2778 1.67523 17.0861 0.483582 15.6162 0.483582C14.1462 0.483582 12.9545 1.67523 12.9545 3.1452C12.9545 4.61517 14.1462 5.80681 15.6162 5.80681Z'
            fill='#1EA7C5'></path>
          <path
            d='M4.89899 23.5164C7.60463 23.5164 9.79798 21.3231 9.79798 18.6174C9.79798 15.9118 7.60463 13.7184 4.89899 13.7184C2.19335 13.7184 -1.81927e-07 15.9118 -2.13831e-07 18.6174C-2.45735e-07 21.3231 2.19335 23.5164 4.89899 23.5164Z'
            fill='#1EA7C5'></path>
          <path
            d='M19.101 23.5164C21.8066 23.5164 24 21.3231 24 18.6174C24 15.9118 21.8066 13.7184 19.101 13.7184C16.3954 13.7184 14.202 15.9118 14.202 18.6174C14.202 21.3231 16.3954 23.5164 19.101 23.5164Z'
            fill='#1EA7C5'></path>
        </g>
        <defs>
          <clipPath id='clip8'>
            <rect width='24' height='24' fill='white'></rect>
          </clipPath>
        </defs>
      </svg>
      <span class='text-info ml-2'>Cycling</span>
    </div>
    <div
      class='flex items-center'
      :class='workout.status!=="finished"?"2xl:w-5/12 xl:w-full lg:w-1/3 w-full":"2xl:w-5/12 xl:w-1/6 lg:w-1/3 sm:w-1/6 w-1/2"'
    >
      <button
        v-if='workout.status!=="finished"'
        class='play-button xl:rounded-2xl rounded-2xl lg:px-5 lg:py-3 px-4 py-2 mr-3 flex items-center 2xl:ml-auto xl:ml-0 lg:ml-auto md:ml-0'>
        <font-awesome-icon
          icon='fa fa-caret-right' class='mr-3 xl:text-3xl text-xl'></font-awesome-icon>
        <span class='text-sm lg:text-md 2xl:text-lg'>Start Workout</span>
      </button>
      <div :class='workout.status!=="finished"?"xl:ml-auto 2xl:ml-0 lg:ml-0 ml-auto":"ml-auto"'>
        <VDropdown
          placement='bottom-end'
          :delay='{ show: 300, hide: 0 }'
        >
          <button
            class='xl:w-14 xl:h-14 lg:w-12 lg:h-12 w-10 h-10 rounded-2xl bg-secondary-100 xl:rounded-2xl more-button'
          >
            <font-awesome-icon icon='fa fa-ellipsis-vertical' class='xl:text-3xl md:text-xl text-sm' />
          </button>

          <template #popper>
            <div class='w-32 flex-col flex items-start'>
              <button class='text-dustTxtColor hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'>
                Edit
              </button>
              <button class='text-dustTxtColor hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'>
                Delete
              </button>
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
      default: () => {
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.workout-card {
  transition: all 0.5s;
  border-radius: 1.25rem;

  .play-button {
    background: theme('colors.secondary.100') !important;
    color: theme('colors.primary.900') !important;
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
