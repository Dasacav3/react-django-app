import Navbar from "../Components/Navbar";
import InputForm from "../Components/InputForm";
import Csrf, { getCookie } from "../Components/Csrf";
import Button from "../Components/Button";
import Head from "../Components/Head";
import { ToastContainer, toast } from "react-toastify";

export default function Profile() {

	window.addEventListener("DOMContentLoaded", () => {
		renderData();
	});

	const getData = async () => {
		const request = await fetch(`${process.env.REACT_APP_URL}/profile-data/`, {
			method: "POST",
			headers: {
				"X-CSRFToken": getCookie("csrftoken"),
			},
		});

		const response = await request.json();

		return response;
	};

	const handleSubmit = async (event) => {
		const formData = new FormData(event.target);

		const request = await fetch(`${process.env.REACT_APP_URL}/update-profile/`, {
			method: "POST",
			body: formData,
			headers: {
				"X-CSRFToken": getCookie("csrftoken"),
			},
		});

		const response = await request.text();

		return response;
	};

	function updateProfile(event) {
		event.preventDefault();

		handleSubmit(event)
			.then((data) => {
				console.log(data);

				toast.success("Perfil actualizado", {
					position: "top-center",
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			.catch((error) => {
				console.log(error);
				toast.error("Error al actualizar el perfil", {
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

	function renderData() {
		getData()
			.then((data) => {
				let companyData = JSON.parse(data)[0]["fields"];
				document.getElementById("profileName").value = companyData.name;
				document.getElementById("profileEmail").value = companyData.email;
				document.getElementById("profilePhone").value = companyData.phone;
				document.getElementById("profileAddress").value = companyData.address;
				document.getElementById("profileNit").value = companyData.nit;
			})
			.catch((error) => {
				console.log(error);
				toast.error("Error al listar los datos", {
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
			<Head title="Perfil de la compañia" />
			<Navbar />
			<div className="container m-auto w-2/5">
				<form action="/signup/" method="POST" onSubmit={updateProfile}>
					<Csrf cookieName="csrftoken" />
					<h1 className="font-bold text-5xl my-5 text-center">Perfil de la compañia</h1>
					<InputForm
						inputName="company_name"
						inputType="text"
						inputId="profileName"
						labelName="Nombre Compañia"
					/>
					<InputForm
						inputName="company_address"
						inputType="text"
						inputId="profileAddress"
						labelName="Dirección"
					/>
					<InputForm
						inputName="company_email"
						inputType="text"
						inputId="profileEmail"
						labelName="Correo electrónico"
					/>
					<InputForm
						inputName="company_nit"
						inputType="text"
						inputId="profileNit"
						labelName="NIT"
					/>
					<InputForm
						inputName="company_phone"
						inputType="text"
						inputId="profilePhone"
						labelName="Teléfono"
					/>
					<InputForm
						inputName="company_password"
						inputType="password"
						inputId="profilePassword"
						labelName="Contraseña"
					/>
					<InputForm
						inputName="company_password_confirmation"
						inputType="password"
						inputId="profilePasswordConfirmation"
						labelName="Confirmar contraseña"
					/>
					<div className="mb-4">
						<Button className="bg-blue-700 text-white p-2 rounded-lg" children="Actualizar datos" />
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
				</form>
			</div>
		</>
	);
}
