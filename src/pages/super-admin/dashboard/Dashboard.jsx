import { useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import { DashboardContent } from '../../../components/constants/Data';
import { useDispatch, useSelector } from 'react-redux';
import { reqtoSuperAdminDashboard } from '../../redux-Toolkit/services/superadmin/SuperAdminServices';
// import SkeletonField from '../../../components/skeleton/SkeletonField';


const Dashboard = () => {
    const dispatch = useDispatch();

    const { dashboard = {}, dashboardLoader, error } = useSelector(
        (state) => state.SuperAdmin || {}
    );


    const GetDashboard = async () => {
        await dispatch(reqtoSuperAdminDashboard());
    }

    useEffect(() => {
        GetDashboard();
    }, []);

    return (
        <>
            <div className="dashboard">
                <div className="row gx-5 mb-5">
                    {
                        DashboardContent?.superadmin?.map((i, index) => {
                            return (
                                <div className="col-xl-4 col-md-6 col-12 mt-lg-5 mt-4" key={index}>
                                    <NavLink to={i.route}>
                                        <div className="card shadow border-0">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <span className="h6 fw-semibold text-muted text-sm d-block mb-2 title">
                                                            {i.title}
                                                        </span>
                                                        {/* {dashboardLoader ? (
                                                            <SkeletonField loading={dashboardLoader} variant='pill' height={20} width={100} />
                                                        ) : ( */}
                                                        <span className="mb-0 card-title">
                                                            {dashboard[i?.apiCount] || 0}
                                                        </span>
                                                        {/* )} */}
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="icon icon-shape bg-tertiary text-dark text-lg rounded-circle dashboard-icon"
                                                        >
                                                            {i.icon}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard;
