<template>
  <div class="box-fanlevel">
    <div>{{ memberObj[member].name }}</div>
    <div>
      Target fan Lv.<input
        class="input-fanlv"
        type="number"
        v-model="targetLv"
      />
    </div>
    残り
    <input class="input-exp" readonly type="number" :value="getRemainedExp" />
    exp → ★{{ Math.ceil(getRemainedExp / 700) }}個
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "../store";
import { Member } from "../constants/const-members";

export default defineComponent({
  name: "TargetLevelCard",
  props: {
    member: String,
    lv: Number,
  },
  setup(props) {
    const targetLv = ref(1);
    const store = useStore();
    const getExp = computed(() => store.getters.getExp(props.member));
    const getRequiredExps = computed(() =>
      store.getters.getRequiredExp(targetLv.value)
    );
    const getRemainedExp = computed(() =>
      Math.max(getRequiredExps.value - getExp.value, 0)
    );
    const memberObj = Member;
    return {
      getRequiredExps,
      getRemainedExp,
      targetLv,
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
