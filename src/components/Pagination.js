import React from "react";

const Pagination = (props) => {
	const pageLinks = [];
	for (let i = 1; i <= props.pages + 1; i++) {
		//find the "current" page and make sure we highlight it
		pageLinks.push(
			<li key={i} onClick={() => props.onPageChange(i)}>
				{props.currPage === i ? (
					<a className="active" href="#">
						{i}
					</a>
				) : (
					<a href="#"> {i} </a>
				)}
			</li>,
		);
	}
	console.log(pageLinks);
	return (
		<div className="pagecontainer">
			<ul className="pagination">{pageLinks}</ul>
		</div>
	);
};

export default Pagination;
