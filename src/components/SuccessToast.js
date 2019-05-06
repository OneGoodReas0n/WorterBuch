import React from "react"

import { Toast, ToastBody } from "reactstrap"

export default function toast(props) {
    return (
        <Toast>
            <ToastBody>
                Word has been added!
            </ToastBody>
        </Toast>
    )
} 