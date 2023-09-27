// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImage} = props
  const {thumbnailUrl, thumbnailAltText, imageAltText, imageUrl} = imageDetails

  const onClickChangeImage = () => {
    updateImage(imageUrl, imageAltText)
  }

  return (
    <li className="thumbline-cards">
      <button type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickChangeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
