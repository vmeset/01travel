import React from 'react'

const Comment = (props) => {    

    return (
        <div>
            <div>
                {props.user}
            </div>
            <div>
                {props.comment}
            </div>
        </div>
    )
}

export default Comment