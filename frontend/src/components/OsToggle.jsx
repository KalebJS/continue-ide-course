import { Monitor } from 'lucide-react'
import { usePlatform } from '../contexts/PlatformContext'

export default function OsToggle() {
  const { platform, setPlatform } = usePlatform()
  return (
    <div className="flex items-center gap-2 px-3 py-2">
      <Monitor className="w-4 h-4 text-gray-400" />
      <div className="flex bg-gray-100 rounded-md p-0.5">
        <button
          onClick={() => setPlatform('mac')}
          className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
            platform === 'mac'
              ? 'bg-white text-indigo-700 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          aria-label="Use Mac shortcuts"
          aria-pressed={platform === 'mac'}
        >
          Mac
        </button>
        <button
          onClick={() => setPlatform('windows')}
          className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
            platform === 'windows'
              ? 'bg-white text-indigo-700 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          aria-label="Use Windows shortcuts"
          aria-pressed={platform === 'windows'}
        >
          Windows
        </button>
      </div>
    </div>
  )
}
