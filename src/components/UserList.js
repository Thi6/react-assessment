import React from 'react';

export default function UserList(props) {
    console.log(props.data);
    return (
        <div>
            <h4>Users</h4>
            
            {props.data.map((user) => ( <p> {user.username} </p> ))}

        </div>
    );
}