<template>
  <span class='score'>
    <div class='score-wrap' ref='score'>
        <span class='stars-active' :style="'width:'+rating*20+'%'">
           <FontAwesomeIcon icon='fa-solid fa-star' class='text-warning' />
        <FontAwesomeIcon icon='fa-solid fa-star' class='text-warning' />
        <FontAwesomeIcon icon='fa-solid fa-star' class='text-warning' />
        <FontAwesomeIcon icon='fa-solid fa-star' class='text-warning' />
        <FontAwesomeIcon icon='fa-solid fa-star' class='text-warning' />
        </span>
<span class='stars-inactive flex'>
  <FontAwesomeIcon icon='fa-regular fa-star' class='text-warning' />
        <FontAwesomeIcon icon='fa-regular fa-star' class='text-warning' />
        <FontAwesomeIcon icon='fa-regular fa-star' class='text-warning' />
        <FontAwesomeIcon icon='fa-regular fa-star' class='text-warning' />
        <FontAwesomeIcon icon='fa-regular fa-star' class='text-warning' />
        </span>
</div>
</span>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    rating: {
      type: Number,
      default: 0
    }
  },
}
</script>
<style lang='scss'>
.score {
  display: block;
  font-size: 14px;
  position: relative;
  overflow: hidden;
}

.score-wrap {
  display: inline-block;
  position: relative;
  height: 19px;

}

.score .stars-active {
  position: relative;
  z-index: 10;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
}

.score .stars-inactive {
  color: grey;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-text-stroke: initial;
  /* overflow: hidden; */
}
</style>
