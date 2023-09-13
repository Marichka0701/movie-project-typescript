import React, {FC, PropsWithChildren} from 'react';
import StarRatings from "react-star-ratings";

interface IProps extends PropsWithChildren {
    stars: number
}

const StarsRating: FC<IProps> = ({stars}) => {
    return (
        <StarRatings
            starRatedColor="orange"
            numberOfStars={10}
            rating={stars}
            name='rating'
            starSpacing='0px'
            starDimension='30px'
        />
    );
};

export default StarsRating;
