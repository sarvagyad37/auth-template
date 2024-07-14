const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-950">
            {children}
        </div>
    )
}

export default AuthLayout;