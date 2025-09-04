const ButtonsBar = ({ inputs }) => {
    const { refToTitleInput, refToDescriptionInput, refToDateInput } = inputs

    const handleClick = () => {
        refToTitleInput.current.value = ''
        refToDescriptionInput.current.value = ''
        refToDateInput.current.value = ''
    }

    return (
        <div className=" flex justify-end gap-4">
            <button className="px-6 py-2 rounded-md border border-stone-300 bg-white text-stone-800 hover:bg-stone-100 hover:text-stone-950" onClick={handleClick}>Cancel</button>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" type="submit">Save</button>
        </div>
    )
}

export default ButtonsBar