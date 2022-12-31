<template>
  <div class="container mt-4">
    <ValidationObserver v-slot="{ invalid }">
      <form class="grid gap-5 grid-cols-12" @submit.prevent="onSubmit">
        <div class="col-span-12 mb-4">
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
        <div class="col-span-12 mb-4">
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
        <div class="col-span-12 mb-4">
          <ValidationProvider v-slot="{ errors }" name="city" rules="required">
            <tw-input v-model="form.city" label="City" rounded :errors="errors">
            </tw-input>
          </ValidationProvider>
        </div>
        <div class="col-span-12 mb-4">
          <ValidationProvider v-slot="{ errors }" name="about" rules="required">
            <tw-text-area
              v-model="form.about"
              :rows="3"
              rounded
              :errors="errors"
              label="About Me"
              class="w-full bg-transparent"
              placeholder="Please type some info about you ....."
            >
            </tw-text-area>
          </ValidationProvider>
        </div>
        <!-- avatar -->
        <div class="col-span-12 mb-4">
          <p class="text-secondary-600 block mb-1">Profile picture</p>
          <div class="bg-white p-4 rounded-lg">
            <form ref="avatarFrom">
              <input
                type="file"
                name="avatar"
                id="avatarInput"
                @change="uploadAvatar"
              />
            </form>
            <div v-if="form.avatar" class="h-40 w-40 relative mt-8">
              <img
                :src="form.avatar.url"
                alt="prifile image"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute top-[-1rem] right-[-1rem] z-10 cursor-pointer text-xl"
                @click="removeAvatar"
              >
                <font-awesome-icon icon="fa-solid fa-times text-white ">
                </font-awesome-icon>
              </div>
            </div>
          </div>
        </div>
        <!-- Galary -->
        <div class="col-span-12 mb-4">
          <p class="text-secondary-600 block mb-1">Galary</p>
          <form ref="galaryForm" class="bg-white p-4 rounded-lg">
            <div class="w-full">
              <input
                type="file"
                name="galary"
                id="galaryInput"
                multiple
                @change="uploadGalary"
              />
            </div>
            <ul v-if="form.galary.length > 0" class="flex gap-8 my-8 flex-wrap">
              <li
                v-for="(g, gindex) in form.galary"
                :key="g.id"
                class="w-40 h-40 relative"
              >
                <img :src="g.url" :alt="g" class="w-full h-full object-cover" />
                <div
                  class="absolute top-[-1rem] right-[-1rem] z-10 cursor-pointer text-xl"
                  @click="removImageFromGalary(gindex)"
                >
                  <font-awesome-icon icon="fa-solid fa-times text-white ">
                  </font-awesome-icon>
                </div>
              </li>
            </ul>
          </form>
        </div>

        <div class="col-span-12 mb-4">
          <div class="w-full">
            <label for="skill" class="text-secondary-600 block mb-1"
              >Skills</label
            >
            <div>
              <form @submit.prevent="addSkill" class="flex">
                <input
                  type="text"
                  v-model="skill"
                  label="Skills"
                  class="px-3 py-2 h-12 lg:h-14 leading-normal block w-full text-gray-800 bg-white text-left appearance-none outline-none rounded-l-xl"
                />
                <div
                  class="bg-primary flex items-center p-4 px-8 text-white rounded-r-xl text-xl"
                >
                  <font-awesome-icon icon="fa-solid fa-plus ">
                  </font-awesome-icon>
                </div>
              </form>
            </div>
          </div>
          <ul class="mt-4 flex items-center gap-8">
            <li
              v-for="(skill, indx) in form.skills"
              :key="indx"
              class="relative font-bold"
            >
              <p class="bg-primary text-white py-2 px-4 rounded-xl">
                {{ skill }}
              </p>
              <div
                class="absolute top-0 right-[-0.5rem] text-xs cursor-pointer"
                @click="removeSkill(indx)"
              >
                <font-awesome-icon icon="fa-solid fa-times ">
                </font-awesome-icon>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-span-12 mb-4">
          <label for="level" class="block mb-4">Fitness Level</label>
          <select
            name="level"
            required
            class="block w-full p-4 rounded-xl"
            v-model="form.level"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate ">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div class="col-span-12 mb-4">
          <tw-input
            v-model="form.experiance"
            label="Years of Experiance"
            rounded
            type="number"
            min="1"
          >
          </tw-input>
        </div>
        <div class="col-span-12 mb-4">
          <tw-input
            v-model="form.clinet"
            label="Number of Clinets"
            rounded
            type="number"
            min="1"
          >
          </tw-input>
        </div>
        <div class="col-span-12 mb-4">
          <tw-input
            v-model="form.fitness_level"
            label="Fitness Level"
            rounded
            type="number"
            min="1"
          >
          </tw-input>
        </div>
        <div class="col-span-12 mb-4">
          <tw-input v-model="form.reg_no" label="Reg No" rounded type="text">
          </tw-input>
        </div>
        <div class="profile-Testimonials col-span-12 mb-4">
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

        <div class="col-span-12 mb-4">
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
        galary: [],
        avatar: null,
      },
      levelOptions: ['beginner', 'intermediate', 'advanced'],
      skill: null,
      testimonials: [],
      single_testimonials: {},
    }
  },
  methods: {
    onSubmit() {
      console.log('onSubmit')
    },
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
    removeSkill(i) {
      this.form.skills.splice(i, 1)
    },
    async uploadAvatar(e) {
      const upFiles = e.target.files
      const formData = new FormData()
      formData.append('files', upFiles[0])

      try {
        const url = await this.$strapi.$http.$post('/upload', formData)
        this.form.avatar = url[0]
        console.log(this.form.avatar)
        this.$refs.avatarFrom.reset()
      } catch (error) {
        console.log('error', error.response)
      }
    },
    async uploadGalary(e) {
      const upFiles = e.target.files
      const formData = new FormData()
      for (let index = 0; index < upFiles.length; index++) {
        console.log(upFiles[index])
        formData.append('files', upFiles[index])
      }

      try {
        const url = await this.$strapi.$http.$post('/upload', formData)
        if (this.form.galary.length === 0) {
          this.form.galary = url
        } else {
          this.form.galary = [...this.form.galary, ...url]
        }
        this.$refs.galaryForm.reset()
      } catch (error) {
        console.log('error', error.response)
      }
    },
    removImageFromGalary(i) {
      this.form.galary.splice(i, 1)
    },
    removeAvatar() {
      this.form.avatar = null
    },
  },
}
</script>
