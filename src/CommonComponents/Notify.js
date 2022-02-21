import { notification } from "antd"

const defaultConfig = {
    placement: "bottomRight",
    duration: 3
}

const Notify = {
    success: (data) => {
        notification.success({ ...defaultConfig, ...data })
    },
    error: (data) => {
        notification.error({ ...defaultConfig, ...data })
    }
}

export default Notify