import LatestAdditions from "./latestAdditions/latestAdditions";
import TopRating from "./topRating/topRating";
import TagCloudCreate from "./tagCloudCreate/tagCloudCreate";

import dynamicSort from "../localization/sortFunction";

function Home({ reviewsData }) {

    const sortedByDate = [...reviewsData];
    sortedByDate.sort(dynamicSort("postData"));
    const sortedByRating = [...reviewsData];
    sortedByRating.sort(dynamicSort("rating"));


    return (
        <div className="bg-light bg-gradient pt-4 pb-4">
            <LatestAdditions sortedByDate={sortedByDate} />
            <TopRating sortedByRating={sortedByRating} />
            <TagCloudCreate reviewsData={reviewsData} />
        </div>
    )
}

export default Home;