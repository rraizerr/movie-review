import LatestAdditions from "./latestAdditions/latestAdditions";
import TopRating from "./topRating/topRating";
import TagCloudCreate from "./tagCloudCreate/tagCloudCreate";

import dynamicSort from "../../localization/sortFunction";

function Home({ reviewsData }) {

    const sortedByDate = [...reviewsData];
    sortedByDate.sort(dynamicSort("postData"));
    const sortedByRating = [...reviewsData];
    sortedByRating.sort(dynamicSort("rating"));
    sortedByRating.reverse();


    return (
        <div className="bg-light bg-gradient pb-4">
            <LatestAdditions sortedByDate={sortedByDate} />
            <TopRating sortedByRating={sortedByRating} />
            <TagCloudCreate reviewsData={reviewsData} />
        </div>
    )
}

export default Home;