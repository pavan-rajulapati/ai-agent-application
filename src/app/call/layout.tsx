interface CallLayoutProps {
    children : React.ReactNode;
}

const Layout = ({ children } : CallLayoutProps) => {
    return(
        <div className="h-screen bg-black">
            {children}
        </div>
    )
}

export default Layout;