<template>
  <div class="data-table">
    <div v-if="loading || ajaxLoading" class="data-table-loading">
      <div class="data-table-loading-spinner"></div>
      <div class="data-table-loading-text">Loading Data</div>
    </div>
    <div v-else class="data-table-inner">
      <div v-if="header" class="flex gap-5 justify-between items-center data-table-control mb-4 mt-2">
        <div v-if="limitable" class="md:w-1/2 w-full">
          <div class="form-group">
            <label>
              Show
              <select
                v-model="itemsPerPage"
                class="border px-3 py-2 rounded-lg focus:border-primary focus:outline-none">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>
              </select>
              rows
            </label>
          </div>
        </div>
        <div v-if="searchable" class="md:w-1/2 w-full text-right">
          <div class="form-group">
            <label>
              <input
                v-model="query" type="text" class="border px-3 py-2 rounded-lg focus:border-primary focus:outline-none"
                placeholder="Search Records"
                @keyup="search(query)">
            </label>
          </div>
        </div>
        <div v-if="showFilters" class="col-auto ml-auto">
          Filters:
          <div class="table-filters d-inline-block">
            <div v-for="(option,f_idx) in filters" :key="f_idx" class="table-filter" @click="filter(option)">
              <span>{{ option.title }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table
          class="tw-table table-auto table-striped w-full"
          :class="{straight: !breakWords, 'table-hover': !!onClick}">
          <thead>
          <tr>
            <!-- Display Checkboxes If Requested -->
            <th v-if="selectable">
              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" @change="selectAll">
                <span class="custom-control-label"></span>
              </label>
            </th>

            <!-- Display Index If Requested -->
            <th
              v-if="index" class="sortable"
              :class="{sort: sortColumn === '#', 'asc': sortColumn === '#' && asc, 'desc': sortColumn === '#' && !asc}"
              @click="sortIndex()"
            >#
            </th>
            <!-- Display All Parsed Headers -->
            <template v-for="(th, s_index) in headers">
              <th
                v-if="th.show"

                :key="'th'+s_index"
                class="sortable"
                :class="{sort: sortColumn === th.name, 'asc': sortColumn === th.name && asc, 'desc': sortColumn === th.name && !asc}"
                @click="sort(th.name)"
              >{{ th.th }}
              </th>
            </template>

            <!-- Display Actions If Provided -->
            <th v-if="actions.length">Actions</th>
          </tr>
          </thead>
          <tbody v-if="paginatedItems.length">
          <!-- Loop Through All Parsed and Paginated Items -->
          <tr v-for="(item, i) in paginatedItems" :key="i">

            <!-- Display Checkboxes If Requested -->
            <th v-if="selectable">
              <div class="custom-control custom-checkbox" @click="select(item)">
                <input type="checkbox" class="custom-control-input" :checked="item.selected">
                <span class="custom-control-label"></span>
              </div>
            </th>

            <!-- Display Index If Requested -->
            <td v-if="index">{{ item.index + 1 }}</td>

            <!-- Display All Parsed Values -->
            <template v-for="(td, j) in item.details">
              <td
                v-if="td.show"
                :key="'td'+j"
                @click="click(item.row, td.value, td.name, i), columnClick(td.click, item.row, td.value, td.name, i)">
                <!-- <component :is="i+'Component'" v-if="value.render"></component> -->
                <span v-html="td.rendered != null ? td.rendered : '----'"></span>
              </td>
            </template>

            <!-- Diplay Actions If Provided -->
            <td v-if="item.buttons.length">
              <VDropdown
                placement='auto-end'
                :delay='{ show: 300, hide: 0 }'
              >
                <button
                  class='rounded-full w-10 h-10 hover:bg-primary-100 xl:rounded-2xl more-button'
                >
                  <font-awesome-icon icon='fa fa-ellipsis-h' class='xl:text-lg md:text-md text-sm'/>
                </button>

                <template #popper>
                  <div class='w-32 flex-col flex items-start'>
                    <template v-for="(button, j) in item.buttons">
                      <button
                        v-if="button.show"
                        :key="'button-'+j"
                        type="button"
                        class='text-secondary-600 hover:text-primary hover:bg-primary-200 py-2 px-4 w-full text-left'
                        :class="`btn-${button.color} btn-${button.size}`"
                        :disabled="button.disabled"
                        @click="button.action(item.row, item.index)"
                      >
                        {{ button.text }}
                      </button>
                    </template>
                  </div>
                </template>
              </VDropdown>
              <!-- Loop Through All Provided Actions -->

            </td>
          </tr>
          </tbody>
          <tbody v-else>
          <!-- Display Empty Message If No Items Are Rendered -->
          <tr>
            <td align="center" :colspan="headers.length + (actions.length ? 1 : 0) + (index ? 1 : 0)">No results</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div v-if="footer" class="flex flex-wrap gap-5 justify-between my-5">
        <div v-if="pageDetails">
          <div class="showing">
            Showing
            <!-- Current Page Starting Index -->
            {{ paginatedItems.length ? (itemsPerPage * (currentPage - 1)) + 1 : 0 }}
            to
            <!-- Current Page End Index -->
            {{ (itemsPerPage * (currentPage -1 )) + paginatedItems.length }}
            of
            <!-- All Items Provided -->
            {{ renderedItems.length }} items
          </div>
        </div>
        <div v-if="paginate">
          <pagination :total-count="pages" :current-page="currentPage" @change="paginate"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Pagination from "./Pagination";

    export default {
        name: 'DataTable',
        components: {Pagination},
        props: {
            url: {
                type: String,
                default: () => ''
            },
            // Whether Or Not To Use Ajax
            ajax: {
                type: Boolean,
                default: () => false
            },


            // Table Items
            data: {
                type: Array,
                default: () => []
            },
            // Action Buttons For Each Item
            actions: {
                type: Array,
                default: () => []
            },
            // Columns and Appropriate Data Assigment
            columns: {
                type: Array,
                default: () => []
            },
            filters: {
                type: Array,
                default: () => []
            },
            // Whether or Not Items Should Be Indexed
            index: {
                type: Boolean,
                default: () => true
            },
            // Set Loading Status
            loading: {
                type: Boolean,
                default: () => false
            },
            // Click Events For Each Cell
            onClick: {
                type: Function,
                default: () => {
                }
            },
            // Whether Or Not The Table Should Be Allowed To Break Elements
            breakWords: {
                type: Boolean,
                default: () => false
            },
            // Whether Or Not The Header Should Be Visible
            header: {
                type: Boolean,
                default: () => true
            },
            // Whether Or Not The Footer Should Be Visible
            footer: {
                type: Boolean,
                default: () => true
            },
            // Whether Or Not Searching Should Be Available
            searchable: {
                type: Boolean,
                default: () => true
            },
            // Whether Or Not Page Limitation Should Be Changeable
            limitable: {
                type: Boolean,
                default: () => true
            },
            // Whether Or Not Details Should Be Visible
            pageDetails: {
                type: Boolean,
                default: () => true
            },
            // Whether Or Not The Results Should Be Paginatable
            paginatable: {
                type: Boolean,
                default: () => true
            },
            // Whether Or Not Items Should Be Selctable
            selectable: {
                type: Boolean,
                default: () => false
            }
        },
        data() {
            return {
                // Items TO Display For Each Paginated Page
                itemsPerPage: 10,
                // Current Page Number In Pagination
                currentPage: 1,
                // Current Page Items
                paginatedItems: [],
                // Sort Order
                asc: "asc",
                // Column For Sorting
                sortColumn: null,
                // Search Query
                query: '',
                // Table Headers
                headers: [],
                // Mapped Data
                items: [],
                // Mapped Action Buttons
                buttons: [],
                // Loading State For Ajax Requests
                ajaxLoading: false,
                // Items To Be Displayed
                renderedItems: [],
                // Selected Items
                selected: [],
            }
        },
        computed: {
            // Total Number Of Pages For Pagination
            pages() {
                if (this.renderedItems.length > this.itemsPerPage) {
                    return Math.ceil(this.renderedItems.length / this.itemsPerPage);
                } else {
                    return 0;
                }
            },
            showFilters() {
                return Object.keys(this.filters).length > 0;
            }
        },
        watch: {
            currentPage(newValue) {
                this.paginatedItems = this.renderedItems.slice(this.itemsPerPage * (newValue - 1), (this.itemsPerPage * newValue));
            },
            itemsPerPage(newValue) {
                this.currentPage = 1;
                this.paginatedItems = this.renderedItems.slice(newValue * (this.currentPage - 1), (newValue * this.currentPage));
            },
            items(newValue) {
                this.getHeaders();
                this.renderedItems = this.mapItems(newValue);
                // Get All Items In Current Page
                this.paginatedItems = this.renderedItems.slice(this.itemsPerPage * (this.currentPage - 1), (this.itemsPerPage * this.currentPage));
                this.asc = true;
                this.sortIndex();
            },
            data(newValue) {
                this.items = newValue;
            },
            renderedItems(newValue) {
                this.paginatedItems = newValue.slice(this.itemsPerPage * (this.currentPage - 1), (this.itemsPerPage * this.currentPage));
            }
        },
        // Lifetime Events
        async mounted() {
            // Parse Headers
            this.getHeaders();
            // Set Default Sorting To Index
            // Asc will be converted to false so order will be in reverse
            this.asc = true;
            this.sortIndex();
            // Use Provided Data If Ajax Is Not Specified
            if (!this.ajax) {
                // Map Items From Provided Data
                this.items = this.data;
                // Get All Items In Current Page
                // this.paginatedItems = this.renderedItems.slice(this.itemsPerPage * (this.currentPage - 1), (this.itemsPerPage * this.currentPage));
            } else {
                // Get Data From Server Using Ajax
                this.ajaxLoading = true;
                await this.$axios
                    .get(this.url)
                    .then(response => {
                        if (!response.data.data) {
                            return this.error("Unable To Parse Data");
                        }
                        this.items = response.data.data;
                    })
                    .catch(() => {
                    });
                this.ajaxLoading = false;
            }
        },
        methods: {
            // Navigate To Provided Page
            // Arguments
            // 	Page: int
            paginate(page) {
                this.currentPage = page;
            },
            // Navigate To Next Page

            // Navigate To Last Page
            search(query) {

            },
            // Sort Items By Specified Column and Order
            // Arguments
            // 	Column: String
            // 	Order: String [asc, desc]
            sort(column) {
                if (column !== this.sortColumn) {
                    this.asc = true;
                } else {
                    this.asc = !this.asc;
                }
                this.sortColumn = column;
                this.currentPage = 1;
            },
            sortIndex(asc) {
                this.asc = this.sortColumn === '#' ? !this.asc : true;
                this.sortColumn = '#';
                this.currentPage = 1;
            },
            filter(filter) {
                this.currentPage = 1;
                this.sortIndex(false);
            },
            getHeaders() {
                this.headers = this.columns.map((item) => ({name: item.name, th: item.th, show: item.show !== false}));
            },
            mapItems(items) {
                items = items.map((item, index) => {
                    // Row Item
                    const row = {
                        row: item,
                        details: [],
                        index,
                        buttons: [],
                        selected: !!this.selected.find(a => a.index === index)
                    };
                    // Get Provided Columns
                    this.columns.forEach((column) => {

                        row.details.push({
                            // Item Column Name
                            name: column.name,
                            // Table Header Title
                            th: column.th,
                            // Provided Value
                            value: item[column.name],
                            // Decide Value Depending On Whether Render Method Is Provided
                            rendered: column.render ? column.render(item, item[column.name], index) : item[column.name],
                            // Origin Item Row
                            row: item,
                            // Whether Or Not To Display Item
                            show: column.show !== false,
                            // Click Event For Column
                            click: column.click
                        });
                    });
                    // Get Provided Actions
                    this.actions.forEach((button) => {
                        row.buttons.push({
                            // Spread Provided Button Properties
                            ...button,
                            // Decide Visibility Depending On Whether Show Method Is Provided
                            // Default: true
                            show: button.show ? button.show(item, index) : true,
                            disabled: button.disabled ? button.disabled(item, index) : false
                        });
                    });
                    return row;
                });
                return items;
            },
            click(row, cell, name, index) {
                if (this.onClick) {
                    this.onClick(...arguments);
                }
            },
            columnClick(action, row, cell, name, index) {
                if (action) {
                    action(row, cell, name, index);
                }
            },
            selectAll(event) {
                if (event.target.checked) {
                    this.selected = [];
                    this.renderedItems.forEach(item => {
                        item.selected = true;
                        this.selected.push(item);
                    });
                } else {
                    this.selected = [];
                    this.renderedItems.forEach(item => {
                        item.selected = false;
                    });
                }
            },
            select(item) {
                const index = this.selected.findIndex(a => a.index === item.index);
                if (index > -1) {
                    item.selected = false;
                    this.selected.splice(index, 1);
                } else {
                    item.selected = true;
                    this.selected.push(item);
                }
            },

            // Alerts

        }
    }
</script>
