import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";

function ProducerForum() {
	return (
		<>
			<Helmet>
				<title>Plant-In Foro</title>
			</Helmet>
			<div className="w-full">
				<Header />
			</div>
			ESTÁS EN EL FORO (VERSIÓN PRODUCTOR)
		</>
	);
}

export default ProducerForum;
