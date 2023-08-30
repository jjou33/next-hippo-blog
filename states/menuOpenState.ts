import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const menuOpenState = atom({
  key: 'menuOpenState',
  default: false,
  effects_UNSTABLE: [persistAtom],
})
