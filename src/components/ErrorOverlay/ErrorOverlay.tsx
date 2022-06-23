type Props = {
	children?: React.ReactNode
}

export const ErrorOverlay: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<h1>Error...</h1>
			{children}
		</div>
	)
}
