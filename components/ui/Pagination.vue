<template>
  <div v-if='!(currentPage === 0 || paginationRange.length < 2)' class='flex items-center'
  >
    <button
      :disabled='currentPage=== 1'
      class='p-2 px-3 rounded-lg'
      @click='onPrevious'
    >
      <font-awesome-icon icon='fa fa-chevron-left' />
    </button>
    <template v-for='(pageNumber,idx) in paginationRange'>
      <div v-if='pageNumber === DOTS' :key="'d'+idx">&#8230;</div>
      <button
        v-else
        :key="'b'+idx"
        :class="pageNumber=== currentPage ? 'bg-primary text-white' : 'bg-transparent'"
        class='p-2 px-3 rounded-lg'
        @click="$emit('change',pageNumber)"
      >
        {{ pageNumber }}
      </button>
    </template>
    <button
      :disabled='currentPage=== lastPage'
      class='p-2 px-3 rounded-lg'
      @click='onNext'
    >
      <font-awesome-icon icon='fa fa-chevron-right' />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      default: 0
    },
    totalCount: {
      type: Number,
      default: 0
    },
    siblingCount: {
      type: Number,
      default: 3
    },
    pageSize: {
      type: Number,
      default: 1
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      DOTS: '...'
    }
  },
  computed: {
    paginationRange() {
      const totalPageCount = Math.ceil(this.totalCount / this.pageSize)

      // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
      const totalPageNumbers = this.siblingCount + 5

      /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
      */
      if (totalPageNumbers >= totalPageCount) {
        return this.range(1, totalPageCount)
      }

      const leftSiblingIndex = Math.max(this.currentPage - this.siblingCount, 1)
      const rightSiblingIndex = Math.min(
        this.currentPage + this.siblingCount,
        totalPageCount
      )

      /*
      We do not want to show dots if there is only one position left
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
      */
      const shouldShowLeftDots = leftSiblingIndex > 2
      const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

      const firstPageIndex = 1
      const lastPageIndex = totalPageCount

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * this.siblingCount
        const leftRange = this.range(1, leftItemCount)

        return [...leftRange, this.DOTS, totalPageCount]
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * this.siblingCount
        const rightRange = this.range(
          totalPageCount - rightItemCount + 1,
          totalPageCount
        )
        return [firstPageIndex, this.DOTS, ...rightRange]
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = this.range(leftSiblingIndex, rightSiblingIndex)
        return [firstPageIndex, this.DOTS, ...middleRange, this.DOTS, lastPageIndex]
      }
      return []
    },
    lastPage() {
      return this.paginationRange[this.paginationRange.length - 1]
    }
  },
  methods: {
    onNext() {
      this.$emit('change', this.currentPage + 1)
    },
    onPrevious() {
      this.$emit('change', this.currentPage - 1)
    },
    range(start, end) {
      const length = end - start + 1
      return Array.from({ length }, (_, idx) => idx + start)
    }

  }
}
</script>

<style scoped>

</style>
