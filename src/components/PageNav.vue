<script setup lang="ts">
import BlueLogo from "@/assets/BlueLogo.vue";
import WhiteLogo from "@/assets/WhiteLogo.vue";
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

defineProps<{
  darkMode?: boolean;
}>();

const router = useRouter();
const route = useRoute();
const activeTab = ref(route.name);

const navItems = reactive([
  {
    caption: "HOME",
    onClick: () => router.push({ name: "home" }),
  },
  {
    caption: "MY RESUME",
    onClick: () => router.push({ name: "create-resume" }),
  },
  {
    caption: "BLOG",
    onClick: () => router.push({ name: "blogs" }),
  },
  {
    caption: "RESOURCES",
    onClick: () => router.push({ name: "resources" }),
  },
  {
    caption: "ABOUT",
    onClick: () => router.push({ name: "about" }),
  },
]);
</script>

<template>
  <div :class="$style.wrap">
    <BlueLogo v-if="!darkMode" :class="$style.logo" />
    <WhiteLogo v-else :class="$style.logo" />

    <nav :class="$style.nav">
      <ul :class="$style.nav_items">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          @click="item.onClick"
          :class="[
            $style.item,
            {
              [$style.active]: item.caption.toLowerCase() == activeTab,
            },
          ]"
        >
          {{ item.caption }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

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
    width: 70%;
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
    }

    .active {
      color: colors.use("primary");
    }
  }
}
</style>
