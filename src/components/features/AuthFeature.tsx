import { Lock } from 'lucide-react'
import { FeatureCard } from '@/components/ui/feature-card'

export function AuthFeature() {
  return (
    <FeatureCard
      icon={Lock}
      title="Authentication"
      description="Add user sign ups and logins, securing your data with Row Level Security."
    >
      <div className="flex flex-col gap-2 w-full max-w-[80%]">
        <div className="bg-sb-card border border-sb-border rounded px-3 py-2 text-xs text-sb-text-muted font-mono flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-sb-green"></div>{' '}
          0198@gmail.com
        </div>
        <div className="bg-sb-card border border-sb-border rounded px-3 py-2 text-xs text-sb-text-muted font-mono pl-6 opacity-60">
          alex160198
        </div>
        <div className="bg-sb-card border border-sb-border rounded px-3 py-2 text-xs text-sb-text-muted font-mono pl-6 opacity-40">
          34567@gmail.com
        </div>
        <div className="bg-sb-card border border-sb-border rounded px-3 py-2 text-xs text-sb-text-muted font-mono pl-6 opacity-20">
          mememaster0
        </div>
      </div>
    </FeatureCard>
  )
}
