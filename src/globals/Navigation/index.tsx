import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { useLayout } from '@/hooks/useLayout';
import { navItems } from './navItems';

export default function Navigation() {
    const { navOpen } = useLayout();
    const pathname = usePathname();
  return (
    <nav className={`fixed border-r border-gray-200 py-4 top-[57px] left-0 w-[200px] h-[calc(100vh-57px)] bg-white ${navOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <ul>
            {navItems.map((item) => (
                <li key={item.path} className='py-1'>
                    <Link href={item.path} className={`px-8 text-sm text-gray-800 py-2 block ${pathname === item.path ? 'bg-primary text-white font-bold' : ''}`}>{item.name}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}
