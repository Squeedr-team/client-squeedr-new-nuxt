<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div :class="singlePlace ? 'h-auto' : 'min-h-screen'">
    <gmap-map
      :center="center"
      :zoom="8"
      :style="`width: ${width}; height: ${height}`"
    >
      <!-- <div v-for="space in results" :key="space.id" class="mb-5"> -->
      <gmap-marker
        v-for="(space, index) in results"
        :key="index"
        :position="space.position"
        :clickable="true"
        @click="selectedSpace = space"
      ></gmap-marker>
      <!-- </div> -->
      <gmap-info-window
        :position="selectedSpace?.position"
        :opened="!!selectedSpace"
        style="padding: 0"
        content="lorem"
        :options="{
          pixelOffset: {
            width: 0,
            height: -35,
          },
        }"
        @closeclick="selectedSpace = null"
      >
        <div v-if="selectedSpace">
          <space-map-info-window :spaceData="selectedSpace" />
        </div>
      </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>
import SpaceMapInfoWindow from './SpaceMapInfoWindow.vue'
// import SpaceCard from '../Shared/SpaceCard.vue'
export default {
  components: { SpaceMapInfoWindow },
  // components: { SpaceCard },
  props: {
    results: {
      type: Array,
      required: false,
      default: () => [],
    },
    singlePlace: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    width: {
      type: String,
      required: false,
      default: () => '100%',
    },
    height: {
      type: String,
      required: false,
      default: () => '900px',
    },
  },
  data() {
    return {
      selectedSpace: {
        position: {},
      },
      markers: [
        {
          position: { lat: 48.8566, lng: 2.3522 },
        },
      ],
      places: [],
      currentPlace: null,
    }
  },
  computed: {
    center() {
      if (this.results.length > 0) {
        const firstElementCoords = this.results[0].position
        return {
          lat: firstElementCoords.lat,
          lng: firstElementCoords.lng,
        }
      } else {
        return { lat: 48.8566, lng: 2.3522 }
      }
    },
  },
  methods: {
    injectGoogleMapsApiIfNotInjectedAlready() {
      return new Promise((resolve, reject) => {
        try {
          if (
            typeof window !== 'undefined' &&
            !Object.prototype.hasOwnProperty.call(window, 'google')
          ) {
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBMXbfUagVH7i7MKd-4zjg9_5HBoEOpm9&libraries=places&callback=initMap`
            document.head.appendChild(script)
          }
          resolve()
        } catch (e) {
          reject(
            new Error('Map could not be loaded due to network issues ' + e)
          )
        }
      })
    },
  },
}
</script>

<style></style>
