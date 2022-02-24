export default function InputForm(props) {
    return (
        <div className="mb-4">
			<label htmlFor="first_name">{`${props.labelName}`}</label>
			<input
				type={`${props.inputType}`}
				name={`${props.inputName}`}
				id={`${props.inputId}`}
				className="border border-gray-400 p-2 w-full"
			/>
		</div>
    );
}