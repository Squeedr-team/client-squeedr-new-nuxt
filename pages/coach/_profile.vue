<template>
  <div class="coach-profile">
    <the-coach-hero :heroData="profileData.hero" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileData: {
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
          heroVideoImage: '/coach-vide-image.jpg',
        },
        gallery: [],
        testimonials: [],
      },
    }
  },
}
</script>

<style>
</style>