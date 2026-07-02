import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  SETTINGS_STORAGE_KEY,
  clearSettingsPreferences,
  defaultSettingsPreferences,
  normalizeSettingsPreferences,
  readSettingsPreferences,
  writeSettingsPreferences,
  type SettingsPreferences,
} from '../src/features/settings/settingsPreferences.ts'

class MemoryStorage {
  readonly values = new Map<string, string>()

  getItem(key: string) {
    return this.values.get(key) ?? null
  }

  setItem(key: string, value: string) {
    this.values.set(key, value)
  }

  removeItem(key: string) {
    this.values.delete(key)
  }
}

class FailingStorage {
  getItem() {
    throw new Error('storage unavailable')
  }

  setItem() {
    throw new Error('storage unavailable')
  }

  removeItem() {
    throw new Error('storage unavailable')
  }
}

test('settings preferences normalize unknown values to safe defaults', () => {
  assert.deepEqual(normalizeSettingsPreferences(undefined), defaultSettingsPreferences)
  assert.deepEqual(normalizeSettingsPreferences({ textSize: 'huge', highContrast: 'yes', reduceMotion: 1 }), {
    textSize: 'normal',
    highContrast: false,
    reduceMotion: false,
  })
})

test('settings preferences persist, read and reset safely', () => {
  const storage = new MemoryStorage()
  const preferences: SettingsPreferences = {
    textSize: 'large',
    highContrast: true,
    reduceMotion: true,
  }

  writeSettingsPreferences(storage, preferences)

  assert.deepEqual(readSettingsPreferences(storage), preferences)
  assert.equal(storage.values.has(SETTINGS_STORAGE_KEY), true)

  clearSettingsPreferences(storage)

  assert.equal(storage.values.has(SETTINGS_STORAGE_KEY), false)
  assert.deepEqual(readSettingsPreferences(storage), defaultSettingsPreferences)
})

test('settings preferences do not throw when storage is unavailable', () => {
  const storage = new FailingStorage()

  assert.doesNotThrow(() => writeSettingsPreferences(storage, defaultSettingsPreferences))
  assert.doesNotThrow(() => clearSettingsPreferences(storage))
  assert.deepEqual(readSettingsPreferences(storage), defaultSettingsPreferences)
})
