import React from 'react'

const MemoComp = ({name}) => {
    console.log("Memo Component")
    return (
        <div>
            Memo Comp {name}
        </div>
    )
}

export default React.memo(MemoComp)
