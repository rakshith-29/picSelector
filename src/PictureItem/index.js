import './index.css'

const PictureItem = props => {
  const {picDetails, clickPic} = props
  const {thumbnailUrl, category, id} = picDetails

  const sendPicId = () => {
    clickPic(id)
  }

  return (
    <li className="pic-item">
      <button type="button" className="pic-button" onClick={sendPicId}>
        <img className="pic-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default PictureItem
