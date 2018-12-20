export default {
    menus: [
        { key: '/app/index', title: '首页', icon: 'mobile', component: 'Dashboard'},
        { key: '/app/auth', title: '权限管理', icon: 'scan' },
        {
            key: '/app/resource', title: '资源管理', icon: 'menu-fold',
            subs: [
                { key: '/app/resource/meeting', title: '会议管理', component: 'Meeting' },
                { key: '/app/resource/house', title: '客房管理', component: 'House' }
            ]
        }
    ]
}