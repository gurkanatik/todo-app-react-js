import {useEffect} from "react";

export default function AlertBox({alertMessage, setAlertMessage}) {
    useEffect(() => {
        if (alertMessage.length > 0) {
            setTimeout(() => {
                setAlertMessage('')
            }, 3000)
        }
    }, [alertMessage])

    return (
        <>
            {alertMessage.length > 0 && <div className="alert bg-danger text-white">{alertMessage}</div>}
        </>
    )
}