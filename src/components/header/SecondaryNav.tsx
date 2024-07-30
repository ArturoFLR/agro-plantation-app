import Button from "../button/Button";
import { ButtonColorType } from "../button/buttonTypes";

function SecondaryNav() {
	const buttonColor: ButtonColorType = "yellow";
	const buttonFontSize = "text-[1.978rem] custom-2000:text-[3rem]";
	const buttonWidth = "w-[160px] custom-2000:w-[240px]";
	const buttonPaddingY = "py-[0.27rem] custom-2000:py-[0.5rem]";

	return (
		<nav aria-label="Login y registro" className="">
			<ul className="flex gap-x-4 custom-2000:gap-x-8">
				<li className="">
					<Button
						buttonColor={buttonColor}
						buttonFontSize={buttonFontSize}
						buttonWidth={buttonWidth}
						buttonPaddingY={buttonPaddingY}
						buttonFuncionality={{ linkText: "Ingresa", linkUrl: "/login" }}
					></Button>
				</li>

				<li className="">
					<Button
						buttonColor={buttonColor}
						buttonFontSize={buttonFontSize}
						buttonWidth={buttonWidth}
						buttonPaddingY={buttonPaddingY}
						buttonFuncionality={{ linkText: "Regístrate", linkUrl: "/register" }}
					></Button>
				</li>
			</ul>
		</nav>
	);
}

export default SecondaryNav;
