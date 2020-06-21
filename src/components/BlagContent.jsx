import React, { useEffect, useState } from "react";
import axios from "axios";

import BlagContentItem from "./BlagContentItem";

const SPECIAL_VALUE_INITIAL_STATE = "000";
const SPECIAL_VALUE_ERROR_STATE = "---";

function generateBlogTitleComponents(blogTitles) {
    let titleComponents = [];
    for (const blogTitle of blogTitles) {
        titleComponents.push(
            <BlagContentItem
                title={blogTitle.title}
                timestamp={blogTitle.timestamp}
            ></BlagContentItem>
        );
    }

    return titleComponents;
}

const BlagContent = (props) => {
    const [blogTitles, setBlogTitles] = useState([SPECIAL_VALUE_INITIAL_STATE]);
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_ENDPOINT + "titles")
            .then((response) => {
                setBlogTitles(response.data);
            })
            .catch((_error) => {
                setBlogTitles(["---"]);
            });
    }, []);

    let blogTitleList;
    if (blogTitles.length === 0) {
        blogTitleList = <h2>No posts yet. Stay tuned!</h2>;
    } else if (
        blogTitles.length === 1 &&
        blogTitles[0] === SPECIAL_VALUE_INITIAL_STATE
    ) {
        blogTitleList = <h2>Retrieving blog content...</h2>;
    } else if (
        blogTitles.length === 1 &&
        blogTitles[0] === SPECIAL_VALUE_ERROR_STATE
    ) {
        blogTitleList = (
            <h2>Something went wrong trying to read blog content...</h2>
        );
    } else {
        blogTitleList = generateBlogTitleComponents(blogTitles);
    }

    return <div className="BlagContent Basic-Content">{blogTitleList}</div>;
};

export default BlagContent;
