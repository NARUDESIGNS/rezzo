<script setup lang="ts">
import CheckIcon from "@/assets/CheckIcon.vue";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    /** Number of steps */
    steps: number;
    /** Current step */
    currentStep?: number;
  }>(),
  {
    steps: 1,
    currentStep: 1,
  }
);

defineEmits<{
  (e: "step-clicked", value: number): void;
}>();

const currentStep = computed(() => props.currentStep);
const steps = computed(() => props.steps);
</script>

<template>
  <div :class="$style.wrap">
    <template v-for="(step, index) in steps" :key="index">
      <div
        :class="[$style.step, { [$style.completed]: currentStep >= index + 1 }]"
        @click="$emit('step-clicked', step)"
      >
        <CheckIcon v-if="currentStep >= index + 1" :class="$style.checkIcon" />
        <p v-else>{{ step }}</p>
      </div>
      <div
        :class="[
          $style.progressLine,
          { [$style.completedProgressLine]: currentStep >= index + 1 },
        ]"
      />
    </template>
  </div>
</template>

<style module lang="scss">
@use "@/scss/colors";

.wrap {
  display: flex;
  align-items: center;
  width: 300px;

  .step {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: colors.use(light-gray);
    font-weight: 500;
    font-size: 0.9rem;
    flex: none;
    cursor: pointer;
  }

  .completed {
    background-color: colors.use(primary);
    color: white;

    .checkIcon {
      width: 60%;
      stroke-width: 3;
    }
  }
  .progressLine:not(:last-of-type) {
    width: 100%;
    height: 2px;
    background-color: colors.use(light-gray);
  }
  .completedProgressLine:not(:last-of-type) {
    background-color: colors.use(primary);
  }
}
</style>
