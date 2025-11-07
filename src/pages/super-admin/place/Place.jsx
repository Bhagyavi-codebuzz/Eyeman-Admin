import { CreatedDate } from "../../../utils/DateTimeFormate";
import DataTableComponents from "../../../components/data-table/DataTableComponents";
import { useEffect, useState } from "react";
import Search from '../../../assets/images/search.svg';
import SearchClose from '../../../assets/images/search_close.svg';
import eye from '../../../assets/images/eye.svg';
import edit from '../../../assets/images/edit.svg';
import trash from '../../../assets/images/trash.svg';
import { useDispatch, useSelector } from "react-redux";
import { reqtoSuperAdminGetPlace } from "../../redux-Toolkit/services/superadmin/SuperAdminServices";

const modal = {
    addCompany: false,
    editCompany: false,
    deleteCompany: false,
}

const initialState = {
    viewId: null,
    editCompany: null,
    deleteId: null,
    shareLink: null,
}


const Place = () => {
    const dispatch = useDispatch();

    const superAdminReducer = useSelector((state) => state.SuperAdmin);
    const { placeList, loader, deleteLoader } = superAdminReducer;


    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    // Offcanvas / Modal
    const [modalShow, setModalShow] = useState(modal);
    const [modalState, setModalState] = useState(initialState);

    const columns = [
        {
            name: 'Images',
            cell: (row) => (
                <div className="">
                    <img
                        src={row.image}
                        alt="Image"
                        className={``}
                        style={{
                            maxWidth: "100px",
                            maxHeight: "80px",
                            padding: '8px 0'
                        }}
                    />
                </div>
            ),
            width: "400px",
        },
        {
            name: 'Name',
            cell: (row) => row?.name || "-",
            minWidth: "180px !important",
            width: "25%",
        },
        {
            name: 'Continent',
            cell: (row) => row?.continent || "-",
            minWidth: "180px !important",
            width: "25%",
        },
        {
            name: 'Country',
            cell: (row) => row?.country || "-",
            minWidth: "180px !important",
            width: "25%",
        },
        {
            name: 'Action',
            cell: (row) =>
            (
                <div className="d-flex align-items-center">
                    <button type="button" className="btn btn-sm btn-neutral text-nowrap eye-icon me-3"
                        onClick={() => {
                            setModalShow({ ...modalShow, viewCompany: true });
                            setModalState({ ...modalState, viewId: row.id });
                        }}
                    >
                        <img src={eye} alt="eye" />
                    </button>

                    <button type="button" className="btn btn-sm btn-neutral text-nowrap eye-icon me-3"
                        onClick={() => {
                            setModalShow({ ...modalShow, editCompany: true });
                            setModalState({ ...modalState, editCompany: row });
                        }}
                    >
                        <img src={edit} alt="edit" />
                    </button>

                    <button type="button" className="btn btn-sm btn-neutral text-nowrap eye-icon"
                        onClick={() => {
                            setModalShow({ ...modalShow, deleteCompany: true });
                            setModalState({ ...modalState, deleteId: row.id });
                        }}
                    >
                        <img src={trash} alt="trash" />
                    </button>
                </div>
            ),
            width: '150px',
            center: true
        },
        // {
        //     name: 'Created Date',
        //     cell: (row) => CreatedDate(row.created_at),
        //     minWidth: "180px !important",
        // },
    ];

    const handleClose = () => {
        setModalShow(modal);
        setModalState(initialState);
    }

    const handleDelete = async () => {
        // const res = await dispatch(reqtoSuperAdminDeleteCompany(modalState.deleteId));
        // if (res.payload?.status) {
        //     GetCompanyList();
        //     handleClose();
        // }
    }

    const filterPlace = (placeList || []).filter((i) => {
        const searchstr = `${i.name} ${CreatedDate(i.created_at)}`.toLowerCase();
        const matchesSearch = searchstr.includes(search.toLowerCase());
        return matchesSearch;
    });


    const startIndex = (currentPage - 1) * perPage;
    const currentPageData = filterPlace.slice(startIndex, startIndex + perPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };



    const handleRowsPerPageChange = (newPerPage) => {
        setPerPage(newPerPage);
        setCurrentPage(1);
    };

    const GetContinentList = async () => {
        await dispatch(reqtoSuperAdminGetPlace());
    }

    useEffect(() => {
        GetContinentList();
    }, []);
    return (
        <>
            <section className="categorylist-section mt-2 mt-lg-2 mt-xl-3">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header pt-3">
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <div className="col-lg-12 col-12 d-flex justify-content-end">
                                        <div className="searchs d-flex align-items-center gap-1 me-2 me-xl-4">
                                            {/* <select
                                                className="form-select form-control"
                                                id="type"
                                                name="type"
                                                value={select}
                                                onChange={(e) => setSelect(e.target.value)}
                                                required
                                            >
                                                <option value="">All</option>
                                                <option value="Basic">Basic</option>
                                                <option value="Manual">Manual</option>
                                                <option value="Professional">Professional</option>
                                            </select> */}
                                        </div>

                                        <div className="search d-flex align-items-center gap-1 me-2 me-xl-4">
                                            <input
                                                type="search"
                                                className="form-control form-control-sm border-0"
                                                placeholder='Search'
                                                id="dt-search-0"
                                                name='search'
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                                autoComplete="off"
                                            />

                                            {
                                                search ?
                                                    <button
                                                        className="search-cancel bg-transparent"
                                                        onClick={() => setSearch("")}
                                                    >
                                                        <img src={SearchClose} alt="Search" className="img-fluid" />
                                                    </button>
                                                    :
                                                    <img src={Search} alt="Search" className="img-fluid" />
                                            }
                                        </div>

                                        <button className="add-btn boreder-0" type="button"
                                            onClick={() => setModalShow({ ...modalShow, addCompany: true })}
                                        >
                                            Add Partner
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="table-responsive">
                                <DataTableComponents
                                    columns={columns}
                                    currentPageData={currentPageData}
                                    loader={loader}
                                    filterDataLength={filterPlace?.length || 0}
                                    perPage={perPage}
                                    noDataTable="Data Not Found"
                                    handleRowsPerPageChange={handleRowsPerPageChange}
                                    handlePageChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Place
