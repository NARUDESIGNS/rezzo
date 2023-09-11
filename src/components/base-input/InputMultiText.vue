<script setup lang="ts">
import XIcon from "@/assets/XIcon.vue";
import ButtonLabel from "@/components/base-button/ButtonLabel.vue";
import { capitalize, computed, useCssModule } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  data: string[];
  required?: boolean;
  error?: boolean;
  errorMsg?: string;
  disabled?: boolean;
  placeholder?: string;
  showButton?: boolean;
}>();

const emit = defineEmits<{
  (e: "items-added", data: string[]): void;
  (e: "update:data", data: string[]): void;
  (e: "input-removed", inputLabel: string): void;
}>();

const $style = useCssModule();
const styles = computed(() => ({
  [$style.disabled]: props.disabled,
  [$style.error]: props.error,
}));

const items = computed<string[]>(() => props.data || []);
const removeItem = (index: number) => items.value.splice(index, 1);

const emitData = () => {
  emit("update:data", items.value);
};
</script>

<template>
  <div :class="$style.container">
    <template v-if="items.length">
      <div :class="$style.item_wrap">
        <div v-for="(item, index) in items" :key="index" :class="$style.item">
          <span>{{ item }}</span>
          <XIcon :class="$style.remove_icon" @click="removeItem(index)" />
        </div>
      </div>
    </template>
    <input
      @change="(e) => {items.push(capitalize((e.target as HTMLInputElement).value)), (e.target as HTMLInputElement).value = '', emitData()}"
      @keydown.tab.prevent="(e) => {items.push(capitalize((e.target as HTMLInputElement).value)), (e.target as HTMLInputElement).value = ''}"
      :class="[$style.input, styles, $attrs.class]"
      :disabled="disabled"
      :placeholder="placeholder"
      v-bind="$attrs"
    />
    <template v-if="showButton">
      <ButtonLabel
        v-if="!required && !disabled"
        minus
        :class="$style.minus_btn"
        @click="$emit('input-removed')"
      />
      <ButtonLabel v-else :class="$style.hide_minus_btn" />
    </template>
  </div>
  <p v-if="error" :class="$style.error_msg">
    {{ errorMsg || "This is a required field!" }}
  </p>
</template>

<style module lang="scss">
@use "@/scss/colors";

::placeholder {
  font-style: italic;
}

.container {
  min-width: fit-content;
  width: 100%;

  &:hover .minus_btn {
    visibility: visible;
    animation: fade 0.2s linear forwards;

    @keyframes fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .minus_btn {
    margin-left: 10px;
    visibility: hidden;
    opacity: 0;
  }

  .hide_minus_btn {
    margin-left: 10px;
    visibility: hidden;
    pointer-events: none;
  }
}

.item_wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: colors.use("text-light");
    background-color: colors.use("primary");
    border-radius: 100px;
    height: 35px;
    padding: 0 15px;
    width: fit-content;

    .remove_icon {
      cursor: pointer;
    }
  }
}
.input {
  padding: 15px 20px;
  border-radius: 8px;
  border: 1px solid colors.use("border-light");
  min-width: 250px;
  width: 100%;
  font-size: 1.1rem;

  &:focus {
    border: 1px solid colors.use("border");
    outline: none;
  }
}

.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.error {
  border: 1px solid colors.use("danger");
}

.error_msg {
  color: colors.use("danger");
  margin-top: 5px;
}

@media screen and (max-width: 400px) {
  .input {
    padding: 15px;
  }
}
</style>
