import {useEffect, useState} from "react";

export default function AlertBox({message}) {
    const [alertMessage, setAlertMessage] = useState(message)

    useEffect(() => {
        setTimeout(() => {
            setAlertMessage('')
        }, 3000)
    }, [alertMessage])

    return (
        <>
            {alertMessage.length > 0 && <div className="alert bg-danger text-white">{alertMessage}</div>}
        </>
    )
}