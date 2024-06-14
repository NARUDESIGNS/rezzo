<script setup lang="ts">
import EyeCloseIcon from "@/assets/EyeCloseIcon.vue";
import EyeOpenIcon from "@/assets/EyeOpenIcon.vue";
import { ref } from "vue";
import InputText from "./InputText.vue";

defineProps<{
  /** Model value */
  modelValue?: string;
}>();

defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
}>();

defineOptions({
  inheritAttrs: false,
});

const type = ref("password");
const showPassword = () => (type.value = "text");
const hidePassword = () => (type.value = "password");
</script>

<template>
  <div :class="[$style.container, $attrs.class]">
    <InputText
      :type="type"
      :value="modelValue"
      v-bind="$attrs"
      :class="$style.input"
      @input="
        $emit(
          'update:modelValue',
          ($event.target as HTMLInputElement).value.trim()
        )
      "
    />
    <EyeCloseIcon
      v-if="type === 'password'"
      :class="$style.icon"
      @click="showPassword"
    />
    <EyeOpenIcon
      v-if="type === 'text'"
      :class="$style.icon"
      @click="hidePassword"
    />
  </div>
</template>

<style module lang="scss">
.container {
  width: 100%;
  position: relative;

  .icon {
    position: absolute;
    right: 17px;
    top: 14px;
    cursor: pointer;
  }

  .input {
    padding-right: 50px;
  }
}
</style>
