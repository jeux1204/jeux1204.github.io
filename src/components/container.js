import React from "react"
import containerStyles from "./container.modules.css"

export default ({children}) => (
    <div className={containerStyles.container}>{children}</div>
)