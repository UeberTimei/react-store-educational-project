import React, {useContext, useState} from 'react';
import {FaStar} from 'react-icons/fa'
import { Rating } from '@mui/material';


const StarRating = ({changeRating, ratingValue, isAuth, isAccessRating}) => {

        if(isAuth && isAccessRating) {
            return (
                <Rating
                    name="simple-controlled"
                    onChange={(event, newValue) => {
                        changeRating(newValue);
                    }}
                    precision={1}
                    size={window.innerWidth < 568 ? 'small' : 'medium'}
                    max={10}
                />
            )
        } else {
            return (
                <Rating
                    name="read-only"
                    value={ratingValue}
                    readOnly
                    size={window.innerWidth < 568 ? 'small' : 'medium'}
                    precision={0.1}
                    max={10}
                />
            )
        }
};

export default StarRating;