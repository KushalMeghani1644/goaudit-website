import * as React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Copy, Check } from 'lucide-react'

export const Route = createFileRoute('/docs')({
  component: DocumentationPage,
})

function DocumentationPage() {
  const [isCopied, setIsCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('go install github.com/KushalMeghani1644/GoAudit-CLI@latest')
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-200 flex font-sans transition-colors duration-200">
      <aside className="w-64 border-r border-gray-200 dark:border-gray-800 h-screen hidden md:block p-6 sticky top-0 flex flex-col">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 flex items-center gap-2 transition-colors">
              &larr; Back to Home
            </Link>
          </div>
          <h2 className="text-xl font-bold text-black dark:text-white">GoAudit Docs</h2>
        </div>
        <nav className="space-y-2 text-sm text-gray-600 flex-1">
          <a href="#introduction" className="block hover:text-blue-600 font-medium text-gray-900 dark:text-gray-100 dark:hover:text-blue-400">
            Introduction
          </a>
          <a href="#installation" className="block hover:text-blue-600 text-gray-600 dark:text-gray-400 dark:hover:text-blue-400">
            Installation
          </a>
          <a href="#usage-examples" className="block hover:text-blue-600 text-gray-600 dark:text-gray-400 dark:hover:text-blue-400">
            Usage Examples
          </a>
          <a href="#demo-output" className="block hover:text-blue-600 text-gray-600 dark:text-gray-400 dark:hover:text-blue-400">
            Demo Output
          </a>
          <a href="#advanced-security" className="block hover:text-blue-600 text-gray-600 dark:text-gray-400 dark:hover:text-blue-400">
            Advanced Security
          </a>
          <a href="#requirements" className="block hover:text-blue-600 text-gray-600 dark:text-gray-400 dark:hover:text-blue-400">
            Requirements
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-8 md:p-16 overflow-y-auto">
        <div className="max-w-3xl">
          {/* Mobile Back Button */}
          <div className="md:hidden mb-8">
             <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 flex items-center gap-2 transition-colors">
              &larr; Back to Home
            </Link>
          </div>

          <h1 id="introduction" className="text-4xl font-bold mb-4 text-black dark:text-white pt-8 -mt-8">Introduction</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            GoAudit is a utility for checking whether a package installation or script execution is malicious by monitoring its behavior in a secure sandbox and analyzing static indicators. We support scanning single commands natively (<code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm">npm</code>, <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm">pnpm</code>, <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm">bun</code>, <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm">curl | sh</code>) as well as full projects using the new <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm">scan-project</code> command.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-8 p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
            <strong>Important Note:</strong> GoAudit is not meant for proving absolute maliciousness, it just provides a risk assessment based on behavior and static indicators.
          </p>

          <hr className="my-8 border-gray-200 dark:border-gray-800" />

          <h2 id="installation" className="text-2xl font-bold mb-4 text-black dark:text-white pt-8 -mt-8">Installation</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Install the latest version of GoAudit directly using Go:
          </p>
          <div className="flex items-center justify-between w-full bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-lg px-4 py-3 mb-8 shadow-sm hover:shadow-md transition-shadow">
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

          <h2 id="usage-examples" className="text-2xl font-bold mb-4 text-black dark:text-white pt-8 -mt-8">Usage Examples</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            GoAudit provides a simple UX for scanning commands. Here are the supported flags and package managers:
          </p>
          <div className="bg-[#1e1e24] rounded-2xl shadow-xl overflow-hidden border border-[#2b2b36] mb-8 p-6 text-gray-300 font-mono text-sm leading-loose">
            <div><span className="text-[#56b6c2]">$</span> goaudit scan "npm install &lt;package&gt;"</div>
            <div><span className="text-[#56b6c2]">$</span> goaudit scan "curl -fsSL https://example.com/install.sh | sh"</div>
            <div className="mt-4 text-gray-400"># Scan an entire project (detects package manager automatically)</div>
            <div><span className="text-[#56b6c2]">$</span> goaudit scan-project .</div>
            <div className="mt-4 text-gray-400"># Scan a project including transitive lockfile dependencies</div>
            <div><span className="text-[#56b6c2]">$</span> goaudit scan-project . --include-transitive</div>
            <div className="mt-4 text-gray-400"># Output results as JSON for CI/CD</div>
            <div><span className="text-[#56b6c2]">$</span> goaudit scan-project . --ci</div>
            <div className="mt-4 text-gray-400"># Advanced sandbox controls</div>
            <div><span className="text-[#56b6c2]">$</span> goaudit scan "npm run build" --network off --run-as-root</div>
            <div className="mt-4 text-gray-400"># Specify custom Docker images and upgrade strategies</div>
            <div><span className="text-[#56b6c2]">$</span> goaudit scan-project . --node-image node:current-slim --upgrade-mode ncu</div>
          </div>

          <h2 id="demo-output" className="text-2xl font-bold mb-4 text-black dark:text-white pt-8 -mt-8">Demo Output</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            GoAudit intercepts file reads (like AWS credentials) and network calls.
          </p>
          <div className="bg-[#1e1e24] rounded-2xl shadow-xl overflow-hidden border border-[#2b2b36] mb-8">
            <div className="bg-[#2b2b36] px-4 py-3 flex gap-2 border-b border-[#3f3f4e]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="p-6 text-gray-300 font-mono text-sm leading-loose">
              <div>
                <span className="text-[#56b6c2]">$</span> goaudit scan "cat ~/.aws/credentials"
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

          <h2 id="advanced-security" className="text-2xl font-bold mb-4 text-black dark:text-white pt-8 -mt-8">Advanced Security & Honeypots</h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            GoAudit runs target commands as a non-root <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 text-sm">sandbox</code> user by default to mimic a realistic environment. 
            It automatically injects highly realistic decoy credentials (honeypots) such as <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 text-sm">.ssh/id_rsa</code>, <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 text-sm">.aws/credentials</code>, and Kubernetes configs into the sandbox to bait malicious actors. 
            The expanded tracing engine actively monitors for process injection (<code className="bg-gray-100 dark:bg-gray-800 rounded px-1 text-sm">ptrace</code>), fileless execution (<code className="bg-gray-100 dark:bg-gray-800 rounded px-1 text-sm">memfd_create</code>), and unauthorized network port binding.
          </p>

          <h2 id="requirements" className="text-2xl font-bold mb-4 text-black dark:text-white pt-8 -mt-8">Requirements</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Docker installed and running</li>
            <li>gVisor (highly recommended for actual isolation)</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
