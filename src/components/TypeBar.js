import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index.js';
import '../index.css';
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const {item} = useContext(Context)

    return (
        <ListGroup className="md:w-48 text-gray-900 bg-white border border-gray-400 rounded-lg select-none">
            <ListGroup.Item 
                onClick={() => item.setSelectedType({})}
                className={!item.selectedType.id ? 'typeBarActive' : "typeBar"}
                active={!item.selectedType.id}
            >
                Without filter
            </ListGroup.Item>
            {item.types.map(type =>
                <ListGroup.Item
                    key={type.id}
                    onClick={() => item.setSelectedType(type)}
                    className={type.id === item.selectedType.id ? 'typeBarActive' : "typeBar"}
                    active={type.id === item.selectedType.id}
                >
                        {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;