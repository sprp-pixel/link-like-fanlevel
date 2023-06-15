<template>
  <FanLevelCard member="kaho" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FanLevelCard from "./components/FanLevelCard.vue";
import { useStore } from "./store";

export default defineComponent({
  name: "App",
  components: {
    FanLevelCard,
  },
  setup() {
    const store = useStore();
    console.log(store?.state?.fanLevelsCurrent);
  },
});
</script>
