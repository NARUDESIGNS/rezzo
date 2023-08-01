<script setup lang="ts">
import SearchIcon from "@/assets/SearchIcon.vue";
import InputText from "@/components/base-input/InputText.vue";

defineOptions({
  inheritAttrs: false,
});

defineProps<{
  modelValue?: string;
}>();

defineEmits<{
  (e: "update:modelValue", modelValue: string): void;
}>();
</script>

<template>
  <div :class="[$style.container, $attrs.class]">
    <InputText
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
    <SearchIcon :class="$style.icon" />
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
