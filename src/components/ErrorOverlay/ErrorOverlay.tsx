import type { FC, ReactNode } from 'react'

type Props = {
	children?: ReactNode
}

export const ErrorOverlay: FC<Props> = ({ children }) => {
	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center'>
			<h1>Error...</h1>
			{children}
		</div>
	)
}
