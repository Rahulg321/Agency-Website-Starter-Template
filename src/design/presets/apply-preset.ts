import type { DesignPresetId } from '~/lib/brief'

export function applyDesignPreset(id: DesignPresetId) {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.preset = id
}
