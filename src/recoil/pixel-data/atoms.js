import { atom } from 'recoil';
import { localStorageEffect } from '../helpers';

export const PERSIST_KEY = 'persist:pixel-data';

const initialState = null;

export const pixelDataAtom = atom({
  key: 'pixelDataState',
  default: initialState,
  effects_UNSTABLE: [localStorageEffect(PERSIST_KEY)],
});
