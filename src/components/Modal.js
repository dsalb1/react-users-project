import React from "react";
import ReactModal from "react-modal";

import Button from "./Button";
import styles from "./Modal.module.css";

ReactModal.setAppElement('#root');

const Modal = (props) => {
	return (
		<ReactModal 
			isOpen={props.display}
			className={styles["error-modal"]}
			overlayClassName={styles["overlay"]}
		>
			<div>
				<h2>{props.heading}</h2>
				<p>{props.error}</p>
				<Button type="button" onClick={props.onClick}>
					Okay
				</Button>
			</div>
		</ReactModal>
	);
}

export default Modal;