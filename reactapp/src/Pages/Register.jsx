import InputForm from "../Components/InputForm";
import Button from "../Components/Button";
import Csrf, { getCookie } from "../Components/Csrf";
import Head from "../Components/Head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
	const handleSubmit = async (event) => {
		const formData = new FormData(event.target);

		const request = await fetch(`${process.env.REACT_APP_URL}/signup/`, {
			method: "POST",
			body: formData,
			headers: {
				"X-CSRFToken": getCookie("csrftoken"),
			},
		});

		const response = await request.json();

		return response;
	};

	function registerUser(event) {
		event.preventDefault();

		handleSubmit(event)
			.then((data) => {
				console.log(data);
				toast.success("Se ha registrado al usuario satisfactoriamente", {
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
				window.location.href = `${process.env.REACT_APP_URL}/login/`;
			})
			.catch((error) => {
				console.log(error);
				toast.error("No se ha podido registrar al usuario", {
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
			<Head title="Registro de compañias" />
			<div className="bg-gradient-to-r from-blue-300 via-red-500 to-yellow-500 w-screen h-screen flex justify-center items-center">
				<div className="flex shadow-xl bg-white rounded-xl flex-row-reverse">
					<div>
						<img
							src="https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt="books"
							className="object-cover rounded-xl image-cover"
						/>
					</div>
					<a href="/" className="absolute text-2xl text-white shadow-xl" title="Return Home Page">
						<i className="fas fa-arrow-circle-left"></i>
					</a>
					<div className="flex items-center px-10">
						<form action="/signup/" method="POST" onSubmit={registerUser}>
							<Csrf cookieName="csrftoken" />
							<h1 className="font-bold text-5xl my-5 text-center">¡Registrate!</h1>
							<InputForm
								inputName="company_name"
								inputType="text"
								inputId="companyName"
								labelName="Nombre Compañia"
							/>
							<InputForm
								inputName="company_address"
								inputType="text"
								inputId="companyAddress"
								labelName="Dirección"
							/>
							<InputForm
								inputName="company_email"
								inputType="text"
								inputId="companyEmail"
								labelName="Correo electrónico"
							/>
							<InputForm
								inputName="company_nit"
								inputType="text"
								inputId="companyNit"
								labelName="NIT"
							/>
							<InputForm
								inputName="company_phone"
								inputType="text"
								inputId="companyPhone"
								labelName="Teléfono"
							/>
							<InputForm
								inputName="company_password"
								inputType="password"
								inputId="companyPassword"
								labelName="Contraseña"
							/>
							<InputForm
								inputName="company_password_confirmation"
								inputType="password"
								inputId="companyPasswordConfirmation"
								labelName="Confirmar contraseña"
							/>
							<div className="mb-4">
								<Button className="bg-blue-700 text-white p-2 rounded-lg" children="Crear cuenta" />
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
							</div>
							<div className="mb-4">
								<a href="/login/" className="border-b-2 border-blue-300">
									¿Ya tiene una cuenta? Inicia sesión
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
