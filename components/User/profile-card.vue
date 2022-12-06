<template>
  <div>
    <tw-tabs :tabs='tabs'>
      <div>
        <div class='pt-3'>
          <div class='post-input'>
            <tw-text-area
              :rows='3'
              rounded
              class='w-full bg-transparent'
              placeholder='Please type what you want....'>
            </tw-text-area>
            <div class='flex flex-wrap py-4 gap-1'>
              <button class='bg-primary-100 hover:bg-primary hover:text-white p-4 rounded-2xl'>
                <font-awesome-icon icon='fa fa-link'>
                </font-awesome-icon>
              </button>
              <button class='bg-primary-100 hover:bg-primary hover:text-white p-4 rounded-2xl'>
                <font-awesome-icon icon='fa fa-camera'></font-awesome-icon>
              </button>
              <button class='bg-primary hover:bg-primary-700 text-white py-4 px-7 rounded-2xl'>
                Post
              </button>
            </div>
          </div>
          <div v-for='(post,idx) in 3' :key='idx' class='py-5'>
            <img
              :src='require("~/assets/images/profile/8.jpg")'
              alt=''
              class='w-full'>
            <nuxt-link to='#'>
              <h3 class='text-black xl:text-xl text-lg mt-3'>
                Collection of textile samples lay spread
              </h3>
            </nuxt-link>
            <p class='text-secondary-600 leading-7 mt-3 text-base xl:text-lg mb-6'>
              A wonderful serenity has take possession of my entire soul like these sweet
              morning of
              spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul
              like these sweet morning
              of spare which enjoy whole heart.
            </p>
            <button class='bg-primary hover:bg-primary-700 text-white py-4 px-7 rounded-2xl mr-2'>
              <font-awesome-icon icon='fa fa-heart' class='mr-2'></font-awesome-icon>
              Like
            </button>
            <button class='bg-primary hover:bg-primary-700 text-white py-4 px-7 rounded-2xl' data-toggle='modal' data-target='#replyModal'>
              <font-awesome-icon icon='fa fa-reply' class='mr-2'></font-awesome-icon>
              Reply
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class='profile-about-me'>
          <div class='pt-4 border-bottom-1 pb-3'>
            <h4 class='text-primary'>About Me</h4>
            <p class='mb-2'>A wonderful serenity has taken possession of my entire soul, like these sweet
              mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of
              existence was created for the bliss of souls like mine.I am so happy, my dear friend, so
              absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</p>
            <p>A collection of textile samples lay spread out on the table - Samsa was a travelling
              salesman - and above it there hung a picture that he had recently cut out of an illustrated
              magazine and housed in a nice, gilded frame.</p>
          </div>
        </div>
        <div class='profile-skills mb-5'>
          <h4 class='text-primary mb-2'>Skills</h4>
          <a class='btn btn-primary light btn-xs mb-1'>Admin</a>
          <a class='btn btn-primary light btn-xs mb-1'>Dashboard</a>
          <a class='btn btn-primary light btn-xs mb-1'>Photoshop</a>
          <a class='btn btn-primary light btn-xs mb-1'>Bootstrap</a>
          <a class='btn btn-primary light btn-xs mb-1'>Responsive</a>
          <a class='btn btn-primary light btn-xs mb-1'>Crypto</a>
        </div>
        <div class='profile-lang  mb-5'>
          <h4 class='text-primary mb-2'>Language</h4>
          <a class='text-muted pr-3 f-s-16'><i class='flag-icon flag-icon-us'></i> English</a>
          <a class='text-muted pr-3 f-s-16'><i class='flag-icon flag-icon-fr'></i> French</a>
          <a class='text-muted pr-3 f-s-16'><i class='flag-icon flag-icon-bd'></i> Bangla</a>
        </div>
        <div class='profile-personal-info'>
          <h4 class='text-primary mb-4'>Personal Information</h4>
          <div class='row mb-2'>
            <div class='col-sm-3 col-5'>
              <h5 class='f-w-500'>Name <span class='pull-right'>:</span>
              </h5>
            </div>
            <div class='col-sm-9 col-7'><span>Mitchell C.Shay</span>
            </div>
          </div>
          <div class='row mb-2'>
            <div class='col-sm-3 col-5'>
              <h5 class='f-w-500'>Email <span class='pull-right'>:</span>
              </h5>
            </div>
            <div class='col-sm-9 col-7'><span>example@examplel.com</span>
            </div>
          </div>
          <div class='row mb-2'>
            <div class='col-sm-3 col-5'>
              <h5 class='f-w-500'>Availability <span class='pull-right'>:</span></h5>
            </div>
            <div class='col-sm-9 col-7'><span>Full Time (Free Lancer)</span>
            </div>
          </div>
          <div class='row mb-2'>
            <div class='col-sm-3 col-5'>
              <h5 class='f-w-500'>Age <span class='pull-right'>:</span>
              </h5>
            </div>
            <div class='col-sm-9 col-7'><span>27</span>
            </div>
          </div>
          <div class='row mb-2'>
            <div class='col-sm-3 col-5'>
              <h5 class='f-w-500'>Location <span class='pull-right'>:</span></h5>
            </div>
            <div class='col-sm-9 col-7'><span>Rosemont Avenue Melbourne,
                                                                Florida</span>
            </div>
          </div>
          <div class='row mb-2'>
            <div class='col-sm-3 col-5'>
              <h5 class='f-w-500'>Year Experience <span class='pull-right'>:</span></h5>
            </div>
            <div class='col-sm-9 col-7'><span>07 Year Experiences</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='pt-3'>
          <div class='settings-form'>
            <h4 class='text-primary'>Account Setting</h4>
            <form>
              <div class='form-row'>
                <div class='form-group col-md-6'>
                  <label>Email</label>
                  <input type='email' placeholder='Email' class='form-control'>
                </div>
                <div class='form-group col-md-6'>
                  <label>Password</label>
                  <input type='password' placeholder='Password' class='form-control'>
                </div>
              </div>
              <div class='form-group'>
                <label>Address</label>
                <input type='text' placeholder='1234 Main St' class='form-control'>
              </div>
              <div class='form-group'>
                <label>Address 2</label>
                <input type='text' placeholder='Apartment, studio, or floor' class='form-control'>
              </div>
              <div class='form-row'>
                <div class='form-group col-md-6'>
                  <label>City</label>
                  <input type='text' class='form-control'>
                </div>
                <div class='form-group col-md-4'>
                  <label>State</label>
                  <select id='inputState' class='form-control default-select'>
                    <option selected=''>Choose...</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div class='form-group col-md-2'>
                  <label>Zip</label>
                  <input type='text' class='form-control'>
                </div>
              </div>
              <div class='form-group'>
                <div class='custom-control custom-checkbox'>
                  <input id='gridCheck' type='checkbox' class='custom-control-input'>
                  <label class='custom-control-label' for='gridCheck'> Check me out</label>
                </div>
              </div>
              <button class='btn btn-primary' type='submit'>Sign
                in
              </button>
            </form>
          </div>
        </div>
      </div>
    </tw-tabs>
    <!--    <div id='replyModal' class='modal fade'>-->
    <!--      <div class='modal-dialog modal-dialog-centered' role='document'>-->
    <!--        <div class='modal-content'>-->
    <!--          <div class='modal-header'>-->
    <!--            <h5 class='modal-title'>Post Reply</h5>-->
    <!--            <button type='button' class='close' data-dismiss='modal'><span>&times;</span></button>-->
    <!--          </div>-->
    <!--          <div class='modal-body'>-->
    <!--            <form>-->
    <!--              <textarea class='form-control' rows='4'>Message</textarea>-->
    <!--            </form>-->
    <!--          </div>-->
    <!--          <div class='modal-footer'>-->
    <!--            <button type='button' class='btn btn-danger light' data-dismiss='modal'>Close</button>-->
    <!--            <button type='button' class='btn btn-primary'>Reply</button>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  data() {
    return {
      tabs: [
        {
          label: 'Posts'
        },
        {
          label: 'About Me'
        },
        {
          label: 'Setting'
        }
      ]

    }
  }
}
</script>

<style scoped>

</style>
