import "./AdminLayout"
import {TopMenu, SideMenu} from "../../components/admin"
import {LoginAdmin} from "../../pages/Admin"
import { useAuth } from "../../hooks"

export function AdminLayout(props) {
    const {children} = props
    const {auth} = useAuth()
    
    if (!auth) return <LoginAdmin />

    return (
        <div className="admin-container">
            <div className="admin-container__menu">
                <TopMenu />
            </div>

            <div className="admin-container__content">
                <SideMenu>
                    {children}
                </SideMenu>
            </div>
        </div>
    )
}
