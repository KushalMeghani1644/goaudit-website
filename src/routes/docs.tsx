import * as React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Copy } from 'lucide-react'

export const Route = createFileRoute('/docs')({
  component: DocumentationPage,
})

function DocumentationPage() {
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
          <a href="#" className="block hover:text-blue-600 font-medium text-gray-900 dark:text-gray-100 dark:hover:text-blue-400">
            Introduction
          </a>
          <a href="#" className="block hover:text-blue-600 text-gray-600 dark:text-gray-400 dark:hover:text-blue-400">
            Installation
          </a>
          <a href="#" className="block hover:text-blue-600 text-gray-600 dark:text-gray-400 dark:hover:text-blue-400">
            Usage Examples
          </a>
          <a href="#" className="block hover:text-blue-600 text-gray-600 dark:text-gray-400 dark:hover:text-blue-400">
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

          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Introduction</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            GoAudit is a tool that checks whether an <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm">npm install</code> or a{' '}
            <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm">curl | sh</code> script is malicious by monitoring its behavior in a secure
            sandbox.
          </p>

          <hr className="my-8 border-gray-200 dark:border-gray-800" />

          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Installation</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Install the latest version of GoAudit directly using Go:
          </p>
          <div className="flex items-center justify-between w-full bg-white dark:bg-gray-900 border border-blue-200 dark:border-gray-800 rounded-xl px-4 py-3 mb-8 shadow-sm hover:shadow-md transition-shadow">
            <code className="font-mono text-sm text-gray-800 dark:text-gray-300">
              go install github.com/KushalMeghani1644/goaudit@latest
            </code>
            <button 
              className="text-blue-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-gray-200 transition-colors"
              aria-label="Copy to clipboard"
              onClick={() => navigator.clipboard.writeText('go install github.com/KushalMeghani1644/goaudit@latest')}
            >
              <Copy size={18} />
            </button>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Demo Output</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            GoAudit intercepts file reads (like AWS credentials) and network calls.
          </p>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 mb-8">
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex gap-2 border-b border-gray-200 dark:border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="p-6 text-gray-800 dark:text-gray-300 font-mono text-sm leading-loose">
              <div>
                <span className="text-blue-600 dark:text-blue-400">$</span> goaudit scan "cat ~/.aws/credentials"
              </div>
              <div className="text-red-600 dark:text-red-400 font-bold">
                [CRITICAL] File Read: /root/.aws/credentials
              </div>
              <div className="text-gray-500 dark:text-gray-400">Verdict: <span className="text-red-600 dark:text-red-400 font-bold">CRITICAL ✗</span></div>
              <br />
              <div>
                <span className="text-blue-600 dark:text-blue-400">$</span> goaudit scan "npm install lodash"
              </div>
              <div className="text-yellow-600 dark:text-yellow-400 font-bold">
                [WARNING] Network: registry.npmjs.org (104.16.2.34:443)
              </div>
              <div className="text-gray-500 dark:text-gray-400">Verdict: <span className="text-yellow-600 dark:text-yellow-400 font-bold">WARNING ⚠</span></div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Requirements</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Docker installed and running</li>
            <li>gVisor (highly recommended for actual isolation)</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
