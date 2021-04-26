import { useAuth } from "context/auth-context"
import { ProjectListScreen } from "screens/project-list"
import { Button } from 'antd';

//已登录状态界面
export const AuthenticatedApp = () => {
    const {logout} = useAuth()
    return <div>
        <Button onClick={logout}>登出</Button>
        <ProjectListScreen/>
    </div>
}