import LocalThingsStoreFile from "./LocalThingsStoreFile"
import SettingsStore from "./SettingsStore"

export const settingsStore = new SettingsStore()
export const thingsStore = new LocalThingsStoreFile()

