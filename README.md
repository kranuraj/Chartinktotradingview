# Chartink to TradingView Chrome Extension


Installation and Usage Guide

Chartink to TradingView Connector (Chrome Extension)

1. Download the Extension
Clone or download this repository from GitHub
Extract the ZIP file if you downloaded it manually
Ensure these files are present in one folder
manifest.json
content.js
assets folder if included
2. Enable Developer Mode in Chrome
Open Chrome
Go to chrome://extensions
Turn ON Developer mode (top-right corner)

Why this matters

Chrome blocks local extensions by default
Developer mode allows you to load your custom plugin
3. Load the Extension
Click Load unpacked
Select the folder where your extension files are located
You should now see:
Chartink to TradingView Connector in your extensions list

What to check

No errors shown on the extension card
Extension toggle is enabled
4. Reload After Updates

Every time you update code:

Go to chrome://extensions
Click the Reload button on the extension card
Refresh your browser tab

Why this matters

Chrome does not auto-update local extensions
Reload ensures latest logic is applied
5. Using the Extension
Step 1: Open Chartink Screener
Visit Chartink
Run any screener query
Wait for the results table to load
Step 2: What the Extension Does Automatically
Scans every row in the results table
Targets the 3rd column (Symbol column)
Detects stock tickers using regex
Works even if the symbol is plain text
Example matches: RELIANCE, TCS, HDFCBANK

Why this is important

Chartink does not always structure symbols as links
Regex ensures reliable detection across all screeners
Step 3: Identify the TradingView Icon
You will see an icon added next to each ticker
The icon appears inline within the Symbol column
Step 4: Open Chart in TradingView
Click the icon next to any stock
A new tab opens on TradingView
The correct stock chart loads automatically

What happens behind the scenes

The extension maps the ticker to TradingView format
Opens the chart URL in a new tab
6. Where It Works
All Chartink pages
All screener result views
Thanks to updated manifest.json with broader URL matching
7. Troubleshooting

Icon not visible?

Refresh the Chartink page
Reload the extension from chrome://extensions
Check if Developer mode is ON

Still not working?

Open DevTools (Right click → Inspect)
Check Console for errors
Ensure table structure has not changed
8. Key Capabilities
Detects tickers dynamically using regex
Works even when symbols are not clickable
Adds UI without breaking Chartink layout
One-click navigation to TradingView


