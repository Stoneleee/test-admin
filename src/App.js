import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

import Dashboard from './Dashboard';
import AuthClient from './AuthClient';
import PostList from './posts';
import PostShow from './PostShow';
import PostEdit from './PostEdit';
import PostCreate from './PostCreate';
import UserList from './users';
import UserShow from './UserShow';
import NotFound from './NotFound';

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
    <Admin
        title="用户管理后台系统"
        authClient={AuthClient}
        dashboard={Dashboard}
        catchAll={NotFound}
        restClient={jsonServerRestClient('http://localhost:3008')}
    >
        <Resource
            options={{ label: '帖子管理' }}
            name="posts"
            list={PostList}
            show={PostShow}
            edit={PostEdit}
            create={PostCreate}
            remove={Delete}
            icon={PostIcon}
        />
        <Resource
            options={{ label: '用户管理' }}
            name="users"
            list={UserList}
            show={UserShow}
            icon={UserIcon}
        />
    </Admin>
);

export default App;
