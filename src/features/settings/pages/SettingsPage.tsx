import type { Language } from '../../dashboard/types/dashboard'
import type { SettingsPreferences, TextSizePreference } from '../settingsPreferences'
import './SettingsPage.css'

type SettingsPageContent = {
  eyebrow: string
  title: string
  textSizeLegend: string
  textSizeNormal: string
  textSizeLarge: string
  highContrastLabel: string
  reduceMotionLabel: string
  restoreDefaults: string
}

const settingsContent: Record<Language, SettingsPageContent> = {
  el: {
    eyebrow: 'Βοηθητική επιλογή',
    title: 'Ρυθμίσεις',
    textSizeLegend: 'Μέγεθος κειμένου',
    textSizeNormal: 'Κανονικό',
    textSizeLarge: 'Μεγάλο',
    highContrastLabel: 'Υψηλή αντίθεση',
    reduceMotionLabel: 'Μείωση κίνησης',
    restoreDefaults: 'Επαναφορά προεπιλογών',
  },
  en: {
    eyebrow: 'Supporting option',
    title: 'Settings',
    textSizeLegend: 'Text size',
    textSizeNormal: 'Normal',
    textSizeLarge: 'Large',
    highContrastLabel: 'High contrast',
    reduceMotionLabel: 'Reduce motion',
    restoreDefaults: 'Restore defaults',
  },
}

type SettingsPageProps = {
  language: Language
  preferences: SettingsPreferences
  onPreferencesChange: (preferences: SettingsPreferences) => void
  onRestoreDefaults: () => void
}

export function SettingsPage({
  language,
  preferences,
  onPreferencesChange,
  onRestoreDefaults,
}: SettingsPageProps) {
  const copy = settingsContent[language]

  const updateTextSize = (textSize: TextSizePreference) => {
    onPreferencesChange({ ...preferences, textSize })
  }

  return (
    <form className="settings-page" aria-labelledby="settings-page-title">
      <header className="settings-page-header">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 id="settings-page-title">{copy.title}</h1>
      </header>

      <fieldset className="settings-fieldset">
        <legend>{copy.textSizeLegend}</legend>
        <label className="settings-choice">
          <input
            checked={preferences.textSize === 'normal'}
            name="text-size"
            onChange={() => updateTextSize('normal')}
            type="radio"
            value="normal"
          />
          <span>{copy.textSizeNormal}</span>
        </label>
        <label className="settings-choice">
          <input
            checked={preferences.textSize === 'large'}
            name="text-size"
            onChange={() => updateTextSize('large')}
            type="radio"
            value="large"
          />
          <span>{copy.textSizeLarge}</span>
        </label>
      </fieldset>

      <fieldset className="settings-fieldset">
        <legend>{copy.title}</legend>
        <label className="settings-choice">
          <input
            checked={preferences.highContrast}
            onChange={(event) => onPreferencesChange({ ...preferences, highContrast: event.currentTarget.checked })}
            type="checkbox"
          />
          <span>{copy.highContrastLabel}</span>
        </label>
        <label className="settings-choice">
          <input
            checked={preferences.reduceMotion}
            onChange={(event) => onPreferencesChange({ ...preferences, reduceMotion: event.currentTarget.checked })}
            type="checkbox"
          />
          <span>{copy.reduceMotionLabel}</span>
        </label>
      </fieldset>

      <div className="settings-actions">
        <button className="secondary-button" onClick={onRestoreDefaults} type="button">
          {copy.restoreDefaults}
        </button>
      </div>
    </form>
  )
}
