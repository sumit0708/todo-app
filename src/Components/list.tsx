import React, {} from 'react';

import './list.css';

const ListComp = (props: {
    onComplete: Function,
    data: Array<{ id: Number, description: String, isCompleted: Boolean }>
}) => {

    const onComplete = (id: Number) => {
        props.onComplete && props.onComplete(id);
    }

    const view = props.data.map(element => (<li 
        className={`${element.isCompleted ? "crossedLine" : ''} liBase`}
        onClick={() => onComplete(element.id)}>
            {element.description}
    </li>));

    return (
        <div className="listWrapper">
            <ul className={'ulBase'}>{view}</ul>
        </div>
    );
}

export default ListComp;

// className={`${!element.isCompleted ? Styles.crossedLine : null} ${Styles.liBase}`}

