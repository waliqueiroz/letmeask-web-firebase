import { createContext, ReactNode, useContext } from "react"

type AuthProviderProps = {
    children: ReactNode;
}

type AuthContextData = {
    token: string
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    return (
        <AuthContext.Provider value={{
            token: ''
        }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext)
}