// Write your code here.
import {EmojiItem, EmojiBtn, EmojiIcon} from './emojiCardComponents'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <EmojiItem>
      <EmojiBtn type="button" onClick={onClickEmojiCard}>
        <EmojiIcon src={emojiUrl} alt={emojiName} />
      </EmojiBtn>
    </EmojiItem>
  )
}

export default EmojiCard
