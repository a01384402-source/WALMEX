# WALMEX — FINA 405 Dashboard FINAL.1

Academic dashboard for **Wal-Mart de México, S.A.B. de C.V. (WALMEX.MX)** and Mexico.

## Files
- `index.html` — dashboard structure
- `styles.css` — visual design
- `data.js` — centralized project data
- `charts.js` — Chart.js visualizations

## Data conventions
Corporate financial statement figures are presented in **MXN billions** unless noted otherwise. Peer valuation/profitability ratios are unitless or percentages. The source screenshots for peer market capitalization and enterprise value were displayed in USD; this dashboard does not silently convert those absolute peer figures.

## Main sources
1. Refinitiv Workspace screenshots supplied by the project team (financial statements, estimates, peer analysis, debt structure, stock data).
2. Bloomberg screenshots supplied by the project team (Mexico macro, USD/MXN, sovereign risk, WALMEX context).
3. WALMEX annual-report / market-position evidence used in the project research.

## GitHub Pages
After uploading these files to the repository:
1. Open **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**.
5. Click **Save**.

The dashboard should then be available at your GitHub Pages URL.

## Notes
- Refinitiv's Debt Structure screen reported no outstanding conventional bond or loan instruments for WALMEX. Balance-sheet debt is primarily lease liabilities.
- `Pretax ROA` is labeled as such because that is the definition displayed in Refinitiv Peer Analysis.
- Missing macro values are not fabricated.


## V2 additions
- 5-year stock-performance context.
- Historical ratio trend.
- Market position and competitive landscape.
- Expanded Mexico macro interpretation.
- Explicit risk methodology and financing implications.
- Final key takeaways.
- Unsupported macro values remain disclosed rather than invented.


## FINAL final polish
- Restored consistent card styling for Market Performance and risk methodology.
- Improved ratio-chart contrast and readability with separate axes.
- Ensured Market Position / Competitive Landscape is visible.
- Added Implications to the sticky navigation.
- Improved spacing and padding in Financing Implications and Key Takeaways.


## FINAL.1 fixes
- Fixed visible market-position block.
- Fixed high-contrast ratio trend chart.
- Fixed risk-methodology card layout.
- Fixed Key Takeaways padding.
- Ensured Implications navigation target is included.


## Final release
Peer Comparison was fully rebuilt as three independent normal-flow rows to eliminate overlap with the valuation table and Country Overview.


FINAL fix: rebuilt Peer Comparison layout and constrained EV/EBITDA chart to prevent any overlap with valuation tables or Country Overview.
