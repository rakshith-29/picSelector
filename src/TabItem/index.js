import './index.css'

const TabItem = props => {
  const {isActive, tabDetails, setActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const tabClassName = isActive ? 'tab-button active' : 'tab-button'

  const passingTabId = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" onClick={passingTabId} className={tabClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
