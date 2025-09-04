const InputGroup = ({ children, label }) => {
    return (
        <p className="flex flex-col gap-1 my-4">
            <label htmlFor="title" className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {children}
        </p>
    )

}

export default InputGroup