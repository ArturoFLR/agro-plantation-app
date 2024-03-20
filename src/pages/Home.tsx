import { useEffect, useLayoutEffect, useRef, useState } from "react"; {/*useState*/ }
import Header from "../components/header/Header";
import { user } from "../data/userData";
import { useUserRoleContext } from "../context/UserRoleContext";
import { checkOpenSession } from "../interfaces/checkOpenSession";
import { PublicationPreviewType } from "../components/publicationsList/publicationsListTypes";
import { getBestPublications } from "../interfaces/getBestPublications";
import PublicationsPreviewList from "../components/publicationsList/PublicationsPreviewList";
import MustLoginWarning from "../components/header/MustLoginWarning";
import { UserDataType } from "./commonTypes";
import { getStoredToken } from "../utils/getStoredToken";


type LoadingStateType = "loading" | "loaded" | "error";
type MustLoginWarningStateType = "visible" | "hidden";

// type ChartsDataType = {
// 	barChartData: BarChartDataType,
// 	lineChartData: LineChartDataType,
// 	mapChartData: MapChartDataType,
// }

export default function Home() {
	const { setUserRole } = useUserRoleContext();
	const [mustLoginWarningState, setMustLoginWarningState] = useState<MustLoginWarningStateType>("hidden");
	const [publicationsState, setPublicationsState] = useState<LoadingStateType>("loading");
	// const [dashboardState, setDashboardState] = useState<LoadingStateType>("loading");

	const bestPublicationsArray = useRef<PublicationPreviewType[]>([]);
	// const chartsData = useRef<ChartsDataType>();
	const axiosController = useRef<AbortController>();

	const bgImageTailwind = "bg-headerBg";
	const logoSrc = "images/Logo_fondo_verde.png";


	function handleOpenMustLoginWarning() {
		setMustLoginWarningState("visible");
	}

	function handleCloseMustLoginWarning() {
		setMustLoginWarningState("hidden");
	}
	

	useEffect(() => {
		axiosController.current = new AbortController();

		const storedToken = getStoredToken();

		if (storedToken) {
			checkOpenSession(storedToken, axiosController.current)
				.then((userData: UserDataType) => {
					user.name = `${userData.name} ${userData.lastname}`;
					setUserRole(userData.userType);
				})
				.catch(() => {
					user.name = "";
					setUserRole("visitor");
				});
		}

		getBestPublications(axiosController.current)
			.then((bestPublicationsList: PublicationPreviewType[]) => {
				bestPublicationsArray.current = bestPublicationsList;
				setPublicationsState("loaded");
			})
			.catch(() => {
				setPublicationsState("error");
			});

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
				<Header bgImageTailwind={bgImageTailwind} logoSrc={logoSrc} handleOpenMustLoginWarning={handleOpenMustLoginWarning} />
			</div>

			{
				mustLoginWarningState === "visible"
				&& <MustLoginWarning handleCloseMustLoginWarning={handleCloseMustLoginWarning} />
			}


			<main>
				{
					publicationsState === "loading" && (
						<div className="">
							<img alt="Cargando..." src="icons/loading.gif" className="" />
						</div>
					)
				}

				{
					publicationsState === "error" && (
						<div className="">
							<p className="">No se han podido cargar las publicaciones.</p>
							<p className="">Por favor, compruebe su conexión y refresque la página.</p>
						</div>
					)
				}

				{
					publicationsState === "loaded" && (
						<div className="">
							<PublicationsPreviewList bestPublicationsArray={bestPublicationsArray.current} />
						</div>
					)
				}

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
