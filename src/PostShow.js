/**
 * Created on 2018/1/17
 * @author Stone Lee<loverinfolee@gmail.com>
 */
import React from 'react';
import { Show, SimpleShowLayout, TextField, RichTextField } from 'admin-on-rest';

export default (props) => (
    <Show { ...props }>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="id" />
            <TextField source="userId" />
            <RichTextField source="body" />
        </SimpleShowLayout>
    </Show>
);