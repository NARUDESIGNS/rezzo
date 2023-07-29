<script setup lang="ts">
import EyeClose from "@/assets/EyeClose.vue";
import EyeOpen from "@/assets/EyeOpen.vue";
import { ref } from "vue";
import InputText from "./InputText.vue";

defineOptions({
  inheritAttrs: false,
});

defineProps<{
  modelValue?: string;
}>();

defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
}>();

const type = ref("password");
const showPassword = () => (type.value = "text");
const hidePassword = () => (type.value = "password");
</script>

<template>
  <div :class="[$style.container, $attrs.class]">
    <InputText
      :type="type"
      :value="modelValue"
      @input="
        $emit(
          'update:modelValue',
          ($event.target as HTMLInputElement).value.trim()
        )
      "
      v-bind="$attrs"
      :class="$style.input"
    />
    <EyeClose
      v-if="type === 'password'"
      @click="showPassword"
      :class="$style.icon"
    />
    <EyeOpen
      v-if="type === 'text'"
      @click="hidePassword"
      :class="$style.icon"
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
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .input {
    padding-right: 50px;
  }
}
</style>
