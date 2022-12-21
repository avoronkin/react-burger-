import { ReactNode } from 'react'

export const Centered = ({ children }: { children: ReactNode}) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                {children}
            </div>
        </div>
    )
}