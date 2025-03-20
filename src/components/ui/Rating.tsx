"use client"
import { Rating as SimpleRating, type RatingProps } from "react-simple-star-rating"

const Rating = (props: RatingProps) => {
  return <SimpleRating {...props} />
}

export default Rating

