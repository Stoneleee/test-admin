/**
 * Created on 2018/1/16
 * @author Stone Lee<loverinfolee@gmail.com>
 */
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'admin-on-rest';

const login = (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username } = params;
        localStorage.setItem('username', username);

        return Promise.resolve();
    }

    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');

        return Promise.resolve();
    }

    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');

            return Promise.resolve();
        }
    }

    if (type === AUTH_CHECK) {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    }

    return Promise.reject('Unknown method');
};

export default login;