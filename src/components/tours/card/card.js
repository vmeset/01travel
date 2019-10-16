import React from 'react'
import style from './card.module.css'
import Slider from "./slider/slider";
import Info from './info/info'
import Comment from '../card/comment/comment'
import {updateCommentActionCreator} from '../../../state/state'
import {addCommentActionCreator} from '../../../state/state'

const Card = (props) => {

    let cardInfo =
        props.state.toursData.places.map ( cardInfo => <Info header={cardInfo.header} 
                                        difficulty={cardInfo.difficulty} season={cardInfo.season} />)
    
    let tourComments = 
        props.state.comments.map ( comments => <Comment user={comments.user} comment={comments.comment} dispatch={props.dispatch}  />  )

    let textareaInput = props.newCommentText

    let onCommentChange = (event) => {
        let inputText = event.target.value
        props.dispatch(updateCommentActionCreator(inputText))
    }

    let onSendComment = () => {
        props.dispatch(addCommentActionCreator())
    }

    return (
        <div className={style.card}>
            <Slider />
            <div>
                {cardInfo}
            </div>
            <div>
                {tourComments}
            </div>
            <div>
                <textarea value={props.state.comments.newCommentText} placeholder='your comment' onChange={onCommentChange} />
            </div>
            <div>
                <button onClick={onSendComment}>Send</button>
            </div>
        </div>
    )
}

export default Card