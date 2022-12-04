<template>
  <div class='data-table'>
    <div v-if='loading' class='data-table-loading'>
      <div class='data-table-loading-spinner'></div>
      <div class='data-table-loading-text'>Loading Data</div>
    </div>
    <div v-else class='data-table-inner'>
      <div v-if='header' class='flex flex-wrap gap-y-5 justify-between items-center data-table-control mb-4 mt-2'>
        <div v-if='limitable' class='md:w-1/2 w-full'>
          <div class='form-group'>
            <label>
              Show
              <select
                v-model='itemsPerPage'
                class='border px-3 py-2 rounded-lg focus:border-primary focus:outline-none'>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
              </select>
              rows
            </label>
          </div>
        </div>
        <div v-if='searchable' class='md:w-1/2 w-full md:text-right'>
          <div class='form-group'>
            <label>
              <input
                v-model='query' type='text' class='border px-3 py-2 rounded-lg focus:border-primary focus:outline-none'
                placeholder='Search Records'
                @keyup='search(query)'>
            </label>
          </div>
        </div>
        <div v-if='showFilters' class='col-auto ml-auto'>
          Filters:
          <div class='table-filters d-inline-block'>
            <div v-for='(option,f_idx) in filters' :key='f_idx' class='table-filter' @click='filter(option)'>
              <span>{{ option.title }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class='overflow-x-auto mt-2'>
        <table
          class='tw-table table-auto  w-full'
          :class="{straight: !breakWords, 'table-striped':stripe}">
          <thead>
          <tr>
            <template v-for='(th, s_index) in headers'>
              <th
                :key="'th'+s_index"
                :class='th.thClass'
                :style='th.thStyle'
                @click='sort(th.name)'
              >
                <div class='flex justify-between items-center'>
                  <span class='flex-1'>
                     <slot
                       :name='`head(${th.name})`'
                       :item='th'
                       :index='s_index'
                     >
                  <span>{{ th.th }}</span>
                </slot>
                  </span>
                  <div v-if='th.sortable'>
                    <font-awesome-icon
                      v-if='sortColumn === th.name && asc' icon='fa fa-sort-up'
                      class='text-sm'></font-awesome-icon>
                    <font-awesome-icon
                      v-else-if='sortColumn === th.name && !asc' icon='fa fa-sort-down'
                      class='text-sm'></font-awesome-icon>
                    <font-awesome-icon v-else icon='fa fa-sort' class='text-sm text-secondary-300'></font-awesome-icon>
                  </div>
                </div>
              </th>
            </template>
          </tr>
          </thead>
          <tbody v-if='data.length'>
          <tr v-for='(item, i) in data' :key='i' :class="{'border-t':bordered}">
            <template v-for='(td, j) in headers'>
              <td
                :key="'td'+j"
              >
                <slot
                  :name='`cell(${td.name})`'
                  :item='item'
                  :index='i'
                >
                  <span>{{ item[td.name] }}</span>
                </slot>
              </td>
            </template>
          </tr>
          </tbody>
          <tbody v-else>
          <!-- Display Empty Message If No Items Are Rendered -->
          <tr>
            <td align='center' :colspan='headers.length'>No results</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div v-if='footer' class='flex flex-wrap gap-5 justify-end my-5'>
        <div v-if='paginate'>
          <pagination :total-count='totalCount' :current-page='currentPage' :sibling-count='1' @change='paginate' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from './Pagination'

export default {
  name: 'DataTable',
  components: { Pagination },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Array,
      default: () => []
    },
    filters: {
      type: Array,
      default: () => []
    },

    breakWords: {
      type: Boolean,
      default: () => false
    },
    header: {
      type: Boolean,
      default: () => true
    },
    footer: {
      type: Boolean,
      default: () => true
    },
    searchable: {
      type: Boolean,
      default: () => true
    },
    limitable: {
      type: Boolean,
      default: () => true
    },

    pageDetails: {
      type: Boolean,
      default: () => true
    },
    paginatable: {
      type: Boolean,
      default: () => true
    },
    stripe: {
      type: Boolean,
      default: () => true
    },
    bordered: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      itemsPerPage: 10,
      currentPage: 1,
      asc: false,
      sortColumn: null,
      totalCount: 3,
      query: '',
      loading: false
    }
  },
  computed: {

    showFilters() {
      return Object.keys(this.filters).length > 0
    }
  },

  async mounted() {

  },
  methods: {

    paginate(page) {
      this.currentPage = page
    },

    search(query) {

    },
    sort(name) {
      this.sortColumn = name
      this.asc = !this.asc
    },
    columnClick(action, row, cell, name, index) {
      if (action) {
        action(row, cell, name, index)
      }
    }
  }
}
</script>
