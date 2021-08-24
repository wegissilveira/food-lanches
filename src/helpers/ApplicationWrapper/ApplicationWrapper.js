import React, { forwardRef } from "react"

const ApplicationWrapper = forwardRef((props, ref) => {
    return <div  ref={ref}>{props.children}</div>
})

export default ApplicationWrapper 