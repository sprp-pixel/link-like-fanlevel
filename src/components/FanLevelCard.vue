<template>
  <div class="box-fanlevel">
    <div>{{ memberName }}</div>
    <div>Season fan Lv.<input class="input-fanlv" v-model="fanLevel" /></div>
    <div>
      EXP
      <input class="input-exp" type="number" v-model="exp" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "../store";
import { Member } from "../constants/const-members";

export default defineComponent({
  name: "FanLevelCard",
  props: {
    member: String,
  },
  setup(props) {
    const store = useStore();

    const fanLevel = computed({
      get() {
        return store.getters.getLv(props.member);
      },
      set(newValue) {
        store.commit("setLv", {
          member: props.member,
          lv: Number(newValue),
        });
      },
    });
    const exp = computed({
      get() {
        return store.getters.getExp(props.member);
      },
      set(newValue) {
        store.commit("setExp", {
          member: props.member,
          exp: Number(newValue),
        });
      },
    });
    const memberName = Member[props.member as string].name;
    return {
      fanLevel,
      exp,
      memberName,
    };
  },
});
</script>

<style>
.box-fanlevel {
  border-radius: 5px;
  border: 2px solid #ccc;
  max-width: 250px;
  margin: 2px;
}
.input-fanlv {
  width: 2.5em;
  border-radius: 5px;
  border: 2px solid #ccc;
}
.input-exp {
  width: 5em;
  border-radius: 5px;
  border: 2px solid #ccc;
}
</style>
