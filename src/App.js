import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

import Dashboard from './Dashboard';
import login from './AuthClient';
import PostList from './posts';
import PostEdit from './PostEdit';
import PostCreate from './PostCreate';
import UserList from './users';

import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

/*
// add Authorization token header
const httpClient = (url, options = {}) => {
    options.user = {
        authenticated: true,
        token: 'SRTRDFVESGNJYTUKTYTHRG',
    };

    return fetchUtils.fetchJson(url, options);
};
*/

const App = () => (
    <Admin authClient={login} dashboard={Dashboard} restClient={jsonServerRestClient('http://localhost:3008')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
