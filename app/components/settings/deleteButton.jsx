import React from 'react'

const DeleteButton = ({id, handleDelete, isDependent=false, width=20, height=20}) => {
    const handleConfirm = (event) => {
        handleDelete(event)
        document.getElementById(id).close()
    }

    return (
        <>
            <button onClick={()=>document.getElementById(id).showModal()} disabled={isDependent}>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={width} height={height} viewBox="0 0 109.484 122.88" enableBackground="new 0 0 109.484 122.88" xmlSpace="preserve">
                    <g>
                        <path fill="#CC0000" fillRule="evenodd" clipRule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"/>
                    </g>
                </svg>
            </button>
            <dialog id={id} className="modal">
                <div className="modal-box text-neutral">
                    <h3 className="font-bold text-lg mb-2 text-left">Opravdu chcete smazat?</h3>
                    <div className="flex flex-row justify-evenly gap-4 mt-4">
                        <form method="dialog" className='btn w-1/3'>
                            <button className="w-full">Ne</button>
                        </form>
                        <button className="btn w-1/3" onClick={handleConfirm}>Ano, smazat</button>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default DeleteButton