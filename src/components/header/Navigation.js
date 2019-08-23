import React from "react";
import PropTypes from 'prop-types';
import ActiveNavigation from "../../containers/navigation/ActiveNavigation";
import {Identity} from "../../services/auth";

class Navigation extends React.Component {
    // потом поменяю
    items = [
        {
            url: '/dashboard',
            title: 'Dashboard',
            icon: '',
            childs: [
               {
                    title: 'Analytics',
                    url: '/analytics',
                    sort: 1
                },
                {
                    title: 'Statistic',
                    url: '/statistic',
                    sort: 2
                },
                {
                    title: 'Ads',
                    url: '/ads',
                    sort: 3
                }
            ],
            sort: 1
        },
        {
            title: 'Autonomous Systems',
            url: '/dashboard/autonomous-systems',
            icon: 'view_module',
            childs: [
                {
                    title: 'Generral Information',
                    url: '/general',
                    sort: 1
                },
                {
                    title: 'Subscriber traffic',
                    url: '/traffic',
                    sort: 2
                },
                {
                    title: 'Link structures',
                    url: '/chain-structure',
                    sort: 3
                }
            ],
            sort: 2
        },
        {
            title: 'Monit Old Statistic',
            url: '/dashboard/ads',
            icon: '',
            sort: 3
        },
        {
            title: 'Technical information',
            url: '/tech-information',
            icon: 'error',
            sort: 4
        },
        {
            title: 'ClickHouse Dashboard',
            url: '/dashboard/clickhouse',
            icon: 'extension',
            sort: 5,
            isVisible: Identity.can('canViewDashboard')
        }
    ];

    render() {
        return (
            <div id="header-menu-container" className="header-navbar collapse d-lg-flex p-0 bg-white border-top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                <ActiveNavigation items={ this.items }/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Navigation.contextTypes = {
    router: PropTypes.object
};

export default Navigation;
