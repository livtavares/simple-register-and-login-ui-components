import { useEffect, useState } from 'react'
import { Alert, AlertTitle, Collapse } from "@mui/material";

interface AlertMessageProps {
    severity: 'success' | 'error';
    message: string;
    title?: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ severity, message, title }) => {
    const [open, setOpen] = useState(true);

    useEffect( () => {
        const timer = setTimeout( ()=>{ 
            setOpen(false);
        }, 5000)

        return () => {
            clearTimeout(timer);
        }
    }, [])

    return (
        <Collapse in={open}>
            <Alert variant="filled" severity={severity} onClose={() => setOpen(false)}>
                { title && <AlertTitle>{ title }</AlertTitle>}
                { message }
            </Alert>
        </Collapse>
    )
}

export default AlertMessage;