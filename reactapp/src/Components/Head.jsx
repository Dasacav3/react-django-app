import { Helmet } from "react-helmet";
import Logo from "../assets/logo.svg";

export default function Head(props) {
    return (
        <>
            <Helmet>
                <title>{props.title}</title>
                <link rel="icon" href={Logo} type="image/x-icon" />
                <link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
					integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
				/>
            </Helmet>
        </>
    );
}