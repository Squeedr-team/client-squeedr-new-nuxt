<template>
  <div class="sidebar">
    <div class="logo">
      <nuxt-link to="/" class="w-32">
        <Logo/>
      </nuxt-link>
    </div>
    <div class="sidebar-panel">
      <ul>
        <li v-for="(menu,idx) in menus" :key="idx" class="menu-item">
          <template v-if="!menu.children">
            <nuxt-link :to="{name:menu.pathName}">
              {{menu.name}}
            </nuxt-link>
          </template>
          <template v-else>
            <button class="menu-item-btn" :class="{'active':menu.open}" @click="menu.open=!menu.open">
              <i :class="menu.icon"></i><span>{{menu.name}}</span>
            </button>
            <expand>
              <ul v-show="menu.open">
                <li v-for="(sub_menu,sub_idx) in menu.children" :key="sub_idx" class="sub-menu-item">
                  <nuxt-link :to="{name:sub_menu.pathName}">
                    {{sub_menu.name}}
                  </nuxt-link>
                </li>
              </ul>
            </expand>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import Expand from "../ui/expand";
    import Logo from "./Logo";

    export default {
        name: "Sidebar",
        components: {Logo, Expand},
        data() {
            return {
                panel: false,
                menus: [
                    {
                        name: 'Dashboard',
                        icon:'fi flaticon-381-networking',
                        open: false,
                        children: [{
                            name: 'Food Menu',
                            pathName: 'food-menu'
                        }]
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
  @import "../../assets/styles/sidebar.scss";
</style>
