import React, {Fragment} from 'react';
import './AppFooter.css';

export default function AppFooterFunctionalComponent(props) {
    const currentYear = new Date().getFullYear();
    return (
        <Fragment>
            <hr />
            <p className="footer" >Coptright &copy; {currentYear} Acme Ltd. {props.myProperty}</p>
        </Fragment>

    );
}