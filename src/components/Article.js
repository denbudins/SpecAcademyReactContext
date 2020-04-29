import React, {useContext} from "react";

import { AuthContext } from "../context/AuthContext";

const Article = (props) => {
    const IsLogIn = useContext(AuthContext);

    return(
        <>
            <h2>Some article title...</h2>
            <p>Description text...</p>
            {IsLogIn ? <button>Edit</button> : null}
        </>
    );
}

export default Article;