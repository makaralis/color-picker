import { atom } from 'recoil';
import { localStorageEffect } from '../helpers';

export const PERSIST_KEY = 'persist:picked-color';

const initialState = 'red';

export const pickedColorAtom = atom({
  key: 'pickedColorState',
  default: initialState,
  effects_UNSTABLE: [localStorageEffect(PERSIST_KEY)],
});
