import React from "react"
import PropType from "prop-types"
import { Link } from "gatsby"
import "./Pagination.scss"

export default function Pagination(props) {
    const { pageContext } = props;
    const { previousPagePath, nextPagePath } = pageContext;

    return (
        <div className="pagination">
            {previousPagePath && <Link to={previousPagePath} className="button-blog">Página anterior</Link>}
            {nextPagePath && <Link to={nextPagePath} className="button-blog">Página siguiente</Link>}
        </div>
    )
}

Pagination.propType = {
    pageContext: PropType.object.isRequired,
}