// src/pages/dashboard.tsx

import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../utils/map-styles-to-class-names';

function DashboardPage() {
    const [activeTab, setActiveTab] = React.useState<'users' | 'locks'>('users');
    const [users, setUsers] = React.useState<any[]>([]);           // Replace with real user type
    const [locks, setLocks] = React.useState<any[]>([]);           // Replace with real lock type

    // Load mock data or fetch from API
    React.useEffect(() => {
        // Example: fetch('/api/users').then(...)
        setUsers([
            { id: 1, name: 'Alice', email: 'alice@email.com', status: 'Active' },
            { id: 2, name: 'Bob', email: 'bob@email.com', status: 'Inactive' }
        ]);
        setLocks([
            { id: 1, location: 'Front Door', state: 'Locked' },
            { id: 2, location: 'Garage', state: 'Unlocked' }
        ]);
    }, []);

    // Example handlers — connect to your real backend
    function handleLockToggle(lockId: number) {
        setLocks((prev) =>
            prev.map((lock) =>
                lock.id === lockId
                    ? { ...lock, state: lock.state === 'Locked' ? 'Unlocked' : 'Locked' }
                    : lock
            )
        );
    }

    return (
        <div className={classNames('bg-light-fg-dark', 'min-h-screen', 'p-12', 'sb-component')}>
            <header className="mb-10 flex items-center">
                <img src="/images/logo-dark.svg" alt="Logo" className="mr-3 h-10" />
                <h1 className="text-3xl font-bold text-dark">Dashboard</h1>
            </header>

            {/* Tab navigation */}
            <div className="flex border-b mb-8">
                <button
                    className={classNames(
                        'sb-carousel-tab-title',
                        activeTab === 'users' && 'sb-carousel-tab-title-active',
                        'px-8 py-4 text-lg font-medium'
                    )}
                    onClick={() => setActiveTab('users')}
                >
                    Users
                </button>
                <button
                    className={classNames(
                        'sb-carousel-tab-title',
                        activeTab === 'locks' && 'sb-carousel-tab-title-active',
                        'px-8 py-4 text-lg font-medium'
                    )}
                    onClick={() => setActiveTab('locks')}
                >
                    Smart Locks
                </button>
            </div>

            {/* Tab content */}
            <div className="bg-white rounded-xl shadow-xl p-8">
                {activeTab === 'users' && (
                    <section>
                        <h2 className="text-2xl mb-4 font-semibold">User List</h2>
                        <table className="w-full text-left mb-8">
                            <thead>
                                <tr>
                                    <th className="pb-2">Name</th>
                                    <th className="pb-2">Email</th>
                                    <th className="pb-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id} className="border-b">
                                        <td className="py-2">{user.name}</td>
                                        <td className="py-2">{user.email}</td>
                                        <td className="py-2">{user.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Example: Add User Form */}
                        <form
                            className="flex flex-col gap-4 max-w-md"
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Add user logic here
                                alert('User added (mock)');
                            }}
                        >
                            <input type="text" placeholder="Name" className="sb-input border rounded px-3 py-2" required />
                            <input type="email" placeholder="Email" className="sb-input border rounded px-3 py-2" required />
                            <button
                                type="submit"
                                className="sb-component-button sb-component-button-primary px-6 py-2 rounded font-semibold"
                            >
                                Add User
                            </button>
                        </form>
                    </section>
                )}

                {activeTab === 'locks' && (
                    <section>
                        <h2 className="text-2xl mb-4 font-semibold">Smart Locks</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {locks.map((lock) => (
                                <div key={lock.id} className="p-6 rounded-xl border bg-neutral-100 flex justify-between items-center">
                                    <div>
                                        <div className="font-semibold">{lock.location}</div>
                                        <div className="text-sm text-gray-600">Status: {lock.state}</div>
                                    </div>
                                    <button
                                        className={classNames(
                                            'sb-component-button',
                                            lock.state === 'Locked'
                                                ? 'sb-component-button-secondary'
                                                : 'sb-component-button-primary',
                                            'px-5 py-2 rounded'
                                        )}
                                        onClick={() => handleLockToggle(lock.id)}
                                    >
                                        {lock.state === 'Locked' ? 'Unlock' : 'Lock'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}

export default DashboardPage;
