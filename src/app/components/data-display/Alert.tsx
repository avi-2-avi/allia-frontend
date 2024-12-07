import React from 'react'
import Image from "next/image";
import {twJoin} from "tailwind-merge";

interface AlertProps {
    label: string,
    type: 'warning' | 'error'
}

const Alert: React.FC<AlertProps> = ({label, type}) => {
    const colorStyles = type === 'warning'
        ? 'border-warning bg-warning-muted'
        : 'border-danger bg-danger-muted'

    return (
        <div className={twJoin(colorStyles)}>
            {
                (type === 'warning'
                        ? <Image src={"/icons/WarningCircle.svg"} alt={"Warning circle"} height={16} width={16}/>
                        : <Image src={"/icons/Clock.svg"} alt={"Clock"} height={16} width={16}/>
                )
            }
            <span>{label}</span>
        </div>
    )
}
export default Alert
