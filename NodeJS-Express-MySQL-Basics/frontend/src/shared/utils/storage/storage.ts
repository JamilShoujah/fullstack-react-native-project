import {MMKV} from 'react-native-mmkv';
const storage = new MMKV();

export function saveState(key: any, value: any) {
  storage.set(key, JSON.stringify(value));
}

export function loadState(key: any) {
  const value = storage.getString(key);
  return value ? JSON.parse(value) : null;
}
