<script setup lang="ts">
import ArchiveIcon from "@/assets/ArchiveIcon.vue";
import BlueLogo from "@/assets/BlueLogo.vue";
import FileIcon from "@/assets/FileIcon.vue";
import HardDriveIcon from "@/assets/HardDriveIcon.vue";
import HashIcon from "@/assets/HashIcon.vue";
import HomeIcon from "@/assets/HomeIcon.vue";
import MenuIcon from "@/assets/MenuIcon.vue";
import WhiteLogo from "@/assets/WhiteLogo.vue";
import BaseModal from "@/components/base-modal/BaseModal.vue";
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

const showModal = ref(false);

const getIcon = (item: string) => {
  item = item.toLowerCase();
  switch (item) {
    case "home":
      return HomeIcon;
    case "create resume":
      return FileIcon;
    case "blogs":
      return ArchiveIcon;
    case "resources":
      return HardDriveIcon;
    case "about":
      return HashIcon;
    default:
      return HomeIcon;
  }
};
</script>

<template>
  <div :class="$style.wrap">
    <RouterLink to="/">
      <BlueLogo v-if="!darkMode" :class="$style.logo" />
      <WhiteLogo v-else :class="$style.logo" />
    </RouterLink>

    <button :class="$style.menu_btn" @click="showModal = true">
      <MenuIcon />
    </button>

    <nav :class="$style.nav">
      <ul :class="$style.nav_items">
        <RouterLink
          :to="item.route"
          v-for="(item, index) in navItems"
          :key="index"
          :class="[
            $style.item,
            {
              [$style.active]: item.route.name === activeTab,
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
  <!-- modal for mobile menu -->
  <BaseModal :visible="showModal" enable-close @close="showModal = false">
    <ul :class="$style.mobile_nav_items">
      <RouterLink
        :to="item.route"
        v-for="item in navItems"
        :key="item.caption"
        :class="[
          $style.mobile_menu_item,
          {
            [$style.active]: item.route.name === activeTab,
          },
        ]"
      >
        <li :class="$style.mobile_item">
          <span :class="$style.item_icon_wrap">
            <Component :is="getIcon(item.caption)" />
          </span>
          <p :class="$style.item_caption">{{ item.caption }}</p>
        </li>
      </RouterLink>
    </ul>
  </BaseModal>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid colors.use("light-gray");
  border-radius: 10px;
  margin: 30px 0;
  padding: 20px;
  position: sticky;
  top: 20px;
  background-color: colors.use("background-light");
  z-index: 1;

  .menu_btn {
    display: none;
  }

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
      &:focus {
        outline: none;
        color: colors.use("primary");
      }
      &:global(.router-link-active) {
        color: colors.use("primary");
      }
    }
  }
}

@media screen and (max-width: 850px) {
  @mixin focus-outline($state: "light-blue") {
    box-shadow: 0 0 0 2px colors.use($state);
    outline: none;
  }
  .wrap {
    padding: 10px 20px;
    .nav {
      display: none;
    }

    .menu_btn {
      display: block;
      border: none;
      padding: 7px;
      background: none;
      color: colors.use("dark-gray");
      cursor: pointer;
    }
  }

  .mobile_menu_item {
    color: colors.use("text");
    border-radius: 8px;
    display: block;

    &:focus,
    &:hover {
      @include focus-outline();
    }

    &:global(.router-link-active) {
      color: colors.use("text-light");
      background-color: colors.use("primary");
    }
  }

  .active {
    display: block;
    background-color: lighten($color: colors.use("light-gray"), $amount: 35);
    border-radius: 8px;

    & svg {
      color: colors.use("text-light");
    }
  }

  .mobile_item {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
    padding: 15px 30px;
    cursor: pointer;
    font-size: 0.85rem;

    &:hover {
      color: colors.use("primary");
      cursor: pointer;
      transition: 0.2s ease;
    }
    &:focus {
      outline: none;
      color: colors.use("primary");
    }

    .item_icon_wrap {
      display: flex;
      justify-content: center;

      svg {
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>
