import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

interface MemberKey {
  [key: string]: any;
}
const Member: MemberKey = {
  kaho: "日野下花帆",
  sayaka: "村野さやか",
  kozue: "乙宗梢",
  tsuzuri: "夕霧綴理",
};
const WithMeets = [
  { id: 10, title: "", members: [], date: "" },
  { id: 11, title: "", members: [], date: "" },
];

// ストアのステートに対して型を定義します
export interface FanlevelState {
  fanLevelsCurrent: {
    [key in keyof typeof Member]: { lv: number; exp: number };
  };
}

// インジェクションキーを定義します
export const key: InjectionKey<Store<FanlevelState>> = Symbol();

export const store = createStore<FanlevelState>({
  state() {
    const fanLevelsCurrent: {
      [key in keyof typeof Member]: { lv: number; exp: number };
    } = {
      kaho: { lv: 0, exp: 0 },
      sayaka: { lv: 0, exp: 0 },
      kozue: { lv: 0, exp: 0 },
      tsuzuri: { lv: 0, exp: 0 },
    };
    return {
      fanLevelsCurrent,
    };
  },
  getters: {
    getLv: (state) => (member: string) => {
      return state.fanLevelsCurrent[member as keyof typeof Member].lv;
    },
    getExp: (state) => (member: string) => {
      return state.fanLevelsCurrent[member as keyof typeof Member].exp;
    },
    getRequiredExp: (state) => (target: number) => {
      const n = target - 1;
      return (n / 2) * (2 * 200 + (n - 1) * 120);
    },
  },
  mutations: {
    setLv(state, { member, lv }) {
      state.fanLevelsCurrent[member as keyof typeof Member].lv = lv;
    },
    setExp(state, { member, exp }) {
      state.fanLevelsCurrent[member as keyof typeof Member].exp = exp;
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
