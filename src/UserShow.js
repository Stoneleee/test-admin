/**
 * Created on 2018/1/17
 * @author Stone Lee<loverinfolee@gmail.com>
 */
import React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField } from 'admin-on-rest';

export default (props) => (
    <Show { ...props }>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </SimpleShowLayout>
    </Show>
);