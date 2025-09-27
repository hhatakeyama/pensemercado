// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react'

function TradingViewWidget({ ticker }) {
  const container = useRef()

  useEffect(() => {
    if (container.current.querySelector('script')) {
      return
    }

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js"
    script.type = "text/javascript"
    script.async = true
    script.innerHTML = `
      {
        "symbol": "BMFBOVESPA:${ticker}",
        "colorTheme": "dark",
        "isTransparent": true,
        "locale": "br",
        "width": "100%",
        "height": "100%"
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
