import React, { ReactNode } from 'react';

//type LayoutProps = {
//  children: ReactNode;
//};

//const Layout: React.FC<LayoutProps> = ({ children }) => {

export default function Layout({ children }: {children: ReactNode}) {
    return(<div data-test="prueba2">
       { children }
    </div>)
}
