import React from "react";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-4">
                <h2 className="text-2xl font-bold mb-6">Menu</h2>
                <ul>
                    <li className="mb-2"><a href="#" className="hover:text-blue-600">Dashboard</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-blue-600">Tasks</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-blue-600">Settings</a></li>
                </ul>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow p-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold">To-Do App</h1>
                    <div>User</div>
                </header>

                {/* Content */}
                <main className="p-6 flex-1 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;