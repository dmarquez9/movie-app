import CircularProgressBar from './CircularProgressBar'
import StarRating from './StarRating'

type RatingCardProps = {
  rating: number
  totalRatings: number
}

const RatingCard = ({ rating, totalRatings }: RatingCardProps) => {
  return (
    <div className="bg-white shadow rounded-lg flex flex-col items-center w-64 text-black">
      <div className="px-4 pt-8 pb-4 text-center">
        <CircularProgressBar value={rating} />
        <div className="text-sm mt-4 font-light">{totalRatings} ratings</div>
      </div>
      <div className="bg-gray-100 w-full px-4 py-8 rounded-b-lg">
        <div className="text-xs font-bold font-poppins mb-2">Your Rating</div>
        <StarRating />
      </div>
    </div>
  )
}

export default RatingCard
