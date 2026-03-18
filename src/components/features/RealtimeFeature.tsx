import { Wifi, MousePointer2, MessageSquareMore } from 'lucide-react'
import { FeatureCard } from '@/components/ui/feature-card'

export function RealtimeFeature() {
  return (
    <FeatureCard
      icon={Wifi}
      title="Realtime"
      description="Build multiplayer experiences with real-time data synchronization."
      className="lg:row-span-2"
    >
      <div className="relative w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] flex items-center justify-center">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
          <MousePointer2 className="w-6 h-6 text-sb-text fill-sb-text animate-float" />
        </div>

        <div className="absolute top-1/2 left-1/2 translate-x-4 -translate-y-8 bg-sb-green text-black rounded-lg p-2 rounded-bl-none">
          <MessageSquareMore className="w-5 h-5" />
        </div>
      </div>
    </FeatureCard>
  )
}
