import { Sparkles, CornerDownLeft, Bot, MessageSquare } from 'lucide-react'
import { FeatureCard } from '@/components/ui/feature-card'

export function LlmFeature() {
  return (
    <FeatureCard
      icon={Sparkles}
      title="Supabase AI"
      description="Build AI apps with Edge Functions, Vector embeddings, and integrated LLMs."
      className="lg:row-span-2 min-h-[420px]"
    >
      <div className="relative w-full h-full flex flex-col p-4 bg-sb-bg/40 gap-4 justify-between font-sans overflow-hidden">
        {/* Chat interaction mock */}
        <div className="flex flex-col gap-4 w-full relative z-10 mt-2">
          {/* User Prompt */}
          <div className="self-end bg-sb-card border border-sb-border rounded-2xl rounded-tr-sm p-3 max-w-[85%] shadow-md transform transition-all hover:scale-[1.02]">
            <div className="flex items-center gap-2 mb-1">
              <MessageSquare className="w-3 h-3 text-sb-text-muted" />
              <span className="text-[10px] text-sb-text-muted font-medium">
                You
              </span>
            </div>
            <p className="text-[11px] text-white leading-relaxed">
              Generate a Postgres function to calculate user retention over 30
              days.
            </p>
          </div>

          {/* AI Response */}
          <div className="self-start flex gap-2 w-[95%]">
            <div className="w-6 h-6 mt-1 rounded bg-gradient-to-br from-sb-green to-emerald-600 flex-shrink-0 flex items-center justify-center shadow-[0_0_15px_rgba(110,231,183,0.3)]">
              <Bot className="w-3.5 h-3.5 text-black" />
            </div>
            <div className="bg-transparent rounded-xl p-0 flex-1">
              <div className="flex items-center gap-2 mb-2 ml-1">
                <span className="text-[10px] text-sb-green font-medium">
                  Supabase AI
                </span>
              </div>
              <div className="bg-[#121212] border border-sb-border rounded-lg overflow-hidden shadow-lg">
                <div className="flex items-center justify-between px-3 py-1.5 bg-sb-card/80 border-b border-sb-border">
                  <span className="text-[9px] font-mono text-sb-text-muted">
                    sql
                  </span>
                  <button className="text-[9px] text-sb-text-muted hover:text-white transition-colors">
                    Copy
                  </button>
                </div>
                <div className="p-3 bg-[#0a0a0a]">
                  <div className="space-y-1.5 font-mono text-[10px]">
                    <div className="flex gap-2 whitespace-nowrap">
                      <span className="text-purple-400">CREATE</span>{' '}
                      <span className="text-blue-400">OR</span>{' '}
                      <span className="text-purple-400">REPLACE</span>{' '}
                      <span className="text-blue-400">FUNCTION</span>
                    </div>
                    <div className="text-yellow-300 ml-4">
                      calculate_retention()
                    </div>
                    <div className="text-sb-text-muted">
                      RETURNS table (day int, active_users int) AS $$
                    </div>
                    <div className="text-purple-400 ml-4">BEGIN</div>
                    <div className="h-1.5 w-1/2 bg-sb-border/50 rounded ml-8 mt-2"></div>
                    <div className="h-1.5 w-2/3 bg-sb-border/50 rounded ml-8 mt-1.5"></div>
                    <div className="text-purple-400 ml-4 mt-2">END;</div>
                    <div className="text-sb-text-muted">
                      $$ LANGUAGE plpgsql;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input area mock */}
        <div className="mt-6 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-sb-bg via-sb-bg to-transparent pointer-events-none -top-12 -bottom-4 z-[-1]" />
          <div className="relative bg-sb-card border border-sb-border rounded-lg p-2 flex items-center gap-2 shadow-xl ring-1 ring-sb-green/10">
            <Sparkles className="w-3.5 h-3.5 text-sb-green ml-1 flex-shrink-0" />
            <div className="flex-1 text-[11px] text-sb-text-muted font-medium opacity-80">
              Ask Supabase AI...
            </div>
            <div className="w-5 h-5 rounded bg-sb-bg border border-sb-border flex items-center justify-center shadow-sm">
              <CornerDownLeft className="w-2.5 h-2.5 text-sb-text" />
            </div>
          </div>
        </div>
      </div>
    </FeatureCard>
  )
}
