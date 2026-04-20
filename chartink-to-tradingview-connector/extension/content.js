// Chartink to TradingView Connector
const TV_ICON_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-left: 5px; cursor: pointer; color: #2196F3; display: inline-block;"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`;

function addTradingViewLinks() {
    // Chartink usually has a table with class 'table' or inside a div with id 'screener_table'
    const rows = document.querySelectorAll('tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length < 3) return; // Need at least Sr, Name, Symbol

        // Usually Symbol is in the 3rd column (index 2)
        // Let's try to find it dynamically by looking for cells with uppercase alphanumeric text
        const symbolCell = cells[2];
        const symbolLink = symbolCell.querySelector('a');
        
        // Either the symbol is a link or bare text
        let symbolText = "";
        let targetElement = null;

        if (symbolLink) {
            symbolText = symbolLink.textContent.trim();
            targetElement = symbolLink;
        } else {
            // Check if it's alphanumeric and short (standard ticker)
            const text = symbolCell.textContent.trim();
            if (/^[A-Z0-9&_-]{2,15}$/.test(text)) {
                symbolText = text;
                targetElement = symbolCell;
            }
        }

        if (symbolText && targetElement) {
            // Prevent duplicate icons
            if (targetElement.parentElement.querySelector('.tv-link')) return;

            const tvLink = document.createElement('a');
            tvLink.href = `https://www.tradingview.com/chart/?symbol=NSE:${symbolText}`;
            tvLink.target = '_blank';
            tvLink.className = 'tv-link';
            tvLink.title = `Open ${symbolText} in TradingView`;
            tvLink.innerHTML = TV_ICON_SVG;
            tvLink.style.textDecoration = 'none';
            tvLink.style.display = 'inline-block';

            // If target is the cell itself, append. If it's a link, insert after.
            if (targetElement === symbolCell) {
                targetElement.appendChild(tvLink);
            } else {
                targetElement.parentNode.insertBefore(tvLink, targetElement.nextSibling);
            }
        }
    });
}

// Observe for dynamic content updates
const observer = new MutationObserver(() => {
    addTradingViewLinks();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Run immediately
addTradingViewLinks();
