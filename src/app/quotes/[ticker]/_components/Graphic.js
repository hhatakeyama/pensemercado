// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react'

function TradingViewWidget({ ticker }) {
  const container = useRef()

  useEffect(() => {
    if (container.current.querySelector('script')) {
      return
    }

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"
    script.type = "text/javascript"
    script.async = false
    script.innerHTML = `
      {
        "lineWidth": 2,
        "lineType": 0,
        "chartType": "area",
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "br",
        "chartOnly": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "symbols": [
          [
            "BMFBOVESPA:${ticker}|1D"
          ]
        ],
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ],
        "fontSize": "10",
        "headerFontSize": "medium",
        "autosize": true,
        "width": "100%",
        "height": "100%",
        "noTimeScale": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false
      }`
    container.current.appendChild(script)

    return () => {
      if (container.current && script) {
        container.current.removeChild(script)
      }
    }
  }, [ticker])

  return (
    <div className="w-full h-100">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  )
}

export default memo(TradingViewWidget)
