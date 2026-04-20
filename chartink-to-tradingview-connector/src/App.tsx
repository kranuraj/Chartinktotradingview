/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from 'react';
import { 
  ExternalLink, 
  Chrome, 
  ArrowRight,
  Monitor,
  Code,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'instructions' | 'preview' | 'code'>('instructions');

  return (
    <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans selection:bg-[#141414] selection:text-[#E4E3E0]">
      {/* Navigation Rail */}
      <nav className="fixed top-0 left-0 w-full bg-[#141414] text-[#E4E3E0] z-50 px-6 py-4 flex justify-between items-center bg-opacity-95">
        <div className="flex items-center gap-2">
          <Layers className="w-6 height-6" />
          <span className="font-mono text-sm tracking-tighter uppercase font-bold">Chartink x TradingView</span>
        </div>
        <div className="flex gap-8 text-[11px] font-mono uppercase tracking-[0.2em]">
          <button 
            onClick={() => setActiveTab('instructions')}
            className={`transition-opacity hover:opacity-100 ${activeTab === 'instructions' ? 'opacity-100 underline underline-offset-8' : 'opacity-50'}`}
          >
            Instructions
          </button>
          <button 
            onClick={() => setActiveTab('preview')}
            className={`transition-opacity hover:opacity-100 ${activeTab === 'preview' ? 'opacity-100 underline underline-offset-8' : 'opacity-50'}`}
          >
            Live Preview
          </button>
          <button 
            onClick={() => setActiveTab('code')}
            className={`transition-opacity hover:opacity-100 ${activeTab === 'code' ? 'opacity-100 underline underline-offset-8' : 'opacity-50'}`}
          >
            The Logic
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'instructions' && (
            <motion.div 
              key="instructions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              <section className="border-b border-[#141414] pb-12">
                <h1 className="font-serif italic text-6xl mb-4 leading-tight">
                  Seamless Chart Analysis.
                </h1>
                <p className="text-xl max-w-2xl opacity-70 leading-relaxed font-light">
                  This extension bridges Chartink&apos;s powerful stock screening with TradingView&apos;s advanced charting. 
                  Get instant technical views without leaving your results.
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <Step 
                  number="01" 
                  title="Prepare Folder" 
                  description="Create a new folder named 'chartink-extension'. Inside it, create three files: manifest.json, content.js, and styles.css."
                  icon={<Code className="w-5 h-5" />}
                />
                <Step 
                  number="02" 
                  title="Enable Dev Mode" 
                  description="Open Chrome Settings > Extensions (or chrome://extensions) and toggle 'Developer Mode' [ON] in the top right."
                  icon={<Monitor className="w-5 h-5" />}
                />
                <Step 
                  number="03" 
                  title="Load Unpacked" 
                  description="Click 'Load Unpacked' and select the folder you just created. Ensure manifest.json is directly in that folder."
                  icon={<Chrome className="w-5 h-5" />}
                />
              </div>

              <div className="bg-[#141414] text-[#E4E3E0] p-8 md:p-12 rounded-sm space-y-6">
                <div className="flex items-center gap-4 text-red-400">
                  <Info className="w-6 h-6" />
                  <h3 className="font-mono text-xs uppercase tracking-widest font-bold">Important Fix for "Missing Manifest" Error</h3>
                </div>
                <p className="opacity-70 text-sm leading-relaxed max-w-3xl">
                  If you see "Manifest file is missing or unreadable", it means Chrome cannot find <code className="bg-white bg-opacity-10 px-1 rounded text-white">manifest.json</code> in the folder you selected. Make sure the file is named exactly that (no .txt extension) and it is sitting directly in the folder, not inside a sub-folder.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'preview' && (
            <motion.div 
              key="preview"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="space-y-8"
            >
              <div className="bg-white border border-[#141414] rounded-sm shadow-xl overflow-hidden">
                <div className="bg-[#F5F5F0] border-b border-[#141414] p-4 flex items-center justify-between">
                  <div className="flex gap-1.5 font-mono text-[10px] uppercase opacity-50">
                    <span className="font-bold text-[#141414]">Chartink.com</span>
                    <span>/ screener / bullish-stocks</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#141414] opacity-10"></div>
                    <div className="w-3 h-3 rounded-full bg-[#141414] opacity-10"></div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#141414]">
                        <th className="p-4 font-serif italic text-xs uppercase opacity-50 tracking-widest border-r border-[#141414] w-12">Sr.</th>
                        <th className="p-4 font-serif italic text-xs uppercase opacity-50 tracking-widest border-r border-[#141414]">Stock Name</th>
                        <th className="p-4 font-serif italic text-xs uppercase opacity-50 tracking-widest border-r border-[#141414]">Symbol</th>
                        <th className="p-4 font-serif italic text-xs uppercase opacity-50 tracking-widest">Close</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                      <PreviewRow sr="1" name="Reliance Industries" symbol="RELIANCE" close="2,945.50" />
                      <PreviewRow sr="2" name="HDFC Bank" symbol="HDFCBANK" close="1,542.10" />
                      <PreviewRow sr="3" name="Tata Motors" symbol="TATAMOTORS" close="1,012.35" />
                      <PreviewRow sr="4" name="Infosys" symbol="INFY" close="1,490.00" />
                      <PreviewRow sr="5" name="ICICI Bank" symbol="ICICIBANK" close="1,110.00" />
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-center text-xs opacity-50 font-mono italic">
                * Simulated Chartink environment showing TradingView injection behavior.
              </p>
            </motion.div>
          )}

          {activeTab === 'code' && (
            <motion.div 
              key="code"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="font-serif italic text-4xl mb-4">The Logic.</h2>
              
              <div className="space-y-8">
                <CodeBlock 
                  title="manifest.json" 
                  description="Defines permissions and script injection settings."
                  code={`{
  "manifest_version": 3,
  "name": "Chartink to TradingView Connector",
  "version": "1.0",
  "permissions": ["activeTab"],
  "content_scripts": [
    {
      "matches": [
        "https://chartink.com/screener/*",
        "https://chartink.com/dashboard/*",
        "https://chartink.com/screener"
      ],
      "js": ["content.js"],
      "css": ["styles.css"]
    }
  ]
}`}
                />
                <CodeBlock 
                  title="content.js" 
                  description="The core engine that finds symbols and injects links."
                  code={`const TV_ICON_SVG = \`<svg width="16" height="16" ... />\`;

function addTradingViewLinks() {
    const symbols = document.querySelectorAll('td a[href^="/stocks/"]');
    symbols.forEach(link => {
        if (link.nextElementSibling?.classList.contains('tv-link')) return;
        const symbol = link.textContent.trim();
        const tvLink = document.createElement('a');
        tvLink.href = \`https://www.tradingview.com/chart/?symbol=NSE:\${symbol}\`;
        tvLink.target = '_blank';
        tvLink.className = 'tv-link';
        tvLink.innerHTML = TV_ICON_SVG;
        link.parentNode.insertBefore(tvLink, link.nextSibling);
    });
}

// Observe changes and run initial
new MutationObserver(() => addTradingViewLinks()).observe(document.body, { childList: true, subtree: true });
addTradingViewLinks();`}
                />
                <CodeBlock 
                  title="styles.css" 
                  description="Hover effects and basic styling."
                  code={`.tv-link {
    transition: transform 0.2s;
    display: inline-flex;
    align-items: center;
    margin-left: 4px;
}

.tv-link:hover {
    transform: scale(1.2);
}

.tv-link svg {
    color: #2196F3;
}`}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-auto py-12 px-6 border-t border-[#141414] text-center opacity-40">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em]">
          Designed for Indian Traders &bull; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

function Step({ number, title, description, icon }: { number: string; title: string; description: string; icon: ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="font-serif italic text-4xl opacity-20">{number}</span>
        <div className="bg-[#141414] text-[#E4E3E0] p-2 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="font-bold text-lg uppercase tracking-tight">{title}</h3>
      <p className="text-sm opacity-60 leading-relaxed font-light">{description}</p>
    </div>
  );
}

function PreviewRow({ sr, name, symbol, close }: { sr: string; name: string; symbol: string; close: string }) {
  return (
    <tr className="border-b border-[#141414] border-opacity-10 hover:bg-[#141414] hover:text-[#E4E3E0] transition-colors group">
      <td className="p-4 border-r border-[#141414] border-opacity-10 text-center opacity-40">{sr}</td>
      <td className="p-4 border-r border-[#141414] border-opacity-10">{name}</td>
      <td className="p-4 border-r border-[#141414] border-opacity-10 font-bold flex items-center gap-2">
        <span className="cursor-pointer hover:underline text-blue-600 group-hover:text-blue-300">{symbol}</span>
        <a 
          href={`https://www.tradingview.com/chart/?symbol=NSE:${symbol}`} 
          target="_blank" 
          className="text-[#2196F3] opacity-100 group-hover:text-[#E4E3E0] hover:scale-125 transition-transform"
          title="Open in TradingView"
        >
          <ExternalLink className="w-4 h-4 cursor-pointer" />
        </a>
      </td>
      <td className="p-4 tabular-nums">{close}</td>
    </tr>
  );
}

function CodeBlock({ title, description, code }: { title: string; description: string; code: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline gap-4">
        <h3 className="font-mono text-sm font-bold uppercase tracking-widest">{title}</h3>
        <span className="text-[10px] opacity-40 font-light">{description}</span>
      </div>
      <pre className="bg-[#141414] text-[#E4E3E0] p-6 rounded-sm text-xs font-mono overflow-x-auto border border-white border-opacity-10">
        <code>{code}</code>
      </pre>
    </div>
  );
}

