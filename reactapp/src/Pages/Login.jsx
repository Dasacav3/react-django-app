import "../App.css";
import InputForm from "../Components/InputForm";
import Csrf, { getCookie } from "../Components/Csrf";
import Head from "../Components/Head";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		const request = await fetch(`/login-user/`, {
			method: "POST",
			body: formData,
			headers: {
				"X-CSRFToken": getCookie("csrftoken"),
			},
		});

		const response = await request.json();

		return response;
	};

	function loginUser(event) {
		event.preventDefault();

		handleSubmit(event)
			.then((data) => {
				console.log(data);
				toast.success("Acceso exitoso", {
					position: "top-center",
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			.then(() => {
				window.location.href = `${process.env.REACT_APP_URL}/profile/`;
			})
			.catch((error) => {
				console.log(error);
				toast.error("Usuario o contraseña incorrectos", {
					position: "top-center",
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
	}

	return (
		<>
			<Head title="Iniciar sesión" />
			<div className="bg-gradient-to-r from-yellow-300 via-red-500 to-blue-500 w-screen h-screen flex justify-center items-center">
				<div className="flex shadow-xl bg-white rounded-xl">
					<a href="/" className="absolute text-2xl text-white shadow-xl" title="Return Home Page">
						<i className="fas fa-arrow-circle-left"></i>
					</a>
					<div>
						<img
							src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt="books"
							className="object-cover rounded-xl image-cover"
						/>
					</div>
					<div className="flex items-center px-10 my-5">
						<form action="/login-user/" method="POST" onSubmit={loginUser}>
							<Csrf cookieName="csrftoken" />
							<h1 className="font-bold text-5xl my-8 text-center">¡Bienvenido!</h1>
							<InputForm
								inputName="company_email"
								inputType="text"
								inputId="loginEmail"
								labelName="Correo electrónico"
							/>
							<InputForm
								inputName="company_password"
								inputType="password"
								inputId="loginPassword"
								labelName="Contraseña"
							/>
							<div className="mb-4">
								<button className="bg-red-700 text-white p-2 rounded-lg">Iniciar Sesión</button>
							</div>
							<div>
								<a href="/register" className="border-b-2 border-red-300">
									Registrarme
								</a>
							</div>
							<ToastContainer
								position="top-center"
								autoClose={1500}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
							/>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
