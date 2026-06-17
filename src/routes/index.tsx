import * as React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Copy, Check } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  const [isCopied, setIsCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('go install github.com/KushalMeghani1644/GoAudit-CLI/cmd/goaudit@latest')
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 flex flex-col transition-colors duration-200">
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-6xl mx-auto w-full">
        <div className="font-bold text-xl tracking-tight">GoAudit</div>
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="https://github.com/KushalMeghani1644/goaudit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 sm:px-4 py-2 rounded-lg"
          >
            GitHub
          </a>
          <Link 
            to="/docs" 
            className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 sm:px-4 py-2 rounded-lg"
          >
            Docs
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex-1 flex flex-col justify-center">
        <header className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-6">
            <svg
              className="w-8 h-8 text-blue-600 dark:text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 break-words">
            Audit your dependencies.
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            GoAudit checks whether a{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-700 dark:text-gray-300 text-sm">
              npm / pnpm / bun install
            </code>{' '}
            or a{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-700 dark:text-gray-300 text-sm">
              curl | sh
            </code>{' '}
            is malicious by sandboxing the execution.
          </p>
          <div className="mt-10 flex justify-center w-full max-w-lg mx-auto">
            <div className="flex items-center justify-between w-full bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
              <code className="font-mono text-xs sm:text-sm text-gray-800 dark:text-gray-300 break-all mr-3">
                go install github.com/KushalMeghani1644/GoAudit-CLI/cmd/goaudit@latest
              </code>
              <button 
                className="text-blue-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-gray-200 transition-colors"
                aria-label="Copy to clipboard"
                onClick={handleCopy}
              >
                {isCopied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
              </button>
            </div>
          </div>
        </header>

        <main className="animate-fade-up flex flex-col gap-16 w-full">
          <div className="bg-[#1e1e24] w-full mx-auto rounded-2xl shadow-2xl overflow-hidden border border-[#2b2b36]">
            <div className="bg-[#2b2b36] px-4 py-3 flex gap-2 border-b border-[#3f3f4e]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 text-gray-300 font-mono text-xs sm:text-sm md:text-base leading-loose overflow-x-auto">
              <div>
                <span className="text-[#56b6c2]">$</span> goaudit scan "cat ~/.aws/credentials"
              </div>
              <div className="text-gray-400 mt-2 leading-tight whitespace-pre">
                {"╭─────────────────────────────────────────────╮\n"}
                {"│  GoAudit Report: cat ~/.aws/credentials     │\n"}
                {"╰─────────────────────────────────────────────╯"}
              </div>
              <div className="text-[#e06c75] font-bold mt-2">🚨 Verdict: malicious (confidence: 95)</div>
              <div className="text-gray-300 mt-1">🛡️  Sandbox: gVisor (runsc)</div>
              <div className="text-[#e06c75] font-bold mt-2">🔴 Critical Findings</div>
              <div className="text-gray-300 whitespace-pre">   1. CREDENTIAL THEFT: /root/.aws/credentials</div>
              <div className="text-gray-400 whitespace-pre">      └─ Read sensitive files like SSH keys, AWS credentials, or .env secrets</div>
              <div className="text-gray-400 mt-2 whitespace-pre">📋 Summary: 1 critical, 0 warnings, 0 informational</div>
              <div className="text-gray-400 whitespace-pre">   DO NOT INSTALL this package.</div>
              <br />
              <div>
                <span className="text-[#56b6c2]">$</span> goaudit scan-project .
              </div>
              <div className="text-gray-400 mt-2 leading-tight whitespace-pre">
                {"╭─────────────────────────────────────────────╮\n"}
                {"│  GoAudit Report: scan-project .             │\n"}
                {"╰─────────────────────────────────────────────╯"}
              </div>
              <div className="text-[#e5c07b] font-bold mt-2">⚠️  Verdict: suspicious (confidence: 45)</div>
              <div className="text-gray-300 mt-1">⚠️  Sandbox: runc (install gVisor for stronger isolation)</div>
              <div className="text-[#e5c07b] font-bold mt-2">⚠️  Warnings</div>
              <div className="text-gray-300 whitespace-pre">   1. PACKAGE HAS LIFECYCLE SCRIPT</div>
              <div className="text-gray-400 whitespace-pre">      └─ The package defines a lifecycle script in its registry metadata</div>
              <div className="text-gray-400 mt-2 whitespace-pre">📋 Summary: 0 critical, 1 warnings, 0 informational</div>
              <div className="text-gray-400 whitespace-pre">   Use --ci for full JSON output.</div>
            </div>
          </div>

          <section className="mt-8 mb-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What GoAudit catches
              </h2>
            </div>
            <div className="grid md:grid-cols-3 border-y border-gray-200 dark:border-[#2b2b36] divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-[#2b2b36] mt-12 mb-24">
              {/* Feature 1 */}
              <div className="p-8 md:p-12 flex flex-col group">
                <div className="text-[10px] font-mono tracking-widest text-cyan-700 dark:text-[#56b6c2] mb-12 uppercase opacity-80">FIG 0.1</div>
                <div className="h-48 mb-12 flex items-center justify-center text-cyan-700 dark:text-[#56b6c2] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-full h-full max-w-[140px]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                    {/* Hexagon containment field */}
                    <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" strokeDasharray="2 2" />
                    {/* Inner solid box representing the trap */}
                    <rect x="40" y="40" width="20" height="20" />
                    <circle cx="50" cy="50" r="2" fill="currentColor" />
                    {/* Lines connecting to center representing trapped behavior */}
                    <path d="M20,32 L40,40" />
                    <path d="M80,32 L60,40" />
                    <path d="M50,85 L50,60" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Catch malicious behavior</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Detect unauthorized file access, memory injections, and backdoors by running executions in a secure decoy sandbox.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 md:p-12 flex flex-col group">
                <div className="text-[10px] font-mono tracking-widest text-amber-600 dark:text-[#e5c07b] mb-12 uppercase opacity-80">FIG 0.2</div>
                <div className="h-48 mb-12 flex items-center justify-center text-amber-600 dark:text-[#e5c07b] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-full h-full max-w-[140px]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                    {/* Top root node */}
                    <circle cx="50" cy="20" r="5" />
                    {/* Branches */}
                    <path d="M50,25 L30,45" />
                    <path d="M50,25 L70,45" />
                    <path d="M30,55 L20,75" />
                    <path d="M30,55 L40,75" />
                    <path d="M70,55 L60,75" />
                    <path d="M70,55 L80,75" />
                    {/* Sub-nodes */}
                    <rect x="25" y="45" width="10" height="10" />
                    <rect x="65" y="45" width="10" height="10" />
                    <circle cx="20" cy="80" r="3" />
                    <circle cx="40" cy="80" r="3" />
                    <circle cx="60" cy="80" r="3" />
                    <circle cx="80" cy="80" r="3" />
                    {/* Scanning beam line */}
                    <line x1="10" y1="50" x2="90" y2="50" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Full Project Scanning</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Analyze JavaScript codebases, resolving lockfiles and verifying registry metadata to catch anomalies and risky lifecycle scripts.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 md:p-12 flex flex-col group">
                <div className="text-[10px] font-mono tracking-widest text-rose-600 dark:text-[#e06c75] mb-12 uppercase opacity-80">FIG 0.3</div>
                <div className="h-48 mb-12 flex items-center justify-center text-rose-600 dark:text-[#e06c75] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-full h-full max-w-[140px]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                    {/* Grid background */}
                    <path d="M10,20 L90,20 M10,40 L90,40 M10,60 L90,60 M10,80 L90,80" strokeOpacity="0.2" />
                    <path d="M20,10 L20,90 M40,10 L40,90 M60,10 L60,90 M80,10 L80,90" strokeOpacity="0.2" />
                    {/* Noisy signal entering */}
                    <path d="M10,50 Q20,20 30,50 T50,50" />
                    {/* Filtered flat signal exiting */}
                    <path d="M50,50 L90,50" strokeWidth="1" />
                    {/* Filter boundary indicator */}
                    <line x1="50" y1="20" x2="50" y2="80" strokeDasharray="2 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Intelligent Filtering</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Reduce noise with an advanced tracing engine that deduplicates redundant calls and suppresses expected sandbox behavior.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
