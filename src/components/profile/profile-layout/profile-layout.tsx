// import { ProfileForm } from './profile-form'
import { ProfileNav } from '../profile-nav/profile-nav'
import styles from './profile-layout.module.css'

export const ProfileLayout = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.column1}>
                <ProfileNav />
            </div>
            <div className={styles.column2}>
                {children}
            </div>
        </div>
    )
}