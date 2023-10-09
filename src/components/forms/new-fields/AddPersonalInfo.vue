<script setup lang="ts">
import BaseButton from "@/components/base-button/BaseButton.vue";
import BaseDialog from "@/components/base-dialog/BaseDialog.vue";
import FieldLabel from "@/components/base-input/FieldLabel.vue";
import InputText from "@/components/base-input/InputText.vue";
import { computed, ref } from "vue";

const props = defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const showModal = computed({
  get: () => props.visible,
  set: () => emit("close"),
});

const title = ref("Github");
const value = ref("https://github.com/narudesigns");
</script>

<template>
  <div>
    <BaseDialog v-model="showModal" disable-close>
      <template #header>
        <h3>Add New Field</h3>
      </template>
      <div :class="$style.form">
        <FieldLabel label="Title" required />
        <InputText v-model="title" required />
        <FieldLabel label="Value" required />
        <InputText v-model="value" required />
      </div>
      <template #buttons>
        <BaseButton danger @click="$emit('close')"> Cancel </BaseButton>
        <BaseButton> Add Field </BaseButton>
      </template>
    </BaseDialog>
  </div>
</template>

<style lang="scss" module>
.form :first-child {
  margin-top: 0;
}
</style>
