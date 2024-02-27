import { useEffect, useRef  } from "react"; {/*useState*/}
import Header from "../components/header/Header";
import { user } from "../data/userData";
import { UserRoleType, useUserRoleContext } from "../context/UserRoleContext";
import { checkOpenSession } from "../interfaces/checkOpenSession";
// import PublicationsPreviewList from "../components/publicationsList/PublicationsPreviewList";
// import { PublicationPreviewType } from "../components/publicationsList/publicationsListTypes";
// import ChartBar from "../components/charts/ChartBar";
// import { BarChartDataType, LineChartDataType, MapChartDataType } from "../components/charts/ChartBarTypes";
// import ChartLine from "../components/charts/ChartLine";
// import { getChartsData } from "../services/huertas_server/getChartsData";
// import ChartMap from "../components/charts/ChartMap";


// type LoadingStateType = "loading" | "loaded" | "error";

export type UserDataType = {
	userName: string,
	userRole: UserRoleType
}

// type ChartsDataType = {
// 	barChartData: BarChartDataType,
// 	lineChartData: LineChartDataType,
// 	mapChartData: MapChartDataType,
// }

export default function Home() {
	const { setUserRole } = useUserRoleContext();
	// const [publicationsState, setPublicationsState] = useState<LoadingStateType>("loading");
	// const [dashboardState, setDashboardState] = useState<LoadingStateType>("loading");

	// const bestPublicationsArray = useRef<PublicationPreviewType[]>([]);
	// const chartsData = useRef<ChartsDataType>();
	const axiosController = useRef<AbortController>();

	const bgImageTailwind = "bg-headerBg";
	const logoSrc = "images/logo-plant-in.png";



	useEffect(() => {
		axiosController.current = new AbortController();

		checkOpenSession(axiosController.current)
			.then((userData: UserDataType) => {
				user.name = userData.userName;
				setUserRole(userData.userRole);
			})
			.catch(() => {
				user.name = "";
				setUserRole("visitor");
			});

		// getBestPublications(axiosController.current)
		// 	.then((bestPublicationsList: PublicationPreviewType[]) => {
		// 		bestPublicationsArray.current = bestPublicationsList;
		// 		setPublicationsState("loaded");
		// 	})
		// 	.catch(() => {
		// 		setPublicationsState("error");
		// 	});

		// getChartsData(axiosController.current)
		// 	.then((chartsDataResponse: ChartsDataType) => {
		// 		chartsData.current = chartsDataResponse;
		// 		setDashboardState("loaded");
		// 	})
		// 	.catch(() => {
		// 		setDashboardState("error");
		// 	});

		return () => {
			axiosController.current?.abort();
		};
	}, []);

	return (
		<>
			<div className="w-full" >
				<Header bgImageTailwind={bgImageTailwind} logoSrc={logoSrc} />
			</div>

			<main>
				{/* {
					publicationsState === "loading" && (
						<div className={styles.pubListLoadingContainer}>
							<img alt="Cargando..." src="icons/loading.gif" className={styles.loadingIcon} />
						</div>
					)
				}

				{
					publicationsState === "error" && (
						<div className={styles.pubListErrorContainer}>
							<p className={styles.pubListErrorFirstParagraph}>No se han podido cargar las publicaciones.</p>
							<p className={styles.pubListErrorSecondParagraph}>Por favor, compruebe su conexión y refresque la página.</p>
						</div>
					)
				}

				{
					publicationsState === "loaded" && (
						<div className={styles.pubListCompContainer}>
							<PublicationsPreviewList bestPublicationsArray={bestPublicationsArray.current} />
						</div>
					)
				} */}

				{/* <div className={styles.dashboardContainer}>
					{
						dashboardState === "loading" && (
							<div className={styles.dashboardLoadingContainer}>
								<img alt="Cargando..." src="icons/loading.gif" className={styles.loadingIcon} />
							</div>
						)
					}

					{
						dashboardState === "error" && (
							<div className={styles.dashboardErrorContainer}>
								<p className={styles.dashboardErrorFirstParagraph}>No se ha podido cargar el dashboard.</p>
								<p className={styles.dashboardErrorSecondParagraph}>Por favor, compruebe su conexión y refresque la página.</p>
							</div>
						)
					}

					{
						dashboardState === "loaded" && (
							<>
								<div className={styles.barChartDataCompContainer}>
									<ChartBar barChartData={chartsData.current?.barChartData!} />
								</div>

								<div className={styles.lineChartDataCompContainer}>
									<ChartLine lineChartData={chartsData.current?.lineChartData!} />
								</div>

								<div className={styles.mapChartDataCompContainer}>
									<ChartMap mapChartData={chartsData.current?.mapChartData!} />
								</div>
							</>
						)
					}
				</div> */}

			</main>
		</>
	);
}
