const TabButton = ({ children, onSelect, selectedButton, isSelected }) => {

    const handleClick = () => {
        onSelect(selectedButton)
    }
    return (
        <li>
            <button onClick={handleClick} className={isSelected ? 'active' : undefined}>{children}</button>
        </li>
    )
}

export default TabButton