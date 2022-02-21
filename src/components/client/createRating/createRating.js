import ReactStars from "react-rating-stars-component";

function CreateRating({ size, value }) {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        < ReactStars
            count={5}
            value={value}
            onChange={ratingChanged}
            size={size}
            isHalf={false}
            emptyIcon={<i className="far fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
            fullIcon={<i className="fa fa-star" />}
            activeColor="#ffd700"
        />
    )
}

export default CreateRating;