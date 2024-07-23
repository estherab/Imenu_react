import "./LoginAdmin.scss"
import {LoginForm} from "../../../components/admin"

export function LoginAdmin() {
  return (
    <div className="login-admin">
        <div className="login-admin__content">
            <h1>Entrar al panel</h1>
            <LoginForm />
        </div>
    </div>
  )
}
