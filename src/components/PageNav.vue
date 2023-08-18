<script setup lang="ts">
import BlueLogo from "@/assets/BlueLogo.vue";
import WhiteLogo from "@/assets/WhiteLogo.vue";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";

defineProps<{
  darkMode?: boolean;
}>();

const route = useRoute();
const activeTab = ref(route.name);

const navItems = reactive([
  {
    caption: "HOME",
    route: { name: "home" },
  },
  {
    caption: "CREATE RESUME",
    route: { name: "create-resume" },
  },
  {
    caption: "BLOGS",
    route: { name: "blogs" },
  },
  {
    caption: "RESOURCES",
    route: { name: "resources" },
  },
  {
    caption: "ABOUT",
    route: { name: "about" },
  },
]);
</script>

<template>
  <div :class="$style.wrap">
    <BlueLogo v-if="!darkMode" :class="$style.logo" />
    <WhiteLogo v-else :class="$style.logo" />

    <nav :class="$style.nav">
      <ul :class="$style.nav_items">
        <RouterLink
          :to="item.route"
          v-for="(item, index) in navItems"
          :key="index"
          :class="[
            $style.item,
            {
              [$style.active]: item.caption.toLowerCase() == activeTab,
            },
          ]"
        >
          <li>
            {{ item.caption }}
          </li>
        </RouterLink>
      </ul>
    </nav>
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid colors.use("light-gray");
  border-radius: 10px;
  margin: 20px 0;
  padding: 30px 20px;
  position: sticky;
  top: 20px;
  background-color: colors.use("background-light");

  .nav {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav_items {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
    // margin-left: auto; // force nav items to the right
    list-style-type: none;

    .item {
      font-size: 0.9rem;
      font-weight: 600;
      color: colors.use("text");

      &:hover {
        color: colors.use("primary");
        cursor: pointer;
        transition: 0.2s ease;
      }
      &:global(.router-link-active) {
        color: colors.use("primary");
      }
    }
  }
}
</style>
