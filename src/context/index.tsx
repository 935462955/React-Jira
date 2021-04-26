import React, { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

export const AppProviders = ({children}:{children:ReactNode}) => {
    return <AuthProvider> {/*w提供用户信息，登录，注册，登出函数的上下文*/}
        {children}
    </AuthProvider>
}