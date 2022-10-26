export const Layout = ({ children, footer }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			{footer && <Footer id="footer" />}
		</>
	);
};
