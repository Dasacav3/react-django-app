export default function Navbar() {
	return (
		<>
			<header class="grid grid-cols-1 md:grid-cols-3 bg-red-500">
				<h2 class="text-center md:text-left md:col-span-2 p-3 text-white font-bold text-xl">
					Django/React App
				</h2>
				<ul class="flex justify-center md:flex-column md:justify-end p-3 text-white w-full">
					<li class="pl-3">
						<a href="/logout/">
							<i class="fa-solid fa-power-off"></i> Cerrar sesión
						</a>
					</li>
				</ul>
			</header>
		</>
	);
}
