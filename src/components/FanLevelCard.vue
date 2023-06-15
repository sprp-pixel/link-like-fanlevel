<template>
  <div>
    <div>{{ member }}</div>
    <div>Season fan Lv.<input :value="getLv" @keydown="setLv" /></div>
    <div>EXP <input :value="getExp" /></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "../store";

export default defineComponent({
  name: "FanLevelCard",
  props: {
    member: String,
    lv: Number,
    exp: Number,
  },
  setup(props) {
    const store = useStore();
    const getLv = computed(() => store.getters.getLv(props.member));
    const getExp = computed(() => store.getters.getExp(props.member));
    const setLv = (event: { target: { value: string } }) => {
      store.commit("setLv", {
        member: props.member,
        lv: Number(event.target.value),
        exp: 2,
      });
      console.log(event);
    };
    return {
      getLv,
      getExp,
      setLv,
    };
  },
});
</script>
