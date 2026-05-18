import * as React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Copy, Check } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  const [isCopied, setIsCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('go install github.com/KushalMeghani1644/GoAudit-CLI@latest')
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 flex flex-col transition-colors duration-200">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto w-full">
        <div className="font-bold text-xl tracking-tight">GoAudit</div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/KushalMeghani1644/goaudit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg"
          >
            GitHub
          </a>
          <Link 
            to="/docs" 
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg"
          >
            Documentation
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex-1 flex flex-col justify-center">
        <header className="text-center mb-20">
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
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
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
              <code className="font-mono text-sm text-gray-800 dark:text-gray-300">
                go install github.com/KushalMeghani1644/GoAudit-CLI@latest
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

        <main className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Catch malicious scripts</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Runs installations in a secure container (via Docker & gVisor) to detect
                if unexpected files (like AWS credentials or SSH keys) are accessed.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Seamless CI Integration</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Use the{' '}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm text-gray-800 dark:text-gray-200">
                  --ci
                </code>{' '}
                flag to output JSON results directly into your automated pipelines.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Advanced Controls</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Configure your sandbox with flags like{' '}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm text-gray-800 dark:text-gray-200">
                  --offline
                </code>
                ,{' '}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm text-gray-800 dark:text-gray-200">
                  --allow-domain
                </code>
                , or set custom container images with{' '}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm text-gray-800 dark:text-gray-200">
                  --node-image
                </code>.
              </p>
            </div>
          </div>

          <div className="bg-[#1e1e24] rounded-2xl shadow-2xl overflow-hidden border border-[#2b2b36]">
            <div className="bg-[#2b2b36] px-4 py-3 flex gap-2 border-b border-[#3f3f4e]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="p-6 text-gray-300 font-mono text-sm leading-loose">
              <div>
                <span className="text-[#56b6c2]">$</span> goaudit scan "cat
                ~/.aws/credentials"
              </div>
              <div className="text-[#e06c75] font-bold">
                [CRITICAL] File Read: /root/.aws/credentials
              </div>
              <div className="text-gray-400">Verdict: <span className="text-gray-300 font-bold">MALICIOUS ✗</span></div>
              <br />
              <div>
                <span className="text-[#56b6c2]">$</span> goaudit scan "npm install lodash"
              </div>
              <div className="text-[#e5c07b] font-bold">
                [WARNING] Suspicious Command Pattern: npm install lodash
              </div>
              <div className="text-gray-400">Verdict: <span className="text-gray-300 font-bold">SUSPICIOUS ⚠</span></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
