<template>
  <FanLevelCard member="kaho" />
  <FanLevelCard member="sayaka" />
  <FanLevelCard member="kozue" />
  <FanLevelCard member="tsuzuri" />
  <TargetLevelCard member="kaho" />
  <TargetLevelCard member="sayaka" />
  <TargetLevelCard member="kozue" />
  <TargetLevelCard member="tsuzuri" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FanLevelCard from "./components/FanLevelCard.vue";
import TargetLevelCard from "./components/TargetLevelCard.vue";
import { useStore } from "./store";

export default defineComponent({
  name: "App",
  components: {
    FanLevelCard,
    TargetLevelCard,
  },
  setup() {
    const store = useStore();
    console.log(store?.state?.fanLevelsCurrent);
  },
});
</script>
