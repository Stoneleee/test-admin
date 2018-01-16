/**
 * Created on 2018/1/16
 * @author Stone Lee<loverinfolee@gmail.com>
 */
import React from 'react';
import { Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput } from 'admin-on-rest';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>
};

const PostEdit = (props) => (
    <Edit title={<PostTitle />} { ...props }>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;