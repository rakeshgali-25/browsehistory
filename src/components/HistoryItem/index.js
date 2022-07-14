import './index.css'

const HistoryItem = props => {
  const {item, onClickDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const deleteItem = () => {
    onClickDeleteItem(id)
  }

  return (
    <li className="bg-container-card">
      <div className="item-container">
        <p className="time">{timeAccessed}</p>

        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="para">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button type="button" id={id}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          onClick={deleteItem}
          className="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
