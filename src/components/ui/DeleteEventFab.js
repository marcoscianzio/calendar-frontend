import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventStartDelete } from "../../actions/events";

const DeleteEventFab = () => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(eventStartDelete());
    };

    return (
        <button className="btn btn-danger fab-danger" onClick={handleDelete}>
            <i className="fas fa-trash mr-2"></i>
            <span>Borrar evento</span>
        </button>
    );
};

export default DeleteEventFab;
