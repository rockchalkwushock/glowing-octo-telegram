import { Link, LinkProps, useMatch, useResolvedPath } from '@services/router'

export const NavLink = ({ children, className, to, ...rest }: LinkProps) => {
	const resolved = useResolvedPath(to)
	const match = useMatch({ path: resolved.pathname, end: true })
	return (
		<Link
			className={`${className ?? ''}${
				match ? 'font-semibold text-red-500 underline' : ''
			}`}
			to={to}
			{...rest}
		>
			{children}
		</Link>
	)
}
