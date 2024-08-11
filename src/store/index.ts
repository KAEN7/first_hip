import { atom, selector } from "recoil";

export const favoriteAtom = atom<number>({
    key: "pageNumAtom",
    default: 0,
});

export const favoriteSelector = selector<number>({
    key: "pageNumSelector",
    get: ({ get }) => get(favoriteAtom),
    set: ({ set }, newValue) => set(favoriteAtom, newValue),
});
