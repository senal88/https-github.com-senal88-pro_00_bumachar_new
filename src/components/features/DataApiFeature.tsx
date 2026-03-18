import { Link2 } from 'lucide-react'
import { FeatureCard } from '@/components/ui/feature-card'

export function DataApiFeature() {
  return (
    <FeatureCard
      icon={Link2}
      title="Data APIs"
      description="Instant ready-to-use Restful APIs."
    >
      <div className="flex flex-col gap-2 w-full max-w-[90%]">
        <div className="flex items-center justify-between bg-sb-card border border-sb-border rounded p-2 text-xs">
          <span className="flex items-center gap-1 text-sb-text-muted">
            <DatabaseIcon className="w-3 h-3" /> countries
          </span>
          <span className="text-sb-text-muted font-mono opacity-50">
            .../v1/countries
          </span>
        </div>
        <div className="flex items-center justify-between bg-sb-card border border-sb-border rounded p-2 text-xs">
          <span className="flex items-center gap-1 text-sb-text-muted">
            <DatabaseIcon className="w-3 h-3" /> continents
          </span>
          <span className="text-sb-text-muted font-mono opacity-50">
            .../v1/continents
          </span>
        </div>
        <div className="flex items-center justify-between bg-sb-card border border-sb-border rounded p-2 text-xs">
          <span className="flex items-center gap-1 text-sb-text-muted">
            <DatabaseIcon className="w-3 h-3" /> cities
          </span>
          <span className="text-sb-text-muted font-mono opacity-50">
            .../v1/cities
          </span>
        </div>
      </div>
    </FeatureCard>
  )
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s 9-1.34 9-3V5" />
    </svg>
  )
}
