/**
 * Created on 2018/1/16
 * @author Stone Lee<loverinfolee@gmail.com>
 */
import React from 'react';
import {
    List,
    Filter,
    Datagrid,
    TextField,
    TextInput,
    SelectInput,
    ReferenceField,
    ReferenceInput,
    EditButton,
} from 'admin-on-rest';

const PostFilter = (props) => (
    <Filter { ...props }>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const PostList = (props) => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);

export default PostList;