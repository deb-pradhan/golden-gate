'use client';

import { useEffect, useState } from 'react';
import { useIsDesktop } from '@/hooks/useMediaQuery';

const sections = [
  { id: 'executive-summary', title: '1. Executive Summary' },
  { id: 'market-landscape', title: '2. Market Landscape' },
  { id: 'thesis', title: '3. The Golden Gate Thesis' },
  { id: 'architecture', title: '4. Protocol Architecture' },
  { id: 'yield-engine', title: '5. The Yield Engine' },
  { id: 'token-design', title: '6. Token Design' },
  { id: 'legal-compliance', title: '7. Legal & Compliance' },
  { id: 'risk-management', title: '8. Risk Management' },
  { id: 'roadmap', title: '9. Roadmap' },
  { id: 'appendix', title: '10. Appendix' },
];

// ===== VISUAL COMPONENTS =====

// Flow Step Component
function FlowStep({ step, label, description, isLast = false }: { 
  step: string; 
  label: string; 
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-gold-main flex items-center justify-center text-ink-on-gold font-mono text-sm font-medium">
          {step}
        </div>
        {!isLast && <div className="w-px h-12 bg-border-strong mt-2" />}
      </div>
      <div className="pb-8">
        <p className="font-medium text-ink-primary">{label}</p>
        <p className="text-sm text-ink-tertiary mt-1">{description}</p>
      </div>
    </div>
  );
}

// Protocol Flow Infographic
function ProtocolFlowInfographic() {
  return (
    <div className="my-10 p-6 sm:p-8 bg-surface-inset border border-border-default">
      <p className="text-xs font-medium uppercase tracking-widest text-ink-tertiary mb-6">Protocol Flow</p>
      
      {/* Desktop Flow - Horizontal */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between gap-2">
          {/* Step 1 */}
          <div className="flex-1 text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-slate-main flex items-center justify-center">
              <svg className="w-8 h-8 text-ink-inverse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="font-mono text-sm text-slate-main font-medium">USDC/USDT</p>
            <p className="text-xs text-ink-tertiary mt-1">User deposits</p>
          </div>
          
          {/* Arrow */}
          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-border-strong" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          
          {/* Step 2 */}
          <div className="flex-1 text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-surface-card border-2 border-slate-main flex items-center justify-center">
              <span className="font-mono text-sm font-medium text-slate-main">USDau</span>
            </div>
            <p className="font-mono text-sm text-ink-primary font-medium">Mint USDau</p>
            <p className="text-xs text-ink-tertiary mt-1">1:1 stablecoin</p>
          </div>
          
          {/* Arrow */}
          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-border-strong" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          
          {/* Step 3 */}
          <div className="flex-1 text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold-pale border-2 border-gold-main flex items-center justify-center">
              <span className="font-mono text-sm font-medium text-gold-dark">sUSDau</span>
            </div>
            <p className="font-mono text-sm text-gold-main font-medium">Stake</p>
            <p className="text-xs text-ink-tertiary mt-1">Yield-bearing</p>
          </div>
          
          {/* Arrow */}
          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-border-strong" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          
          {/* Step 4 */}
          <div className="flex-1 text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold-main flex items-center justify-center">
              <svg className="w-8 h-8 text-ink-on-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="font-mono text-sm text-gold-main font-medium">Earn Yield</p>
            <p className="text-xs text-ink-tertiary mt-1">Real returns</p>
          </div>
        </div>
        
        {/* Revenue Flow - Reverse direction */}
        <div className="mt-8 pt-6 border-t border-border-default">
          <p className="text-xs text-center text-ink-tertiary mb-4">← Revenue flows back from Gold Arbitrage →</p>
          <div className="flex items-center justify-center gap-4">
            <div className="px-4 py-2 bg-surface-card border border-border-default">
              <p className="text-xs font-mono text-ink-tertiary">Gold Arbitrage</p>
            </div>
            <svg className="w-6 h-6 text-signal-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="px-4 py-2 bg-surface-card border border-border-default">
              <p className="text-xs font-mono text-ink-tertiary">Treasury</p>
            </div>
            <svg className="w-6 h-6 text-signal-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="px-4 py-2 bg-gold-pale border border-gold-main">
              <p className="text-xs font-mono text-gold-dark">sUSDau Holders</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Flow - Vertical */}
      <div className="md:hidden">
        <FlowStep step="1" label="Deposit USDC/USDT" description="User deposits stable assets" />
        <FlowStep step="2" label="Receive USDau" description="Mint 1:1 collateralized stablecoin" />
        <FlowStep step="3" label="Stake → sUSDau" description="Lock to earn yield" />
        <FlowStep step="4" label="Earn Real Yield" description="Revenue from gold arbitrage" isLast />
      </div>
    </div>
  );
}

// System Flow Infographic (for Architecture section)
function SystemFlowInfographic() {
  return (
    <div className="my-10 p-6 sm:p-8 bg-surface-card border border-border-default">
      <p className="text-xs font-medium uppercase tracking-widest text-ink-tertiary mb-6">System Architecture</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Layer */}
        <div className="p-5 bg-surface-inset border border-border-default">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-slate-main flex items-center justify-center">
              <svg className="w-4 h-4 text-ink-inverse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-ink-tertiary">Input</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-main" />
              <span className="font-mono text-sm">USDC</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-main" />
              <span className="font-mono text-sm">USDT</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border-default">
            <p className="text-xs text-ink-tertiary">Accepted collateral for minting USDau</p>
          </div>
        </div>
        
        {/* Protocol Layer */}
        <div className="p-5 bg-gold-pale/30 border border-gold-main/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gold-main flex items-center justify-center">
              <svg className="w-4 h-4 text-ink-on-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-gold-dark">Protocol</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-gold-dark">USDau</span>
              <span className="text-xs text-ink-tertiary">Stablecoin</span>
            </div>
            <div className="h-px bg-gold-main/20" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-gold-dark">sUSDau</span>
              <span className="text-xs text-ink-tertiary">Yield Token</span>
            </div>
            <div className="h-px bg-gold-main/20" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-gold-dark">GG</span>
              <span className="text-xs text-ink-tertiary">Governance</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gold-main/20">
            <p className="text-xs text-gold-dark">Smart contract treasury & staking</p>
          </div>
        </div>
        
        {/* Output Layer */}
        <div className="p-5 bg-signal-success/5 border border-signal-success/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-signal-success flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-signal-success">Yield</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-signal-success" />
              <span className="text-sm">Gold Arbitrage Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-signal-success/50" />
              <span className="text-sm">T-Bill Yield (Phase 2)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-signal-success/30" />
              <span className="text-sm">DeFi Yield (Phase 3)</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-signal-success/20">
            <p className="text-xs text-signal-success">Distributed to sUSDau holders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Token Card Component
function TokenCard({ 
  name, 
  tagline, 
  features, 
  variant 
}: { 
  name: string; 
  tagline: string; 
  features: string[];
  variant: 'usdau' | 'susdau' | 'gg';
}) {
  const styles = {
    usdau: {
      border: 'border-slate-main',
      bg: 'bg-surface-card',
      accent: 'text-slate-main',
      badge: 'bg-slate-main text-ink-inverse',
    },
    susdau: {
      border: 'border-gold-main',
      bg: 'bg-gold-pale/30',
      accent: 'text-gold-main',
      badge: 'bg-gold-main text-ink-on-gold',
    },
    gg: {
      border: 'border-slate-main',
      bg: 'bg-surface-card',
      accent: 'text-gold-main',
      badge: 'bg-slate-main text-ink-inverse',
    },
  };
  
  const s = styles[variant];
  
  return (
    <div className={`p-6 ${s.border} ${s.bg} border`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`font-mono text-xl font-medium ${s.accent}`}>{name}</span>
          <p className="text-sm text-ink-tertiary mt-1">{tagline}</p>
        </div>
        {variant === 'susdau' && (
          <span className="px-2 py-1 bg-gold-main text-ink-on-gold text-xs font-medium uppercase tracking-wider">
            Yield
          </span>
        )}
      </div>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-ink-secondary">
            <svg className={`w-4 h-4 ${s.accent} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Roadmap Timeline Component
function RoadmapTimeline() {
  const phases = [
    {
      phase: 'Phase 0',
      title: 'Completed',
      status: 'complete',
      items: ['Architecture + regulatory structuring complete', 'Gold arbitrage execution partner onboarded', 'Private pilots initiated (under NDA)'],
    },
    {
      phase: 'Phase 1',
      title: 'Go Live',
      status: 'active',
      items: ['USDau minting (USDC/USDT)', 'Staking module (sUSDau issuance)', 'Gold arbitrage treasury routing', 'Initial GG emissions', 'Redemption buffer + DAO dashboard'],
    },
    {
      phase: 'Phase 2',
      title: 'Regulatory Expansion',
      status: 'upcoming',
      items: ['EMI licensing application', 'Tokenized T-bill integration', 'Launch fiat on/off-ramp via partner', 'sUSDau vault upgrades with yield gauges'],
    },
    {
      phase: 'Phase 3',
      title: 'Scale and Monetize',
      status: 'upcoming',
      items: ['DAO-governed Treasury allocation policy', 'Loyalty NFTs, veGG voting, yield curve control', 'Institutional integrations (neobanks, fintech apps, L2s)', 'Ecosystem partnerships across Africa, Asia, and Europe'],
    },
  ];
  
  const statusStyles = {
    complete: { dot: 'bg-signal-success', line: 'bg-signal-success', text: 'text-signal-success', label: '✓ Complete' },
    active: { dot: 'bg-gold-main', line: 'bg-gold-main', text: 'text-gold-main', label: 'In Progress' },
    upcoming: { dot: 'bg-border-strong', line: 'bg-border-default', text: 'text-ink-tertiary', label: 'Planned' },
  };
  
  return (
    <div className="my-10">
      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-border-default" />
          <div 
            className="absolute top-5 left-0 h-0.5 bg-gold-main transition-all duration-500" 
            style={{ width: '37.5%' }} 
          />
          
          {/* Phase Cards */}
          <div className="grid grid-cols-4 gap-4">
            {phases.map((p, i) => {
              const s = statusStyles[p.status as keyof typeof statusStyles];
              return (
                <div key={i} className="pt-10">
                  {/* Dot */}
                  <div className={`absolute top-3 w-4 h-4 rounded-full ${s.dot} border-4 border-surface-canvas`} 
                       style={{ left: `calc(${i * 25}% + ${i === 0 ? 0 : 12.5}% - 8px)` }} />
                  
                  <div className={`p-4 border ${p.status === 'active' ? 'border-gold-main bg-gold-pale/20' : 'border-border-default bg-surface-card'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-ink-tertiary">{p.phase}</span>
                      <span className={`text-xs font-medium ${s.text}`}>{s.label}</span>
                    </div>
                    <h4 className="font-medium text-ink-primary mb-3">{p.title}</h4>
                    <ul className="space-y-1.5">
                      {p.items.map((item, j) => (
                        <li key={j} className="text-xs text-ink-secondary flex items-start gap-1.5">
                          <span className={`${s.text}`}>·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-4">
        {phases.map((p, i) => {
          const s = statusStyles[p.status as keyof typeof statusStyles];
          return (
            <div key={i} className="flex gap-4">
              {/* Vertical line and dot */}
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${s.dot}`} />
                {i < phases.length - 1 && <div className={`w-0.5 flex-1 ${s.line}`} />}
              </div>
              
              {/* Content */}
              <div className={`flex-1 pb-6 ${i < phases.length - 1 ? '' : ''}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-ink-tertiary">{p.phase}</span>
                  <span className={`text-xs font-medium ${s.text}`}>{s.label}</span>
                </div>
                <h4 className="font-medium text-ink-primary mb-2">{p.title}</h4>
                <ul className="space-y-1">
                  {p.items.map((item, j) => (
                    <li key={j} className="text-sm text-ink-secondary">· {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ value, label, sublabel }: { value: string; label: string; sublabel?: string }) {
  return (
    <div className="p-5 bg-surface-card border border-border-default">
      <p className="font-mono text-2xl sm:text-3xl text-gold-main font-medium">{value}</p>
      <p className="text-sm text-ink-primary mt-1">{label}</p>
      {sublabel && <p className="text-xs text-ink-tertiary mt-0.5">{sublabel}</p>}
    </div>
  );
}

// ===== MAIN COMPONENT =====

export default function WhitepaperPage() {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [tocOpen, setTocOpen] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:max-w-6xl">
      <div className={isDesktop ? "grid grid-cols-[220px_1fr] gap-12" : ""}>
        
        {/* Sidebar - Table of Contents (Desktop) */}
        {isDesktop && (
          <aside>
            <nav className="sticky top-24">
            <p className="text-xs font-medium uppercase tracking-widest text-ink-tertiary mb-4">
              Contents
            </p>
            <ul className="space-y-1">
              {sections.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`
                      block py-1.5 text-sm transition-colors duration-150 border-l-2 pl-3
                      ${activeSection === id
                        ? 'border-gold-main text-gold-main font-medium'
                        : 'border-transparent text-ink-tertiary hover:text-ink-secondary hover:border-border-default'
                      }
                    `}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-default">
              <p className="text-xs text-ink-tertiary mb-2">Version 1.0</p>
              <p className="text-xs text-ink-tertiary">January 2026</p>
            </div>
          </nav>
        </aside>
        )}

        {/* Main Content */}
        <article className="min-w-0">
          {/* Header */}
          <header className="mb-12 sm:mb-16 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium uppercase tracking-widest text-gold-main">
                Whitepaper
              </span>
              <span className="text-ink-tertiary">·</span>
              <span className="text-xs text-ink-tertiary">
                v1.0 · January 2026
              </span>
            </div>
            
            <h1 className="display-serif text-3xl sm:text-4xl md:text-5xl text-ink-primary mb-6 leading-tight">
              Golden Gate Protocol
          </h1>
            
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-2xl">
              A real-yield stablecoin ecosystem channeling sustainable cashflows from 
              the real world into a composable, programmable digital dollar.
            </p>
          </header>

          {/* Mobile TOC */}
          {!isDesktop && (
            <div className="mb-8">
              <button 
                onClick={() => setTocOpen(!tocOpen)}
                className="w-full p-4 bg-surface-inset border border-border-default flex items-center justify-between"
              >
                <span className="text-sm font-medium text-ink-primary">Table of Contents</span>
                <svg 
                  className={`w-4 h-4 text-ink-tertiary transition-transform ${tocOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {tocOpen && (
                <ul className="p-4 bg-surface-inset border border-t-0 border-border-default space-y-2">
                  {sections.map(({ id, title }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={() => setTocOpen(false)}
                        className="text-sm text-ink-secondary hover:text-gold-main"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Content */}
          <div className="prose-journal animate-fade-in-up animation-delay-100">
            
            {/* 1. Executive Summary */}
            <section id="executive-summary">
              <h2>1. Executive Summary</h2>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8 not-prose">
                <StatCard value="$300B+" label="Stablecoin Market" sublabel="2025 market cap" />
                <StatCard value="$0" label="User Yield" sublabel="Current return to holders" />
                <StatCard value="$4.5B" label="Tether Q2 Profit" sublabel="From T-bill yield alone" />
              </div>
              
              <p className="text-lg text-ink-secondary leading-relaxed">
                <strong>Stablecoins today are stuck in the past.</strong>
              </p>
              
              <p>
                Despite representing over $300 billion in circulating supply and powering trillions 
                in settlement volume across crypto and DeFi, today's stablecoins behave like stagnant 
                IOUs. They offer no yield, no upside, and no connection to the financial engines that 
                underpin their value. They sit on the balance sheets of centralized issuers, accumulating 
                interest from Treasuries or commercial paper, while users — the ones actually using the 
                stablecoins — receive nothing.
              </p>
              
              <p>
                <strong>Golden Gate exists to change that.</strong>
              </p>
              
              <p>
                We are building a <em>real-yield monetary layer for the Internet of Value</em> — a 
                programmable, composable stablecoin system that transforms traditional market cashflows 
                into transparent, on-chain rewards.
              </p>
              
              <p>
                At the center is <strong>USDau</strong>, a fully collateralized stablecoin backed 1:1 
                by USDC or USDT. Users can stake their USDau to receive <strong>sUSDau</strong>, a 
                non-transferable yield-bearing token that captures revenue generated by real-world 
                arbitrage operations — starting with licensed physical gold trades.
              </p>
              
              <p>
                This model does not rely on unsustainable emissions or synthetic delta strategies. 
                Golden Gate taps into non-crypto sources of return — like physical gold arbitrage — 
                and routes those flows on-chain, turning the protocol itself into a bridge between 
                traditional value systems and the programmable internet.
              </p>
              
              <blockquote>
                "This is not a speculative bet. This is the beginning of a new monetary layer — 
                one that earns yield, respects compliance, and serves real users."
              </blockquote>
            </section>

            <hr />

            {/* 2. Market Landscape */}
            <section id="market-landscape">
              <h2>2. Market Landscape</h2>
              
              <h3>Stablecoins: From Fiat-Mirroring to Yield Infrastructure</h3>
              
              <p>
                Stablecoins have grown from $20 billion in 2020 to over $300 billion in 2025 
                (source: DefiLlama, CoinGecko). They serve as the default currency for DeFi, 
                centralized exchanges, and increasingly — real-world commerce.
              </p>
              
              <p>
                <strong>Yet, none of the value they sit on actually flows back to users.</strong>
              </p>
              
              <ul>
                <li>
                  <strong>Tether (USDT)</strong> earned $4.5B in Q2 2024 profit alone from T-bill 
                  yield (WSJ).
                </li>
                <li>
                  <strong>Circle (USDC)</strong> operates a similarly conservative reserve structure — 
                  while returning zero yield to stablecoin holders.
                </li>
              </ul>
              
              <h3>Yield Wants to Be On-Chain</h3>
              
              <p>
                The market is already signaling demand for yield-bearing stable primitives:
              </p>
              
              {/* Comparison Grid */}
              <div className="my-8 not-prose">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-surface-inset border border-border-default">
                    <p className="font-medium text-ink-primary mb-2">Ethena (USDe)</p>
                    <p className="text-2xl font-mono text-gold-main mb-2">~20% APY</p>
                    <p className="text-xs text-signal-warning">⚠ Directional risk (delta-hedged)</p>
                  </div>
                  <div className="p-5 bg-surface-inset border border-border-default">
                    <p className="font-medium text-ink-primary mb-2">BlackRock BUIDL</p>
                    <p className="text-2xl font-mono text-gold-main mb-2">~5% APY</p>
                    <p className="text-xs text-signal-warning">⚠ No programmability</p>
                  </div>
                  <div className="p-5 bg-gold-pale/30 border border-gold-main/50">
                    <p className="font-medium text-gold-dark mb-2">Golden Gate</p>
                    <p className="text-2xl font-mono text-gold-main mb-2">Real Yield</p>
                    <p className="text-xs text-signal-success">✓ Compliant + Composable</p>
                  </div>
                </div>
              </div>
              
              <p>
                There is no neutral, on-chain-first, real-world-yield stablecoin that scales 
                with compliance and simplicity.
              </p>
              
              <p>
                <strong>That's the gap Golden Gate fills.</strong>
              </p>
            </section>

            <hr />

            {/* 3. The Golden Gate Thesis */}
            <section id="thesis">
              <h2>3. The Golden Gate Thesis</h2>
              
              <blockquote>
                "Turn the world's safest assets into the world's most useful assets."
              </blockquote>
              
              <p>
                Golden Gate builds a stablecoin system that solves the missing piece in crypto's 
                monetary stack: <em>real-world yield that users can trust</em>.
              </p>
              
              <p>
                This is not about betting on derivatives or gaming emissions. It's about plugging 
                in real-world trading systems — like gold arbitrage — and routing their profits 
                back to users who hold and stake the system's base asset: USDau.
              </p>
              
              <p>
                And instead of building one-off yield wrappers or synthetic assets, Golden Gate 
                embeds the yield at the monetary layer — making it composable, transferable, and 
                programmable from Day 1.
              </p>
              
              <h3>The Protocol Flow</h3>
              
              {/* Protocol Flow Infographic */}
              <div className="not-prose">
                <ProtocolFlowInfographic />
              </div>
              
              <p>
                This is <strong>real yield</strong>, in real dollars, flowing from real economic activity, 
                not token inflation or ponzinomics. Critically, this is not yield derived from token 
                emissions or leveraged derivatives. Golden Gate's revenue comes from real economic 
                activity in traditional markets — a fundamental distinction from protocols whose 
                yields depend on perpetual inflows or unsustainable incentive structures.
              </p>
              
              <p>
                <em>It's the natural evolution of what stablecoins should have been all along.</em>
              </p>
            </section>

            <hr />

            {/* 4. Protocol Architecture */}
            <section id="architecture">
              <h2>4. Protocol Architecture</h2>
              
              <p>
                Golden Gate is designed to be stable, composable, and compliance-first — while 
                unlocking real-world yield flows at the base layer.
              </p>
              
              <p>
                The system consists of three core tokens, a smart contract-controlled treasury, 
                and an external arbitrage execution partner.
              </p>
              
              <h3>Token Overview</h3>
              
              {/* Enhanced Table */}
              <div className="my-8 not-prose overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-surface-inset">
                      <th className="text-left p-4 text-xs font-medium uppercase tracking-wider text-ink-tertiary border-b border-border-default">Token</th>
                      <th className="text-left p-4 text-xs font-medium uppercase tracking-wider text-ink-tertiary border-b border-border-default">Role</th>
                      <th className="text-center p-4 text-xs font-medium uppercase tracking-wider text-ink-tertiary border-b border-border-default">Transferable</th>
                      <th className="text-center p-4 text-xs font-medium uppercase tracking-wider text-ink-tertiary border-b border-border-default">Yield</th>
                      <th className="text-left p-4 text-xs font-medium uppercase tracking-wider text-ink-tertiary border-b border-border-default">Backed By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-default hover:bg-surface-inset/50 transition-colors">
                      <td className="p-4">
                        <span className="font-mono text-slate-main font-medium">USDau</span>
                      </td>
                      <td className="p-4 text-sm text-ink-secondary">Stablecoin, fully collateralized</td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-signal-success/10 text-signal-success">✓</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-surface-inset text-ink-tertiary">—</span>
                      </td>
                      <td className="p-4 text-sm text-ink-secondary">USDC/USDT → tokenized T-bills</td>
                    </tr>
                    <tr className="border-b border-border-default bg-gold-pale/20 hover:bg-gold-pale/30 transition-colors">
                      <td className="p-4">
                        <span className="font-mono text-gold-main font-medium">sUSDau</span>
                      </td>
                      <td className="p-4 text-sm text-ink-secondary">Staked receipt, claim on yield</td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-surface-inset text-ink-tertiary">—</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold-main text-ink-on-gold text-xs font-bold">$</span>
                      </td>
                      <td className="p-4 text-sm text-ink-secondary">Protocol Treasury yield</td>
                    </tr>
                    <tr className="hover:bg-surface-inset/50 transition-colors">
                      <td className="p-4">
                        <span className="font-mono text-slate-main font-medium">GG</span>
                      </td>
                      <td className="p-4 text-sm text-ink-secondary">Governance, emissions, loyalty</td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-signal-success/10 text-signal-success">✓</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-xs text-gold-main font-mono">veGG</span>
                      </td>
                      <td className="p-4 text-sm text-ink-secondary">Protocol rewards, buybacks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3>System Flow</h3>
              
              {/* System Flow Infographic */}
              <div className="not-prose">
                <SystemFlowInfographic />
              </div>
              
              <ol>
                <li>Users deposit USDC/USDT → mint USDau</li>
                <li>Users stake USDau → receive sUSDau</li>
                <li>Treasury routes pooled liquidity to arbitrage partner</li>
                <li>Partner returns net profits (in USDC) to Treasury</li>
                <li>Treasury distributes yield to sUSDau holders, rewards to GG token ecosystem</li>
              </ol>
              
              <h3>Treasury Structure</h3>
              
              <ul>
                <li><strong>Multi-signature custody</strong>, with optional modular vaults (Fireblocks, Copper)</li>
                <li><strong>On-chain caps for exposure:</strong> e.g., max 60% deployed to gold per epoch</li>
                <li><strong>Redemption buffer:</strong> 10–20% of TVL in reserve</li>
                <li><strong>Governance throttle:</strong> DAO can pause or redirect flow based on performance</li>
              </ul>
            </section>

            <hr />

            {/* 5. The Yield Engine */}
            <section id="yield-engine">
              <h2>5. The Yield Engine</h2>
              
              <p>
                Golden Gate's yield engine is structured to evolve in phases, starting with 
                licensed gold arbitrage and expanding to other real-world and on-chain sources 
                as compliance permits.
              </p>
              
              <p>
                Golden Gate's yield engine is designed for durability across market cycles. 
                Rather than depending on a single yield source — which creates fragility when 
                that source underperforms or faces regulatory pressure — the protocol architecture 
                supports modular expansion. Each phase adds uncorrelated yield streams while 
                preserving the integrity of the stablecoin base layer.
              </p>
              
              {/* Yield Engine Phases Visual */}
              <div className="my-10 not-prose">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Phase 1 */}
                  <div className="p-6 bg-gold-pale/30 border-2 border-gold-main">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-0.5 bg-gold-main text-ink-on-gold text-xs font-medium uppercase tracking-wider">Live</span>
                      <span className="text-xs font-mono text-ink-tertiary">Phase 1</span>
                    </div>
                    <h4 className="font-medium text-ink-primary mb-3">Gold Arbitrage</h4>
                    <ul className="space-y-2 text-sm text-ink-secondary">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-gold-main mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Cross-market spread capture
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-gold-main mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        GST rebate arbitrage
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-gold-main mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Pre-cleared banking rails
                      </li>
                    </ul>
                  </div>
                  
                  {/* Phase 2 */}
                  <div className="p-6 bg-surface-card border border-border-default">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-0.5 bg-surface-inset text-ink-tertiary text-xs font-medium uppercase tracking-wider">Planned</span>
                      <span className="text-xs font-mono text-ink-tertiary">Phase 2</span>
                    </div>
                    <h4 className="font-medium text-ink-primary mb-3">Tokenized T-Bills</h4>
                    <ul className="space-y-2 text-sm text-ink-secondary">
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 mt-0.5 rounded-full border border-border-strong flex-shrink-0" />
                        BlackRock BUIDL integration
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 mt-0.5 rounded-full border border-border-strong flex-shrink-0" />
                        MiCA-compliant vehicles
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 mt-0.5 rounded-full border border-border-strong flex-shrink-0" />
                        On-chain auditable positions
                      </li>
                    </ul>
                  </div>
                  
                  {/* Phase 3 */}
                  <div className="p-6 bg-surface-card border border-border-default">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-0.5 bg-surface-inset text-ink-tertiary text-xs font-medium uppercase tracking-wider">Optional</span>
                      <span className="text-xs font-mono text-ink-tertiary">Phase 3</span>
                    </div>
                    <h4 className="font-medium text-ink-primary mb-3">DeFi Strategies</h4>
                    <ul className="space-y-2 text-sm text-ink-secondary">
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 mt-0.5 rounded-full border border-border-strong flex-shrink-0" />
                        Stableswap LP (Curve)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 mt-0.5 rounded-full border border-border-strong flex-shrink-0" />
                        Delta-neutral vaults
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-4 h-4 mt-0.5 rounded-full border border-border-strong flex-shrink-0" />
                        Options income vaults
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <blockquote>
                "This forms the foundational yield layer and the protocol's primary competitive moat. 
                Replicating this operation requires years of regulatory licensing, banking relationships, 
                and logistics partnerships — not merely capital or technical capability."
              </blockquote>
            </section>

            <hr />

            {/* 6. Token Design */}
            <section id="token-design">
              <h2>6. Token Design</h2>
              
              <p>
                Golden Gate's token architecture is built for longevity, participation, and 
                programmable flexibility.
              </p>
              
              {/* Token Cards */}
              <div className="my-10 not-prose grid grid-cols-1 md:grid-cols-3 gap-6">
                <TokenCard 
                  name="USDau"
                  tagline="Stable. Composable. Redeemable."
                  variant="usdau"
                  features={[
                    'Pegged 1:1 to USD',
                    'Backed by USDC/USDT reserves',
                    'Redeemable via protocol queue',
                    'Not yield-bearing — for liquidity',
                  ]}
                />
                <TokenCard 
                  name="sUSDau"
                  tagline="Your yield. On-chain."
                  variant="susdau"
                  features={[
                    'Earned by staking USDau',
                    'Captures real-world yield',
                    'Non-transferable receipt',
                    'Tracks protocol revenue',
                  ]}
                />
                <TokenCard 
                  name="GG"
                  tagline="Govern. Earn. Align."
                  variant="gg"
                  features={[
                    'Protocol governance',
                    'Fixed supply: 1B tokens',
                    'veGG lock for emissions',
                    'Loyalty NFT multipliers',
                  ]}
                />
              </div>
              
              {/* GG Token Distribution */}
              <h3>GG Token Distribution</h3>
              
              <div className="my-8 not-prose">
                <div className="p-6 bg-surface-inset border border-border-default">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-ink-tertiary">Total Supply</span>
                    <span className="font-mono text-lg text-ink-primary">1,000,000,000 GG</span>
                  </div>
                  
                  {/* Distribution Bar */}
                  <div className="h-4 rounded-full overflow-hidden flex mb-4">
                    <div className="bg-gold-main" style={{ width: '30%' }} title="Emissions (30%)" />
                    <div className="bg-slate-main" style={{ width: '25%' }} title="Team (25%)" />
                    <div className="bg-slate-light" style={{ width: '20%' }} title="Treasury (20%)" />
                    <div className="bg-slate-muted" style={{ width: '15%' }} title="Investors (15%)" />
                    <div className="bg-border-strong" style={{ width: '10%' }} title="Community (10%)" />
                  </div>
                  
                  {/* Legend */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gold-main rounded-sm" />
                      <span className="text-ink-secondary">Emissions 30%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-slate-main rounded-sm" />
                      <span className="text-ink-secondary">Team 25%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-slate-light rounded-sm" />
                      <span className="text-ink-secondary">Treasury 20%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-slate-muted rounded-sm" />
                      <span className="text-ink-secondary">Investors 15%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-border-strong rounded-sm" />
                      <span className="text-ink-secondary">Community 10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr />

            {/* 7. Legal Framework & Compliance */}
            <section id="legal-compliance">
              <h2>7. Legal Framework & Compliance Roadmap</h2>
              
              <p>
                Golden Gate is built from day one with a modular, compliance-aligned legal 
                architecture — starting offshore and expanding into regulated markets via 
                a phased EMI + MiCA roadmap.
              </p>
              
              {/* Compliance Phases Visual */}
              <div className="my-10 not-prose">
                <div className="space-y-4">
                  {/* Phase 1 */}
                  <div className="p-5 border-l-4 border-signal-success bg-signal-success/5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-signal-success font-medium">Phase 1</span>
                      <span className="text-xs text-signal-success">• Live</span>
                    </div>
                    <h4 className="font-medium text-ink-primary mb-2">BVI Foundation</h4>
                    <p className="text-sm text-ink-secondary mb-3">Offshore protocol foundation with discretionary redemption</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-surface-card border border-border-default text-xs text-ink-tertiary">Non-custodial</span>
                      <span className="px-2 py-1 bg-surface-card border border-border-default text-xs text-ink-tertiary">No securities classification</span>
                      <span className="px-2 py-1 bg-surface-card border border-border-default text-xs text-ink-tertiary">Separate legal entities</span>
                    </div>
                  </div>
                  
                  {/* Phase 2 */}
                  <div className="p-5 border-l-4 border-gold-main bg-gold-pale/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-gold-main font-medium">Phase 2</span>
                      <span className="text-xs text-gold-main">• In Progress</span>
                    </div>
                    <h4 className="font-medium text-ink-primary mb-2">EMI Licensing</h4>
                    <p className="text-sm text-ink-secondary mb-3">Electronic Money Institution license under MiCA</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-surface-card border border-border-default text-xs text-ink-tertiary">Fiat on/off-ramps</span>
                      <span className="px-2 py-1 bg-surface-card border border-border-default text-xs text-ink-tertiary">T-bill access</span>
                      <span className="px-2 py-1 bg-surface-card border border-border-default text-xs text-ink-tertiary">Redemption guarantees</span>
                    </div>
                  </div>
                  
                  {/* Phase 3 */}
                  <div className="p-5 border-l-4 border-border-strong bg-surface-inset">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-ink-tertiary font-medium">Phase 3</span>
                      <span className="text-xs text-ink-tertiary">• Planned</span>
                    </div>
                    <h4 className="font-medium text-ink-primary mb-2">MiCA Alignment</h4>
                    <p className="text-sm text-ink-secondary mb-3">Full regulatory compliance as ART or EMT</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-surface-card border border-border-default text-xs text-ink-tertiary">KYC/AML oracle</span>
                      <span className="px-2 py-1 bg-surface-card border border-border-default text-xs text-ink-tertiary">Full auditability</span>
                      <span className="px-2 py-1 bg-surface-card border border-border-default text-xs text-ink-tertiary">Institutional grade</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3>Disclaimers</h3>
              
              <ul>
                <li>USDau is not a deposit, not a security, and does not promise redemption</li>
                <li>Yield is routed via protocol discretion from off-chain revenue</li>
                <li>DAO holds control over Treasury operations, with full transparency to token holders</li>
              </ul>
            </section>

            <hr />

            {/* 8. Risk Management */}
            <section id="risk-management">
              <h2>8. Risk Management</h2>
              
              <p>
                Golden Gate is designed to prioritize stability and resilience over speed or 
                speculation. Key risk domains and mitigations are described below.
              </p>
              
              {/* Risk Cards */}
              <div className="my-10 not-prose grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 border border-border-default">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-slate-main/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-ink-primary">Smart Contract Risk</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-ink-secondary">
                    <li>• Tier-1 audit firms (pre-launch)</li>
                    <li>• DAO governance + multisig gating</li>
                    <li>• Time-locked upgrades + pause function</li>
                  </ul>
                </div>
                
                <div className="p-5 border border-border-default">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold-pale flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-ink-primary">Arbitrage Execution Risk</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-ink-secondary">
                    <li>• Off-chain by licensed partner</li>
                    <li>• Time-bound staking epochs (3-7 days)</li>
                    <li>• Max 60% capital allocation cap</li>
                  </ul>
                </div>
                
                <div className="p-5 border border-border-default">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-signal-warning/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-signal-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-ink-primary">Redemption / Depeg Risk</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-ink-secondary">
                    <li>• 10-20% TVL buffer in USDC/USDT</li>
                    <li>• Redemption queue on imbalance</li>
                    <li>• Circuit breakers prevent stampedes</li>
                  </ul>
                </div>
                
                <div className="p-5 border border-border-default">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-slate-main/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-ink-primary">Protocol Governance Risk</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-ink-secondary">
                    <li>• veGG aligns long-term stakers</li>
                    <li>• Treasury policies via quorum + timelock</li>
                    <li>• Emergency shutdown pathway</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr />

            {/* 9. Roadmap & Execution Plan */}
            <section id="roadmap">
              <h2>9. Roadmap & Execution Plan</h2>
              
              <p>
                Golden Gate is already executing. Here's how we scale from working pilot to 
                global monetary layer:
              </p>
              
              {/* Roadmap Timeline */}
              <div className="not-prose">
                <RoadmapTimeline />
              </div>
            </section>

            <hr />

            {/* 10. Appendix & Sources */}
            <section id="appendix">
              <h2>10. Appendix & Sources</h2>
              
              <h3>Market Data Sources</h3>
              
              <ul>
                <li>Stablecoin market cap: ~$320B (<a href="https://defillama.com/stablecoins" target="_blank" rel="noopener noreferrer" className="text-gold-main hover:text-gold-light underline underline-offset-2">DefiLlama, Sep 2025</a>)</li>
                <li>RWA growth: Tokenized T-bills &gt; $1.5B AUM (<a href="https://messari.io" target="_blank" rel="noopener noreferrer" className="text-gold-main hover:text-gold-light underline underline-offset-2">Messari, Q3 2025</a>)</li>
                <li>Gold arbitrage: Historic spread analysis (<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2981717" target="_blank" rel="noopener noreferrer" className="text-gold-main hover:text-gold-light underline underline-offset-2">SSRN</a>)</li>
                <li>BlackRock BUIDL (<a href="https://blockworks.co/news/blackrock-buidl" target="_blank" rel="noopener noreferrer" className="text-gold-main hover:text-gold-light underline underline-offset-2">Blockworks</a>)</li>
              </ul>
              
              <h3>Legal & Compliance Docs</h3>
              
              <ul>
                <li>Golden Gate Collateral Compliance Memo (2025.10)</li>
                <li>Extended Arbitrage Risk Mitigation Addendum</li>
                <li>BVI Structure Draft + Phase 2 Licensing Notes</li>
              </ul>
              
              <h3>Visuals (included in design draft)</h3>
              
              <ul>
                <li>Token architecture overview</li>
                <li>Yield routing flowchart (core + roadmap)</li>
                <li>Redemption + staking mechanism</li>
                <li>GG emissions + governance loop</li>
              </ul>
              
              <div className="mt-12 p-8 bg-gold-pale/50 border border-gold-main/20">
                <p className="text-center text-ink-primary font-medium mb-2">
                  <span className="display-serif text-2xl">Real Yield. Real Money.</span>
                </p>
                <p className="text-center text-ink-secondary">
                  The next monetary layer for the Internet of Value.
          </p>
        </div>
            </section>

          </div>
        </article>
        </div>
    </div>
  );
}
