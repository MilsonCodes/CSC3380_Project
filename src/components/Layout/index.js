import Head from "next/head";

const Layout = props => {
	return (
		<div className="Layout">
			<Head>
				<title>Agit</title>
			</Head>
			<div className="Content">
				{props.children}
			</div>
		</div>
	)
}

export default Layout;
