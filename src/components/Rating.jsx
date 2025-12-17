import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ rating = 5, size = 30, totalStars = 5 }) => {

    const rates = Array.from({ length: totalStars })

    return (
        <span aria-label={`${rating} out of ${totalStars} stars`}>
            {rates.map((_, index) =>
                rating >= index + 1 ? (
                    <FaStar color="gold" key={index} size={size} />
                ) : (
                    <FaRegStar color="gold" key={index} size={size} />
                ),
            )}
        </span>
    );
};

export default Rating;
