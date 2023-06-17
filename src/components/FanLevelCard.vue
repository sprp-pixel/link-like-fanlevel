<template>
  <div class="box-fanlevel">
    <div>{{ memberObj[member].name }}</div>
    <div>
      Season fan Lv.<input
        class="input-fanlv"
        type="number"
        :value="getLv"
        @change="setLv"
      />
    </div>
    <div>
      EXP
      <input class="input-exp" type="number" :value="getExp" @change="setExp" />
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
      });
    };
    const setExp = (event: { target: { value: string } }) => {
      store.commit("setExp", {
        member: props.member,
        exp: Number(event.target.value),
      });
    };
    const memberObj = Member;
    return {
      getLv,
      getExp,
      setLv,
      setExp,
      memberObj,
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
