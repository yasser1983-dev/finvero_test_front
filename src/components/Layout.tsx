import React from "react";
import type {Props} from "../types/layout.ts";

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4" style={{ alignContent: "center" }}>
            <div className="w-full max-w-4xl">
                    {children}
            </div>
        </div>
    );
};

export default Layout;