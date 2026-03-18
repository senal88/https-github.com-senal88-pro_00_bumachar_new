import { Box } from 'lucide-react'
import { FeatureCard } from '@/components/ui/feature-card'

export function VectorFeature() {
  return (
    <FeatureCard
      icon={Box}
      title="Vector"
      description="Integrate your favorite ML-models to store, index and search vector embeddings."
    >
      <div className="flex flex-col items-center justify-center h-full w-full relative">
        <svg
          viewBox="0 0 100 100"
          className="w-24 h-24 mb-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z"
            className="opacity-50"
          />
          <path d="M50 20 L50 50 L80 65" className="opacity-50" />
          <path d="M50 50 L20 65" className="opacity-50" />

          <circle cx="50" cy="20" r="2" className="fill-sb-green stroke-none" />
          <circle cx="80" cy="35" r="2" className="fill-sb-green stroke-none" />
          <circle cx="80" cy="65" r="2" className="fill-sb-green stroke-none" />
          <circle cx="50" cy="80" r="2" className="fill-sb-green stroke-none" />
          <circle cx="20" cy="65" r="2" className="fill-sb-green stroke-none" />
          <circle cx="20" cy="35" r="2" className="fill-sb-green stroke-none" />
          <circle cx="50" cy="50" r="2" className="fill-sb-green stroke-none" />
        </svg>

        <div className="flex gap-4">
          <div className="flex items-center gap-1 bg-sb-card border border-sb-border rounded px-2 py-1">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <span className="text-[10px] text-white">OpenAI</span>
          </div>
          <div className="flex items-center gap-1 bg-sb-card border border-sb-border rounded px-2 py-1">
            <div className="w-3 h-3 text-[10px]">🤗</div>
            <span className="text-[10px] text-white">Hugging Face</span>
          </div>
        </div>
      </div>
    </FeatureCard>
  )
}
