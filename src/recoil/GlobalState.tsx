import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';

export const loadState = atom({
  key: 'loadState',
  default: false,
})