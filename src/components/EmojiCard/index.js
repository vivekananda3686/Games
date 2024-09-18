import './index.css'

const Emojicard = props => {
  const {list, key, emojiscoreupdates} = props
  const {emojiName, emojiUrl, id} = list

  const emojiId = () => {
    emojiscoreupdates(id)
  }

  return (
    <li className="emoji-item" onClick={emojiId}>
      <img key={id} src={emojiUrl} alt={emojiName} className="emoji-image" />
    </li>
  )
}

export default Emojicard
