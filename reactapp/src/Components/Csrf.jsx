import "../App.css";

export default function Csrf(props) {

	const csrf = getCookie(props.cookieName)

	return <input type="hidden" name="csrfmiddlewaretoken" value={`${csrf}`} />;
}

export function getCookie(name) {
	let cookieValue = null;

	if (document.cookie && document.cookie !== "") {
		let cookies = document.cookie.split(";");
		for (var i = 0; i < cookies.length; i++) {
			let cookie = cookies[i].trim();
			if (cookie.substring(0, name.length + 1) === name + "=") {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}

	return cookieValue;
}
