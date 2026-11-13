const Button = ({quantity, onAdd, onRemove}) => {
    const controlClass = `font-semibold bg-white hover:bg-amber-100 text-green-600 border-0 px-3 py-1 shadow-sm text-sm cursor-pointer`
    return(
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center rounded-lg ">
            {quantity === 0? (
                <button onClick={onAdd} className={`${controlClass} rounded-lg`}>
                    ADD+
                </button>
            ): (
                <>
                <button onClick={onRemove} className={`${controlClass} rounded-l-lg`}>-</button>
                <span className={`${controlClass} min-w-8 text-center`}>{quantity}</span>
                <button onClick={onAdd} className={`${controlClass} rounded-r-lg`}>+</button>
                </>
            )}
        </div>
    )
}

export default Button;