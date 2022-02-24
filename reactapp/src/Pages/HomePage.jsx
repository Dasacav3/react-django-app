import Head from "../Components/Head";
import Logo from "../assets/logo.svg";

export default function HomePage() {
	return (
		<>
			<Head title="Pagina Principal" />
			<div className="min-h-screen w-full bg-gray-300">
				<div className="max-w-screen-md mx-auto px-10 pt-20">
					<div className="bg-white md:h-72 rounded-lg shadow-md flex flex-wrap flex-col-reverse md:flex-col">
						<div className="w-full md:w-2/3 p-4">
							<div className="flex py-2">
								<img src="https://api.iconify.design/logos/react.svg" alt="" className="w-8" />
								<img
									src="https://api.iconify.design/emojione-v1/lightning-mood.svg"
									alt=""
									className="w-5 mx-6"
								/>
								<img
									src="https://api.iconify.design/logos/django-icon.svg"
									alt=""
									className="w-8"
								/>
								<img
									src="https://api.iconify.design/emojione-v1/lightning-mood.svg"
									alt=""
									className="w-5 mx-6"
								/>
								<img src="https://api.iconify.design/logos/postgresql.svg" alt="" className="w-8" />
							</div>
							<h3 className="text-3xl font-bold">Registro de compañias</h3>
							<p>
								Esta aplicación fue desarrollada con la libreria React, Django framework y
								TailwindCSS. Utiliza como motor de base de datos a PostgreSQL.
							</p>
							<p><b>By @Dasacav3</b></p><br/>
							<a
								href="/register/"
								className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
							>
								Ir al registro
							</a>
						</div>
						<div className="w-full md:w-1/2 p-4 md:p-0">
							<img src={Logo} alt="" className="w-40 mx-auto" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
