import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>| PERSONAJES DESTACADOS DE INFORMÁTICA | </h3>
			<nav ref={navRef} className="mov">
				<div className="prim">
				<a href="/#">Menu</a>
				<a href="/#">Creditos</a>
				<a href="/#">Personajes</a>
				<a href="/#">Acerca de:</a>
				</div>
				<h1>|  Personajes  |</h1>
				<div className="second">
				<a href="/Components/paginas/Jerry">Larry Page & Sergey Brin</a>
				<a href="/#">Shawn Fanning</a>
				<a href="/#">Jimmy Wales</a>
				<a href="/#">Chad Hurley & Steve Chen</a>
				<a href="/#">Niklas Zennström & Janus Friis</a>
				<a href="/#">Bill Gates</a>
				<a href="/#">Steve Jobs</a>
				<a href="/#">Mark Zuckerberg</a>
				<a href="/#">Jeff Bezos</a>
				</div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;