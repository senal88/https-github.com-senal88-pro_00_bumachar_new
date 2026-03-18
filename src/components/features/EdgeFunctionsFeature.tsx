import { Settings } from 'lucide-react'
import { FeatureCard } from '@/components/ui/feature-card'

export function EdgeFunctionsFeature() {
  return (
    <FeatureCard
      icon={Settings}
      title="Edge Functions"
      description="Easily write custom code without deploying or scaling servers."
      className="lg:row-span-2"
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Abstract Globe */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-40 h-40 rounded-full border border-white animate-pulse-slow"></div>
          <div className="absolute w-56 h-32 rounded-[100%] border border-white rotate-45"></div>
          <div className="absolute w-56 h-32 rounded-[100%] border border-white -rotate-45"></div>
        </div>

        <div className="z-10 bg-sb-card border border-sb-border rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
          <span className="text-sb-green text-xs font-mono">$</span>
          <span className="text-sb-text text-xs font-mono">
            supabase functions deploy
          </span>
        </div>
      </div>
    </FeatureCard>
  )
}
