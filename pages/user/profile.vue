<template>
  <div>
    <Breadcumb
      class='sm:p-5 p-2'
      :routes='[
                 {name:"App",path:"#"},
                 {name:"Profile",path:"/user/profile"},
               ]'
    />
    <div class='sm:m-5 m-3 p-3 sm:p-5'>
      <div class='flex'>
        <div class='lg:w-full bg-white px-3 py-3 rounded-2xl'>
          <div class='profile-card'>
            <div class='cover-photo' :style='{backgroundImage:`url(${user.cover})`}'>
            </div>
            <div class='py-4 px-5 flex'>
              <div class='profile-photo'>
                <img :src='user.profile' class='rounded-full shadow-md border' alt=''>
              </div>
              <div class='flex flex-1'>
                <div class='px-3 pt-2'>
                  <h4 class='text-primary mb-0 text-lg'>Mitchell C. Shay</h4>
                  <p class='text-secondary-600'>UX / UI Designer</p>
                </div>
                <div class='px-2 pt-2'>
                  <h4 class='text-lg mb-0'>info@example.com</h4>
                </div>
                <div class='ml-auto'>
                  <VDropdown
                    placement='bottom-end'
                    :delay='{ show: 300, hide: 100 }'
                  >
                    <button
                      class='rounded-full w-10 h-10 hover:bg-primary hover:text-white xl:rounded-2xl more-button'
                    >
                      <font-awesome-icon icon='fa fa-ellipsis-h' class='xl:text-lg md:text-md text-sm' />
                    </button>

                    <template #popper>
                      <div class='w-52 flex-col flex items-start'>
                        <button
                          type='button'
                          class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                        >
                          <font-awesome-icon icon='fa fa-user-circle' class='mr-1'/> View profile
                        </button>
                        <button
                          type='button'
                          class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                        >
                          <font-awesome-icon icon='fa fa-users' class='mr-1'/> Add to close friends
                        </button>
                        <button
                          type='button'
                          class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                        >
                          <font-awesome-icon icon='fa fa-plus' class='mr-1'/>  Add to group
                        </button>
                        <button
                          type='button'
                          class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                        >
                          <font-awesome-icon icon='fa fa-ban' class='mr-1'/> Block
                        </button>
                      </div>
                    </template>
                  </VDropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='col-xl-4'>
          <div class='card'>
            <div class='card-body'>
              <div class='profile-statistics mb-5'>
                <div class='text-center'>
                  <div class='row'>
                    <div class='col'>
                      <h3 class='m-b-0'>150</h3><span>Follower</span>
                    </div>
                    <div class='col'>
                      <h3 class='m-b-0'>140</h3><span>Place Stay</span>
                    </div>
                    <div class='col'>
                      <h3 class='m-b-0'>45</h3><span>Reviews</span>
                    </div>
                  </div>
                  <div class='mt-4'>
                    <button class='btn btn-primary mb-1 mr-1'>Follow</button>
                    <button class='btn btn-primary mb-1' data-toggle='modal' data-target='#sendMessageModal'>Send
                      Message
                    </button>
                  </div>
                </div>
                <!-- Modal -->
                <div class='modal fade' id='sendMessageModal'>
                  <div class='modal-dialog modal-dialog-centered' role='document'>
                    <div class='modal-content'>
                      <div class='modal-header'>
                        <h5 class='modal-title'>Send Message</h5>
                        <button type='button' class='close' data-dismiss='modal'><span>&times;</span></button>
                      </div>
                      <div class='modal-body'>
                        <form class='comment-form'>
                          <div class='row'>
                            <div class='col-lg-6'>
                              <div class='form-group'>
                                <label class='text-black font-w600'>Name <span class='required'>*</span></label>
                                <input type='text' class='form-control' value='Author' name='Author'
                                       placeholder='Author'>
                              </div>
                            </div>
                            <div class='col-lg-6'>
                              <div class='form-group'>
                                <label class='text-black font-w600'>Email <span class='required'>*</span></label>
                                <input type='text' class='form-control' value='Email' placeholder='Email' name='Email'>
                              </div>
                            </div>
                            <div class='col-lg-12'>
                              <div class='form-group'>
                                <label class='text-black font-w600'>Comment</label>
                                <textarea rows='8' class='form-control' name='comment' placeholder='Comment'></textarea>
                              </div>
                            </div>
                            <div class='col-lg-12'>
                              <div class='form-group mb-0'>
                                <input type='submit' value='Post Comment' class='submit btn btn-primary' name='submit'>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='profile-blog mb-5'>
                <h5 class='text-primary d-inline'>Today Highlights</h5><a class='pull-right f-s-16'>More</a>
                <img src='images/profile/1.jpg' alt='' class='img-fluid mt-4 mb-4 w-100'>
                <h4><a href='post-details.html' class='text-black'>Darwin Creative Agency Theme</a></h4>
                <p class='mb-0'>A small river named Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
                  mouth.</p>
              </div>
              <div class='profile-interest mb-5'>
                <h5 class='text-primary d-inline'>Interest</h5>
                <div class='row mt-4 sp4' id='lightgallery'>
                  <a href='images/profile/2.jpg' data-exthumbimage='images/profile/2.jpg'
                     data-src='images/profile/2.jpg' class='mb-1 col-lg-4 col-xl-4 col-sm-4 col-6'>
                    <img src='images/profile/2.jpg' alt='' class='img-fluid'>
                  </a>
                  <a href='images/profile/3.jpg' data-exthumbimage='images/profile/3.jpg'
                     data-src='images/profile/3.jpg' class='mb-1 col-lg-4 col-xl-4 col-sm-4 col-6'>
                    <img src='images/profile/3.jpg' alt='' class='img-fluid'>
                  </a>
                  <a href='images/profile/4.jpg' data-exthumbimage='images/profile/4.jpg'
                     data-src='images/profile/4.jpg' class='mb-1 col-lg-4 col-xl-4 col-sm-4 col-6'>
                    <img src='images/profile/4.jpg' alt='' class='img-fluid'>
                  </a>
                  <a href='images/profile/3.jpg' data-exthumbimage='images/profile/3.jpg'
                     data-src='images/profile/3.jpg' class='mb-1 col-lg-4 col-xl-4 col-sm-4 col-6'>
                    <img src='images/profile/3.jpg' alt='' class='img-fluid'>
                  </a>
                  <a href='images/profile/4.jpg' data-exthumbimage='images/profile/4.jpg'
                     data-src='images/profile/4.jpg' class='mb-1 col-lg-4 col-xl-4 col-sm-4 col-6'>
                    <img src='images/profile/4.jpg' alt='' class='img-fluid'>
                  </a>
                  <a href='images/profile/2.jpg' data-exthumbimage='images/profile/2.jpg'
                     data-src='images/profile/2.jpg' class='mb-1 col-lg-4 col-xl-4 col-sm-4 col-6'>
                    <img src='images/profile/2.jpg' alt='' class='img-fluid'>
                  </a>
                </div>
              </div>
              <div class='profile-news'>
                <h5 class='text-primary d-inline'>Our Latest News</h5>
                <div class='media pt-3 pb-3'>
                  <img src='images/profile/5.jpg' alt='image' class='mr-3 rounded' width='75'>
                  <div class='media-body'>
                    <h5 class='m-b-5'><a href='post-details.html' class='text-black'>Collection of textile samples</a>
                    </h5>
                    <p class='mb-0'>I shared this on my fb wall a few months back, and I thought.</p>
                  </div>
                </div>
                <div class='media pt-3 pb-3'>
                  <img src='images/profile/6.jpg' alt='image' class='mr-3 rounded' width='75'>
                  <div class='media-body'>
                    <h5 class='m-b-5'><a href='post-details.html' class='text-black'>Collection of textile samples</a>
                    </h5>
                    <p class='mb-0'>I shared this on my fb wall a few months back, and I thought.</p>
                  </div>
                </div>
                <div class='media pt-3 pb-3'>
                  <img src='images/profile/7.jpg' alt='image' class='mr-3 rounded' width='75'>
                  <div class='media-body'>
                    <h5 class='m-b-5'><a href='post-details.html' class='text-black'>Collection of textile samples</a>
                    </h5>
                    <p class='mb-0'>I shared this on my fb wall a few months back, and I thought.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='col-xl-8'>
          <div class='card'>
            <div class='card-body'>
              <div class='profile-tab'>
                <div class='custom-tab-1'>
                  <ul class='nav nav-tabs'>
                    <li class='nav-item'><a href='#my-posts' data-toggle='tab' class='nav-link active show'>Posts</a>
                    </li>
                    <li class='nav-item'><a href='#about-me' data-toggle='tab' class='nav-link'>About Me</a>
                    </li>
                    <li class='nav-item'><a href='#profile-settings' data-toggle='tab' class='nav-link'>Setting</a>
                    </li>
                  </ul>
                  <div class='tab-content'>
                    <div id='my-posts' class='tab-pane fade active show'>
                      <div class='my-post-content pt-3'>
                        <div class='post-input'>
                          <textarea name='textarea' id='textarea' cols='30' rows='5' class='form-control bg-transparent'
                                    placeholder='Please type what you want....'></textarea>
                          <button class='btn btn-primary light px-3'><i class='fa fa-link'></i></button>
                          <button class='btn btn-primary light mr-1 px-3'><i class='fa fa-camera'></i></button>
                          <button class='btn btn-primary'>Post</button>
                        </div>
                        <div class='profile-uoloaded-post border-bottom-1 pb-5'>
                          <img src='images/profile/8.jpg' alt='' class='img-fluid'>
                          <a class='post-title' href='post-details.html'><h3 class='text-black'>Collection of textile
                            samples lay spread</h3></a>
                          <p>A wonderful serenity has take possession of my entire soul like these sweet morning of
                            spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul
                            like these sweet morning
                            of spare which enjoy whole heart.</p>
                          <button class='btn btn-primary mr-2'><span class='mr-2'><i
                            class='fa fa-heart'></i></span>Like
                          </button>
                          <button class='btn btn-secondary' data-toggle='modal' data-target='#replyModal'><span
                            class='mr-2'><i
                            class='fa fa-reply'></i></span>Reply
                          </button>
                        </div>
                        <div class='profile-uoloaded-post border-bottom-1 pb-5'>
                          <img src='images/profile/9.jpg' alt='' class='img-fluid'>
                          <a class='post-title' href='post-details.html'><h3 class='text-black'>Collection of textile
                            samples lay spread</h3></a>
                          <p>A wonderful serenity has take possession of my entire soul like these sweet morning of
                            spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul
                            like these sweet morning
                            of spare which enjoy whole heart.</p>
                          <button class='btn btn-primary mr-2'><span class='mr-2'><i
                            class='fa fa-heart'></i></span>Like
                          </button>
                          <button class='btn btn-secondary' data-toggle='modal' data-target='#replyModal'><span
                            class='mr-2'><i
                            class='fa fa-reply'></i></span>Reply
                          </button>
                        </div>
                        <div class='profile-uoloaded-post pb-3'>
                          <img src='images/profile/8.jpg' alt='' class='img-fluid'>
                          <a class='post-title' href='post-details.html'><h3 class='text-black'>Collection of textile
                            samples lay spread</h3></a>
                          <p>A wonderful serenity has take possession of my entire soul like these sweet morning of
                            spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul
                            like these sweet morning
                            of spare which enjoy whole heart.</p>
                          <button class='btn btn-primary mr-2'><span class='mr-2'><i
                            class='fa fa-heart'></i></span>Like
                          </button>
                          <button class='btn btn-secondary' data-toggle='modal' data-target='#replyModal'><span
                            class='mr-2'><i
                            class='fa fa-reply'></i></span>Reply
                          </button>
                        </div>
                      </div>
                    </div>
                    <div id='about-me' class='tab-pane fade'>
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
                    <div id='profile-settings' class='tab-pane fade'>
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
                                <select class='form-control default-select' id='inputState'>
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
                                <input type='checkbox' class='custom-control-input' id='gridCheck'>
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
                  </div>
                </div>
                <!-- Modal -->
                <div class='modal fade' id='replyModal'>
                  <div class='modal-dialog modal-dialog-centered' role='document'>
                    <div class='modal-content'>
                      <div class='modal-header'>
                        <h5 class='modal-title'>Post Reply</h5>
                        <button type='button' class='close' data-dismiss='modal'><span>&times;</span></button>
                      </div>
                      <div class='modal-body'>
                        <form>
                          <textarea class='form-control' rows='4'>Message</textarea>
                        </form>
                      </div>
                      <div class='modal-footer'>
                        <button type='button' class='btn btn-danger light' data-dismiss='modal'>Close</button>
                        <button type='button' class='btn btn-primary'>Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'dashboardLayout',
  data() {
    return {
      user: {
        cover: require('~/assets/images/profile/cover.jpg'),
        profile: require('~/assets/images/profile/profile.png'),
        name: 'Mitchell C. Shay',
        job: 'UX / UI Designer',
        email: 'info@example.com',
        follower: 150,
        stay: 140,
        reviews: 45,
        interests:[
          {image:require('~/assets/images/profile/2.jpg')}
        ],
        posts: [
          {
            title: 'Collection of textile samples lay spread',
            description: 'A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.',
            image: require('~/assets/images/profile/8.jpg')
          },
          {
            title: 'Collection of textile samples lay spread',
            description: 'A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.',
            image: require('~/assets/images/profile/8.jpg')
          }
        ],
        highlights: [
          {
            title: 'Darwin Creative Agency Theme',
            description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
            image: require('~/assets/images/profile/1.jpg')
          }
        ],
        news:[
          {
            title: 'Collection of textile samples',
            description: 'I shared this on my fb wall a few months back, and I thought.',
            image: require('~/assets/images/profile/5.jpg')
          },
          {
            title: 'Collection of textile samples',
            description: 'I shared this on my fb wall a few months back, and I thought.',
            image: require('~/assets/images/profile/5.jpg')
          },
          {
            title: 'Collection of textile samples',
            description: 'I shared this on my fb wall a few months back, and I thought.',
            image: require('~/assets/images/profile/5.jpg')
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.profile-card {
  .cover-photo {
    background-size: cover;
    background-position: center;
    min-height: 250px;
    width: 100%;
    background-repeat: no-repeat;
  }
  .profile-photo {
    max-width: 100px;
    position: relative;
    z-index: 1;
    margin-top: -40px;
    margin-right: 10px;
  }
}
</style>
