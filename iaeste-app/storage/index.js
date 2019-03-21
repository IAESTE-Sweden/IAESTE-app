import { AsyncStorage } from "react-native";

export const setSaved = saved => {
  const data = JSON.stringify(saved);
  AsyncStorage.setItem("saved", data);
};

export const getSaved = async () =>
  AsyncStorage.getItem("saved")
    .then(value => JSON.parse(value))
    .then(value => (Array.isArray(value) ? value : []));
