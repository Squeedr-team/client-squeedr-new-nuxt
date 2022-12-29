<template>
  <div class="container mt-4">
    <ValidationObserver v-slot="{ invalid }">
      <form class="grid gap-5 grid-cols-12" @submit.prevent="onSubmit">
        <div class="col-span-12">
          <ValidationProvider v-slot="{ errors }" name="email" rules="required">
            <tw-input
              v-model="form.email"
              label="Email"
              :errors="errors"
              rounded
              placeholder="email"
            />
          </ValidationProvider>
        </div>
        <div class="col-span-12">
          <ValidationProvider
            v-slot="{ errors }"
            name="address"
            rules="required"
          >
            <tw-input
              v-model="form.address"
              label="Address"
              :errors="errors"
              placeholder="Enter your address"
              rounded
            >
            </tw-input>
          </ValidationProvider>
        </div>
        <div class="col-span-12">
          <tw-input
            v-model="form.address2"
            label="Address 2"
            placeholder="Enter your address 2"
            rounded
          >
          </tw-input>
        </div>
        <div class="col-span-12">
          <tw-input v-model="form.city" label="City" rounded> </tw-input>
        </div>
        <div class="col-span-12">
          <tw-text-area
            v-model="form.about"
            :rows="3"
            rounded
            label="About Me"
            class="w-full bg-transparent"
            placeholder="Please type some info about you ....."
          >
          </tw-text-area>
        </div>
        <div class="col-span-12">
          <label for="galary" class="text-secondary-600 block mb-1"
            >Galary</label
          >
          <input type="file" name="galary" id="" multiple />
        </div>

        <div class="col-span-12">
          <div>
            <label for="skill" class="text-secondary-600 block mb-1"
              >Skills</label
            >
            <div class="flex">
              <input
                type="text"
                v-model="skill"
                label="Skills"
                class="px-3 py-2 h-12 lg:h-14 leading-normal block w-full text-gray-800 bg-white text-left appearance-none outline-none rounded-l-xl"
              />
              <div
                class="bg-primary flex items-center p-4 px-8 text-white rounded-r-xl text-xl"
                @click.prevent="addSkill"
              >
                <font-awesome-icon icon="fa-solid fa-plus ">
                </font-awesome-icon>
              </div>
            </div>
          </div>
          <ul class="mt-4">
            <li v-for="(skill, indx) in form.skills" :key="indx" class="mb-2">
              {{ skill }}
            </li>
          </ul>
        </div>

        <div class="col-span-12">
          <tw-input
            v-model="form.experiance"
            label="Years of Experiance"
            rounded
            type="number"
            min="1"
          >
          </tw-input>
        </div>
        <div class="col-span-12">
          <tw-input
            v-model="form.clinet"
            label="Number of Clinets"
            rounded
            type="number"
            min="1"
          >
          </tw-input>
        </div>
        <div class="col-span-12">
          <tw-input
            v-model="form.fitness_level"
            label="Fitness Level"
            rounded
            type="number"
            min="1"
          >
          </tw-input>
        </div>
        <div class="col-span-12">
          <tw-input v-model="form.reg_no" label="Reg No" rounded type="text">
          </tw-input>
        </div>
        <div class="profile-Testimonials my-4 col-span-12">
          <p>Testimonials</p>
          <div class="bg-white rounded-xl p-4 my-4">
            <div class="mb-2">
              <tw-input
                v-model="single_testimonials.name"
                label="Name"
                rounded
                type="text"
              >
              </tw-input>
            </div>
            <div class="mb-2">
              <tw-input
                v-model="single_testimonials.jobTitle"
                label="Job Title"
                rounded
                type="text"
              >
              </tw-input>
            </div>
            <div class="col-span-12">
              <tw-text-area
                v-model="single_testimonials.text"
                :rows="3"
                rounded
                label="Text"
                class="w-full bg-transparent"
              >
              </tw-text-area>
              <div class="mb-2">
                <tw-input
                  v-model="single_testimonials.avatar"
                  label="Image"
                  rounded
                  type="text"
                >
                </tw-input>
              </div>
            </div>

            <div class="mt-4">
              <button
                class="bg-primary py-2 lg:py-3 rounded-xl text-white px-5 hover:bg-primary-700"
                @click="addTestimonial"
              >
                Add testimonial
              </button>
            </div>
            <ul class="my-4">
              <li v-for="(list, i) in testimonials" :key="i">
                <single-testimonial :single-testimonial="list" />
              </li>
            </ul>
          </div>
        </div>
        <div class="col-span-12">
          <button
            :disabled="invalid"
            class="bg-primary w-full py-2 lg:py-3 text-lg md:text-xl rounded-xl px-8 text-white px-5 hover:bg-primary-700"
          >
            Submit
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'DashboardPage',
  layout: 'dashboardLayout',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      form: {
        skills: [],
      },
      skill: null,
      testimonials: [],
      single_testimonials: {},
      settings: {
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      },
      ref: 'profileTestimonialSlider',
    }
  },
  methods: {
    onSubmit() {},
    addSkill() {
      if (this.skill) {
        this.form.skills.push(this.skill)
        this.skill = null
      }
    },
    addTestimonial() {
      if (this.single_testimonials) {
        this.testimonials.push(this.single_testimonials)
        this.single_testimonials = {}
      }
    },
  },
}
</script>
