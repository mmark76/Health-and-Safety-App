export type TextSizePreference = 'normal' | 'large'

export type SettingsPreferences = {
  textSize: TextSizePreference
  highContrast: boolean
  reduceMotion: boolean
}

type PreferenceStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>

export const SETTINGS_STORAGE_KEY = 'hs-settings-preferences'

export const defaultSettingsPreferences: SettingsPreferences = {
  textSize: 'normal',
  highContrast: false,
  reduceMotion: false,
}

export function normalizeSettingsPreferences(value: unknown): SettingsPreferences {
  if (!value || typeof value !== 'object') {
    return defaultSettingsPreferences
  }

  const partial = value as Partial<SettingsPreferences>

  return {
    textSize: partial.textSize === 'large' ? 'large' : 'normal',
    highContrast: partial.highContrast === true,
    reduceMotion: partial.reduceMotion === true,
  }
}

export function readSettingsPreferences(storage: PreferenceStorage | undefined): SettingsPreferences {
  if (!storage) {
    return defaultSettingsPreferences
  }

  try {
    const storedValue = storage.getItem(SETTINGS_STORAGE_KEY)
    if (!storedValue) {
      return defaultSettingsPreferences
    }

    return normalizeSettingsPreferences(JSON.parse(storedValue))
  } catch {
    return defaultSettingsPreferences
  }
}

export function writeSettingsPreferences(
  storage: PreferenceStorage | undefined,
  preferences: SettingsPreferences,
) {
  if (!storage) {
    return
  }

  try {
    storage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(normalizeSettingsPreferences(preferences)))
  } catch {
    // Storage can be unavailable or full; preferences still apply for the current session.
  }
}

export function clearSettingsPreferences(storage: PreferenceStorage | undefined) {
  if (!storage) {
    return
  }

  try {
    storage.removeItem(SETTINGS_STORAGE_KEY)
  } catch {
    // Storage can be unavailable; restoring defaults should still update the UI state.
  }
}

export function getAvailableStorage(): PreferenceStorage | undefined {
  if (typeof window === 'undefined') {
    return undefined
  }

  try {
    return window.localStorage
  } catch {
    return undefined
  }
}
