const D = window.WALMEX_DATA;
Chart.defaults.font.family = 'Inter, system-ui, sans-serif';
Chart.defaults.color = '#5d6a76';
Chart.defaults.borderColor = '#e5eaee';

const moneyTooltip = (ctx) => `MXN ${ctx.parsed.y.toFixed(1)}B`;
const base = {responsive:true, maintainAspectRatio:false, plugins:{legend:{labels:{boxWidth:10,usePointStyle:true}},tooltip:{mode:'index',intersect:false}}, scales:{x:{grid:{display:false}},y:{beginAtZero:false}}};

new Chart(document.getElementById('financialChart'),{
  type:'bar',
  data:{labels:D.financials.map(x=>x.year),datasets:[
    {label:'Revenue',data:D.financials.map(x=>x.revenue),backgroundColor:'#174a7e'},
    {label:'EBITDA',data:D.financials.map(x=>x.ebitda),backgroundColor:'#4d91bd'},
    {label:'Net income',data:D.financials.map(x=>x.netIncome),backgroundColor:'#8ab7d3'}
  ]},
  options:{...base,plugins:{...base.plugins,tooltip:{callbacks:{label:moneyTooltip}}}}
});

new Chart(document.getElementById('marginChart'),{
  type:'line',
  data:{labels:D.margins.map(x=>x.year),datasets:[
    {label:'Gross margin',data:D.margins.map(x=>x.gross),borderColor:'#174a7e',backgroundColor:'#174a7e',tension:.25},
    {label:'EBITDA margin',data:D.margins.map(x=>x.ebitda),borderColor:'#2f86c1',backgroundColor:'#2f86c1',tension:.25},
    {label:'EBIT margin',data:D.margins.map(x=>x.ebit),borderColor:'#16805b',backgroundColor:'#16805b',tension:.25},
    {label:'Net margin',data:D.margins.map(x=>x.net),borderColor:'#b7791f',backgroundColor:'#b7791f',tension:.25}
  ]},
  options:{...base,scales:{x:{grid:{display:false}},y:{ticks:{callback:v=>v+'%'}}}}
});

new Chart(document.getElementById('liquidityChart'),{
  type:'line',
  data:{labels:D.financials.map(x=>x.year),datasets:[
    {label:'Cash',data:D.financials.map(x=>x.cash),borderColor:'#16805b',backgroundColor:'#16805b',tension:.25},
    {label:'Debt incl. leases',data:D.financials.map(x=>x.debt),borderColor:'#b33a3a',backgroundColor:'#b33a3a',tension:.25}
  ]},
  options:{...base,plugins:{...base.plugins,tooltip:{callbacks:{label:moneyTooltip}}}}
});

new Chart(document.getElementById('geoChart'),{
  type:'doughnut',
  data:{labels:D.geography.map(x=>x.name),datasets:[{data:D.geography.map(x=>x.share),backgroundColor:['#174a7e','#8ab7d3'],borderWidth:0}]},
  options:{responsive:true,maintainAspectRatio:false,cutout:'66%',plugins:{legend:{position:'bottom'},tooltip:{callbacks:{label:c=>`${c.label}: ${c.parsed}%`}}}}
});

new Chart(document.getElementById('peerChart'),{
  type:'bar',
  data:{labels:D.peers.map(x=>x.name),datasets:[{label:'EV / EBITDA FY0',data:D.peers.map(x=>x.evEbitda),backgroundColor:D.peers.map((x,i)=>i===0?'#174a7e':'#a9c6d8')}]},
  options:{...base,plugins:{legend:{display:false}},scales:{x:{grid:{display:false}},y:{beginAtZero:true,ticks:{callback:v=>v+'x'}}}}
});

new Chart(document.getElementById('fxChart'),{
  type:'bar',
  data:{labels:D.fx.cashEffects.map(x=>x.year),datasets:[{label:'FX effect on cash flow',data:D.fx.cashEffects.map(x=>x.value),backgroundColor:D.fx.cashEffects.map(x=>x.value>=0?'#16805b':'#b33a3a')}]},
  options:{...base,plugins:{legend:{display:false}},scales:{x:{grid:{display:false}},y:{ticks:{callback:v=>'MXN '+v+'B'}}}}
});

// V3: ratio trend with separate scale for interest coverage.
(() => {
  const el = document.getElementById('ratioChart');
  if (!el || typeof Chart === 'undefined') return;
  const d = window.WALMEX_DATA.ratioHistory;
  new Chart(el, {
    type:'line',
    data:{
      labels:d.years,
      datasets:[
        {label:'Current ratio',data:d.currentRatio,borderColor:'#2d8fc3',backgroundColor:'#2d8fc3',borderWidth:3,pointRadius:4,tension:.25,yAxisID:'y'},
        {label:'Net Debt / EBITDA',data:d.netDebtEbitda,borderColor:'#19865f',backgroundColor:'#19865f',borderWidth:3,pointRadius:4,tension:.25,yAxisID:'y'},
        {label:'Interest coverage',data:d.interestCoverage,borderColor:'#b9780c',backgroundColor:'#b9780c',borderWidth:3,pointRadius:4,tension:.25,yAxisID:'y1'}
      ]
    },
    options:{
      responsive:true,maintainAspectRatio:true,
      interaction:{mode:'index',intersect:false},
      plugins:{legend:{position:'top',labels:{usePointStyle:true,boxWidth:8}}},
      scales:{
        y:{beginAtZero:true,suggestedMax:1.3,title:{display:true,text:'Liquidity / leverage (x)'},grid:{color:'#e5ebef'}},
        y1:{beginAtZero:true,suggestedMax:11,position:'right',title:{display:true,text:'Interest coverage (x)'},grid:{drawOnChartArea:false}}
      }
    }
  });
})();
