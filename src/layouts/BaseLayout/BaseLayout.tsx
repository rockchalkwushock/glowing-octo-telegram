import { Outlet } from '@services/router'
import { NavLink } from 'react-router-dom'

import logo from '../../favicon.svg'

const year = new Date().getFullYear()

export const BaseLayout = () => {
	return (
		<div className='container mx-auto flex h-full min-h-screen flex-col'>
			<header className='flex justify-between py-4'>
				<div className='hidden md:block md:pl-4 lg:pl-0'>
					<img alt='Logo' className='h-10 w-10' src={logo} />
				</div>
				<nav className='flex-1 md:pr-4 lg:pr-0'>
					<ul className='flex h-full flex-col items-center space-y-3 md:flex-row md:justify-end md:space-y-0 md:space-x-4'>
						<li className='w-full text-center text-2xl md:w-auto md:text-lg'>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li className='w-full text-center text-2xl md:w-auto md:text-lg'>
							<NavLink to='/abc'>Not Found</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main className='flex h-full w-full flex-1 flex-col items-center justify-center'>
				<Outlet />
			</main>
			<footer className='flex flex-col py-3 md:flex-row md:justify-between md:px-3 lg:px-0'>
				<div className='order-3 flex flex-col items-center md:order-1 md:items-start md:space-y-3'>
					<span className='text-center text-lg'>
						All Content © {year} - All rights reserved by JokinglyBadTech LLC
					</span>
				</div>
				<hr className='order-2 my-3 border-slate-600 md:hidden' />
				<nav className='order-1 md:order-2'>
					<ul className='flex flex-col items-center space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0'>
						<li className='w-full text-center text-lg md:w-auto'>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li className='w-full text-center text-lg md:w-auto'>
							<NavLink to='/abc'>Not Found</NavLink>
						</li>
					</ul>
				</nav>
			</footer>
		</div>
	)
}
