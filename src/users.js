/**
 * Created on 2018/1/16
 * @author Stone Lee<loverinfolee@gmail.com>
 */
import React from 'react';
import { List, Datagrid, EmailField, TextField, EditButton, ShowButton } from 'admin-on-rest';

const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export default UserList;