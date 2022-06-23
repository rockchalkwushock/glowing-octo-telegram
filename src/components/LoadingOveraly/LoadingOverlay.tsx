type Props = {
	children?: React.ReactNode
}

export const LoadingOverlay: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<h1>Loading...</h1>
			{children}
		</div>
	)
}
