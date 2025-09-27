// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react'

function TradingViewWidget() {
  const container = useRef()

  useEffect(() => {
    if (container.current.querySelector('script')) {
      return
    }

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
    script.type = "text/javascript"
    script.async = true
    script.innerHTML = `
      {
        "symbols": [
          {"proName": "BMFBOVESPA:IBOV", "title":"Ibovespa"},
          {"proName": "BMFBOVESPA:PETR4", "title":"PETR4"},
          {"proName": "BMFBOVESPA:VALE3", "title":"VALE3"},
          {"proName": "BMFBOVESPA:WEGE3", "title":"WEGE3"},
          {"proName": "BMFBOVESPA:MGLU3", "title":"MGLU3"},
          {"proName": "BMFBOVESPA:B3SA3", "title":"B3SA3"},
          {"proName": "CAPITALCOM:US100", "title":"Nasdaq 100"},
          {"proName": "BLACKBULL:SPX500", "title":"S&P 500"},
          {"proName": "FOREXCOM:USDJPY", "title":"USD/JPY"}
        ],
        "colorTheme": "dark",
        "locale": "br",
        "largeChartUrl": "",
        "isTransparent": true,
        "showSymbolLogo": true,
        "displayMode": "adaptive"
      }`
    container.current.appendChild(script)

    return () => {
      if (container.current && script) {
        container.current.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  )
}

export default memo(TradingViewWidget)
