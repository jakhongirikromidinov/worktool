import GlobalStyle from "../styles/Global.styled";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />

			<GlobalStyle />
		</>
	);
}

export default MyApp;
