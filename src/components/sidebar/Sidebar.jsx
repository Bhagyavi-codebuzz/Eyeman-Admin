import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SidebarData } from '../constants/Data';
import Logo from "../../assets/images/logo.svg";
// import LogoSmall from "../../assets/images/logo-small.svg";
// import { useDispatch, useSelector } from 'react-redux';
// import { reqtoAdminCompanyDetail } from '../../redux-Toolkit/services/admin/AuthServices';

export const SuperAdminSidebar = ({ mobileToggle, setMobileToggle, handleLogout }) => {
    const [sidebarToggle, setSidebarToggle] = useState(true);

    const handleSidebarDismiss = () => {
        if (window.innerWidth <= 576) {
            setMobileToggle(!mobileToggle);
        }
    };

    return (
        <aside id="sidebar" className={`sidebar break-point-sm has-bg-image ${sidebarToggle ? "collapsed" : ""} ${mobileToggle ? "toggled" : ""}`}
            onMouseEnter={() => setSidebarToggle(false)}
            onMouseLeave={() => setSidebarToggle(true)}
        >
            <Link id="btn-collapse" className={`sidebar-collapser`} onClick={() => setSidebarToggle(!sidebarToggle)}>
                <i className="ri-arrow-left-s-line" />
            </Link>
            <div className="sidebar-layout">
                <div className="sidebar-header">
                    <Link to="/superadmin/dashboard" className="pro-sidebar-logo admin" onClick={handleSidebarDismiss}>
                        <img src={`${sidebarToggle ? "" : Logo}`} alt="SuperAdmin logo" className={`${sidebarToggle ? "logo-img" : "full-fluid"}`} width={80} />
                    </Link>
                </div>

                <nav className="menu open-current-submenu">
                    <ul>
                        {
                            SidebarData?.superadmin?.map((i, index) => {
                                return (
                                    <li className="menu-item" key={index}>
                                        {
                                            i.onClick === "logout" ? (
                                                <Link
                                                    onClick={i?.onClick === "logout" ? handleLogout : null}
                                                >
                                                    <span className="menu-icon">
                                                        {i.icon}
                                                    </span>
                                                    <span className="menu-title">
                                                        {i.label}
                                                    </span>
                                                </Link>
                                            ) : (
                                                <NavLink
                                                    to={i.route}
                                                    className={`d-flex align-items-center`}
                                                    onClick={handleSidebarDismiss}
                                                >
                                                    <span className="menu-icon">
                                                        {i.icon}
                                                    </span>
                                                    <span className="menu-title">
                                                        {i.label}
                                                    </span>
                                                </NavLink>
                                            )
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </aside>
    )
}