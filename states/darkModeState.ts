import { atom, selectorFamily } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()
export type DarkModeFieldState = 'theme' | 'systemTheme' | 'all'

export interface DarkModeState {
  theme: string
  systemTheme: string
}

const defaultState: DarkModeState = {
  theme: 'default',
  systemTheme: 'not-ready',
}

export const darkModeState = atom({
  key: 'darkModeState',
  default: defaultState,
  effects_UNSTABLE: [persistAtom],
})

export const darkModeSelector = selectorFamily({
  key: 'darkModeSelector',
  get:
    (field: DarkModeFieldState) =>
    ({ get }) => {
      if (field === 'all') {
        return get(darkModeState)
      } else {
        return get(darkModeState)[field]
      }
    },
  set:
    (field: DarkModeFieldState) =>
    ({ set }, newValue) => {
      set(darkModeState, prevState => ({ ...prevState, [field]: newValue }))
    },
})
