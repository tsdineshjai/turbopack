import RecoilWrapper from "../store/recoilWrapper";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<RecoilWrapper>{children}</RecoilWrapper>
			</body>
		</html>
	);
}
