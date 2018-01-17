/**
 * Created on 2018/1/17
 * @author Stone Lee<loverinfolee@gmail.com>
 */
import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'admin-on-rest';


const Menu = ({ resources, onMenuTap, logout }) => (
    <div>
        <MenuItemLink to="/posts" primaryText="帖子管理" onClick={onMenuTap} />
        <MenuItemLink to="/users" primaryText="用户管理" onClick={onMenuTap} />
        {logout}
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
})
export default connect(mapStateToProps)(Menu);