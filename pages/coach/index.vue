<template>
  <div>
    <ul>
      <li v-for="profile in profilesData" :key="profile.id">
        <nuxt-link :to="'/coach/' + profile.slug">{{ profile }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profilesData: [
        {
          id: 1,
          slug: 'drussell',
          hero: {
            firstName: 'dianne',
            lastName: 'Russell',
            handle: 'drussell',
            bio: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sit deleniti nam quis similique, nesciunt officiis voluptate accusantium inventore, fugit laboriosam culpa dolorum perspiciatis. Quae facilis quisquam similique officiis, totam laudantium illum non voluptates et omnis id. Ullam labore exercitationem, enim ratione blanditiis distinctio deserunt soluta necessitatibus hic vel! Repudiandae.',
            email: 'email@email.com',
            figuers: [
              {
                text: 'Experiance years',
                figuer: '5',
              },
              {
                text: 'Happy Clients',
                figuer: '+100',
              },
              {
                text: 'Fitness Level',
                figuer: '3',
              },
              {
                text: 'Reg No',
                figuer: 'R2356',
              },
            ],
            heroVideo: '/video_preview_h264.mp4',
          },
          upcomingClasses: [
            {
              id: '1258',
              class_name: 'Class Name One',
              date: 'Nov 01, 2022',
              time: '14:00',
              duration: '6 H',
              location: 'Paris',
              price: '90',
              currency: '$',
              cover_image:
                '/personal-fitness-coach-photo-of-gorgeous-blonde-w-2021-08-30-02-16-22-utc.jpg',
              about:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quasi enim fugit cumque possimus fuga voluptatum mollitia, sit sint aliquam similique dolores vero non repellendus nihil explicabo facere quibusdam ipsa doloribus aspernatur earum neque optio et. Odio et voluptates sint, facilis quisquam aperiam numquam odit atque. Temporibus qui praesentium consequatur!',
            },
            {
              id: '222222',
              class_name: 'Class Name 2',
              date: 'Nov 01, 2022',
              time: '14:00',
              duration: '6 H',
              location: 'Paris',
              price: '90',
              currency: '$',
              cover_image:
                '/athletic-man-exercising-sit-ups-with-assistance-of-2022-10-24-23-54-16-utc.jpg',
              about:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quasi enim fugit cumque possimus fuga voluptatum mollitia, sit sint aliquam similique dolores vero non repellendus nihil explicabo facere quibusdam ipsa doloribus aspernatur earum neque optio et. Odio et voluptates sint, facilis quisquam aperiam numquam odit atque. Temporibus qui praesentium consequatur!',
            },
            {
              id: '33333333',
              class_name: 'Class Name 3',
              date: 'Nov 01, 2022',
              time: '14:00',
              duration: '6 H',
              location: 'Paris',
              price: '90',
              currency: '$',
              cover_image:
                '/personal-fitness-coach-photo-of-gorgeous-blonde-w-2021-08-30-02-16-22-utc.jpg',
              about:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quasi enim fugit cumque possimus fuga voluptatum mollitia, sit sint aliquam similique dolores vero non repellendus nihil explicabo facere quibusdam ipsa doloribus aspernatur earum neque optio et. Odio et voluptates sint, facilis quisquam aperiam numquam odit atque. Temporibus qui praesentium consequatur!',
            },
            {
              id: '44444444',
              class_name: 'Class Name One',
              date: 'Nov 01, 2022',
              time: '14:00',
              duration: '6 H',
              location: 'Paris',
              price: '90',
              currency: '$',
              cover_image:
                '/pregnant-woman-with-a-trainer-during-fitness-class-2022-03-10-22-11-21-utc.jpg',
              about:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quasi enim fugit cumque possimus fuga voluptatum mollitia, sit sint aliquam similique dolores vero non repellendus nihil explicabo facere quibusdam ipsa doloribus aspernatur earum neque optio et. Odio et voluptates sint, facilis quisquam aperiam numquam odit atque. Temporibus qui praesentium consequatur!',
            },
            {
              id: '5555555',
              class_name: 'Class Name One',
              date: 'Nov 01, 2022',
              time: '14:00',
              duration: '6 H',
              location: 'Paris',
              price: '90',
              currency: '$',
              cover_image:
                '/personal-fitness-coach-photo-of-gorgeous-blonde-w-2021-08-30-02-16-22-utc.jpg',
              about:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quasi enim fugit cumque possimus fuga voluptatum mollitia, sit sint aliquam similique dolores vero non repellendus nihil explicabo facere quibusdam ipsa doloribus aspernatur earum neque optio et. Odio et voluptates sint, facilis quisquam aperiam numquam odit atque. Temporibus qui praesentium consequatur!',
            },
            {
              id: '1616161',
              class_name: 'Class Name 2',
              date: 'Nov 01, 2022',
              time: '14:00',
              duration: '6 H',
              location: 'Paris',
              price: '90',
              currency: '$',
              cover_image:
                '/athletic-man-exercising-sit-ups-with-assistance-of-2022-10-24-23-54-16-utc.jpg',
              about:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quasi enim fugit cumque possimus fuga voluptatum mollitia, sit sint aliquam similique dolores vero non repellendus nihil explicabo facere quibusdam ipsa doloribus aspernatur earum neque optio et. Odio et voluptates sint, facilis quisquam aperiam numquam odit atque. Temporibus qui praesentium consequatur!',
            },
            {
              id: '1717171',
              class_name: 'Class Name 3',
              date: 'Nov 01, 2022',
              time: '14:00',
              duration: '6 H',
              location: 'Paris',
              price: '90',
              currency: '$',
              cover_image:
                '/personal-fitness-coach-photo-of-gorgeous-blonde-w-2021-08-30-02-16-22-utc.jpg',
              about:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quasi enim fugit cumque possimus fuga voluptatum mollitia, sit sint aliquam similique dolores vero non repellendus nihil explicabo facere quibusdam ipsa doloribus aspernatur earum neque optio et. Odio et voluptates sint, facilis quisquam aperiam numquam odit atque. Temporibus qui praesentium consequatur!',
            },
            {
              id: '666660055',
              class_name: 'Class Name One',
              date: 'Nov 01, 2022',
              time: '14:00',
              duration: '6 H',
              location: 'Paris',
              price: '90',
              currency: '$',
              cover_image:
                '/pregnant-woman-with-a-trainer-during-fitness-class-2022-03-10-22-11-21-utc.jpg',
              about:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quasi enim fugit cumque possimus fuga voluptatum mollitia, sit sint aliquam similique dolores vero non repellendus nihil explicabo facere quibusdam ipsa doloribus aspernatur earum neque optio et. Odio et voluptates sint, facilis quisquam aperiam numquam odit atque. Temporibus qui praesentium consequatur!',
            },
          ],
          gallery: [
            {
              type: 'image',
              file: '/training-with-coach-2022-04-11-23-18-04-utc.jpg',
              featured: true,
            },
            {
              type: 'video',
              file: '/video_preview_h264.mp4',
              featured: false,
            },
            {
              type: 'video',
              file: '/video_preview_h264 (1).mp4',
              featured: false,
            },
            {
              type: 'image',
              file: '/personal-fitness-coach-photo-of-gorgeous-blonde-w-2021-08-30-02-16-22-utc.jpg',
              featured: false,
            },
            {
              type: 'image',
              file: '/athletic-man-exercising-sit-ups-with-assistance-of-2022-10-24-23-54-16-utc.jpg',
              featured: false,
            },
          ],
          testimonials: [
            {
              name: 'Janne Cooper',
              jobTitle: 'Designer',
              avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
              text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ratione neque ipsum quae amet. Ipsam dolorem, minus dolores libero pariatur quaerat voluptate vero inventore quod?',
            },
            {
              name: 'Clark Biernacki',
              jobTitle: 'Fitness instractor',
              avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
              text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ratione neque ipsum quae amet. Ipsam dolorem, minus dolores libero pariatur quaerat voluptate vero inventore quod?',
            },
            {
              name: 'Alexis Holcombe',
              jobTitle: 'Hotel Manager',
              avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
              text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ratione neque ipsum quae amet. Ipsam dolorem, minus dolores libero pariatur quaerat voluptate vero inventore quod?',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style>
</style>