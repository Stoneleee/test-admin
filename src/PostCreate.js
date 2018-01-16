/**
 * Created on 2018/1/16
 * @author Stone Lee<loverinfolee@gmail.com>
 */
import React from 'react';
import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, LongTextInput } from 'admin-on-rest';

const PostCreate = (props) => (
    <Create { ...props }>
        <SimpleForm>
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);

export default PostCreate;