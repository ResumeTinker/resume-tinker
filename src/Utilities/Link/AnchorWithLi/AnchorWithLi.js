import React from 'react';
import {Link} from 'react-router-dom';

const AnchorWithLi = ({using_router, href, class_name, li_class_name, data_target, name}) => {
    if (using_router) {
        return (
            <li className={li_class_name}>
                <Link to={href} className={class_name} data-target={data_target}>
                    {name}
                </Link>
            </li>
        );
    }
    return (
        <li className={li_class_name}>
            <a href={href} className={class_name} data-target={data_target}>
                {name}
            </a>
        </li>
    );
}

export default AnchorWithLi;