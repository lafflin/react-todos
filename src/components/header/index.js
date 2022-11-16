import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<div>
			<div>TT: Todo Tracker</div>
			<button id="addTaskBtn">
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</div>
	);
};

export default Header;
