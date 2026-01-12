export default function PitchPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-12 sm:mb-16 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-medium uppercase tracking-widest text-gold-main">
            Pitch Deck
          </span>
          <span className="text-ink-tertiary">·</span>
          <span className="text-xs text-ink-tertiary">
            Executive Summary
          </span>
        </div>
        
        <h1 className="display-serif text-3xl sm:text-4xl md:text-5xl text-ink-primary mb-6 leading-tight">
          Golden Gate
        </h1>
        
        <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed">
          Real Yield. Real Money. The next monetary layer for the Internet of Value.
        </p>
      </header>

      {/* Content */}
      <div className="space-y-12 animate-fade-in-up animation-delay-100">
        
        {/* Problem Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-surface-inset text-ink-tertiary text-sm font-mono">
              01
            </span>
            <h2 className="display-serif text-xl sm:text-2xl text-ink-primary">
              The Problem
            </h2>
          </div>
          <div className="pl-11">
            <p className="text-ink-secondary leading-relaxed mb-4">
              Stablecoins have become a <span className="font-mono text-gold-main">$300B+</span> market, 
              but they're static, extractive, and yieldless.
            </p>
            <p className="text-ink-secondary leading-relaxed">
              Today, all the return on underlying collateral (T-bills, gold, etc.) flows to issuers, 
              <em className="text-ink-primary font-medium not-italic"> not users</em>.
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-gold-pale text-gold-main text-sm font-mono">
              02
            </span>
            <h2 className="display-serif text-xl sm:text-2xl text-ink-primary">
              Our Solution
            </h2>
          </div>
          <div className="pl-11">
            <p className="text-ink-secondary leading-relaxed">
              Golden Gate is building a real-yield stablecoin ecosystem that channels 
              off-chain, real-world yield back to on-chain users via a modular, 
              compliance-first protocol.
            </p>
          </div>
        </section>

        {/* Architecture Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-surface-inset text-ink-tertiary text-sm font-mono">
              03
            </span>
            <h2 className="display-serif text-xl sm:text-2xl text-ink-primary">
              Architecture
            </h2>
          </div>
          <div className="pl-11">
            <div className="grid gap-4">
              {/* USDau */}
              <div className="border border-border-default p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-main"></span>
                    <span className="font-medium text-ink-primary">USDau</span>
                  </div>
                  <span className="text-xs font-mono text-ink-tertiary">STABLECOIN</span>
                </div>
                <p className="text-sm text-ink-secondary">
                  1:1 USDC/USDT collateralized. Composable, transferable, redeemable.
                </p>
              </div>
              
              {/* sUSDau */}
              <div className="border border-gold-main bg-surface-elevated p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-main"></span>
                    <span className="font-medium text-ink-primary">sUSDau</span>
                  </div>
                  <span className="text-xs font-mono text-gold-main">YIELD-BEARING</span>
                </div>
                <p className="text-sm text-ink-secondary">
                  Staking receipt for locked USDau. Earns protocol yield + GG emissions.
                </p>
              </div>
              
              {/* GG Token */}
              <div className="border border-slate-main p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-main"></span>
                    <span className="font-medium text-ink-primary">GG Token</span>
                  </div>
                  <span className="text-xs font-mono text-slate-main">GOVERNANCE</span>
                </div>
                <p className="text-sm text-ink-secondary">
                  ve-locking, emissions gauges, loyalty multipliers. Fixed 1B supply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Yield Source Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-surface-inset text-ink-tertiary text-sm font-mono">
              04
            </span>
            <h2 className="display-serif text-xl sm:text-2xl text-ink-primary">
              Yield Source
            </h2>
          </div>
          <div className="pl-11">
            <div className="bg-gold-pale/30 border-l-4 border-gold-main p-4 mb-4">
              <p className="text-sm font-medium text-gold-dark uppercase tracking-wider mb-1">
                Phase 1 — Live
              </p>
              <p className="text-ink-primary font-medium">
                Licensed Physical Gold Arbitrage
              </p>
            </div>
            <p className="text-ink-secondary leading-relaxed mb-4">
              Capturing basis spread from global price differentials in physical gold via 
              regulated import-export routes and institutional trading desks.
            </p>
            <p className="text-sm text-ink-tertiary italic">
              Unlike emission-dependent or delta-risk protocols, Golden Gate's yield derives 
              entirely from real-world economic activity.
            </p>
          </div>
        </section>

        {/* Competitive Moat Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-surface-inset text-ink-tertiary text-sm font-mono">
              05
            </span>
            <h2 className="display-serif text-xl sm:text-2xl text-ink-primary">
              Competitive Moat
            </h2>
          </div>
          <div className="pl-11">
            <ul className="space-y-3">
              {[
                'Regulatory relationships built over years',
                'Logistics infrastructure & vaulting partnerships',
                'Institutional trading desk access',
                'Compliance-first architecture',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-ink-secondary">
                  <span className="w-1.5 h-1.5 bg-gold-main mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-tertiary">
              Cannot be replicated by forking code or deploying capital alone.
            </p>
          </div>
        </section>

        {/* Roadmap Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-surface-inset text-ink-tertiary text-sm font-mono">
              06
            </span>
            <h2 className="display-serif text-xl sm:text-2xl text-ink-primary">
              Compliance Roadmap
            </h2>
          </div>
          <div className="pl-11">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 flex-shrink-0">
                  <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono bg-signal-success/10 text-signal-success">
                    LIVE
                  </span>
                </div>
                <div>
                  <p className="font-medium text-ink-primary">Phase 1 — BVI</p>
                  <p className="text-sm text-ink-secondary">
                    Non-custodial stablecoin with protocol-based redemption
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-16 flex-shrink-0">
                  <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono bg-gold-pale text-gold-dark">
                    NEXT
                  </span>
                </div>
                <div>
                  <p className="font-medium text-ink-primary">Phase 2 — EMI License</p>
                  <p className="text-sm text-ink-secondary">
                    Fiat redemptions, tokenized T-bills, KYC integration
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-16 flex-shrink-0">
                  <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono bg-surface-inset text-ink-tertiary">
                    2026
                  </span>
                </div>
                <div>
                  <p className="font-medium text-ink-primary">Phase 3 — MiCA Alignment</p>
                  <p className="text-sm text-ink-secondary">
                    Full ART/EMT alignment, Eurozone roll-out
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traction Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 flex items-center justify-center bg-surface-inset text-ink-tertiary text-sm font-mono">
              07
            </span>
            <h2 className="display-serif text-xl sm:text-2xl text-ink-primary">
              Traction
            </h2>
          </div>
          <div className="pl-11">
            <ul className="space-y-3">
              {[
                'MVP deployed with gold arbitrage pilot',
                'Public mint + staking UI in development',
                'EMI licensing process initiated',
                'Ecosystem integration pipeline active',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-ink-secondary">
                  <span className="text-signal-success">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-8">
          <div className="bg-surface-dark text-ink-inverse p-6 sm:p-8">
            <p className="display-serif text-xl sm:text-2xl text-center mb-4">
              "This is not a speculative token."
            </p>
            <p className="text-center text-ink-inverse/80">
              This is programmable real yield — at the monetary layer.
            </p>
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gold-light font-mono">Real Yield</span>
                <span className="text-ink-inverse/40">·</span>
                <span className="text-gold-light font-mono">Real Money</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics Summary */}
        <section className="border-t border-border-default pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Token Supply', value: '1B', sublabel: 'GG Fixed' },
              { label: 'Emissions', value: '30%', sublabel: '5 Years' },
              { label: 'Collateral', value: '1:1', sublabel: 'USDC/USDT' },
              { label: 'Market', value: '$300B+', sublabel: 'Stablecoin TAM' },
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <p className="font-mono text-xl sm:text-2xl text-gold-main">{metric.value}</p>
                <p className="text-xs text-ink-tertiary uppercase tracking-wider">{metric.label}</p>
                <p className="text-xs text-ink-tertiary">{metric.sublabel}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
}
