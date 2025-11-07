import { CreatedDate } from "../../../utils/DateTimeFormate";
import DataTableComponents from "../../../components/data-table/DataTableComponents";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reqtoSuperAdminGetContinents } from "../../redux-Toolkit/services/superadmin/SuperAdminServices";

const Continent = () => {
    const dispatch = useDispatch();

    const superAdminReducer = useSelector((state) => state.SuperAdmin);
    const { continentsList, loader, deleteLoader } = superAdminReducer;


    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const columns = [
        {
            name: 'Name',
            cell: (row) => row?.name || "-",
            minWidth: "180px !important",
            width: "50%",
        },
        {
            name: 'Created Date',
            cell: (row) => CreatedDate(row.created_at),
            minWidth: "180px !important",
        },
    ];

    const filterContinent = (continentsList || []).filter((i) => {
        const searchstr = `${i.name} ${CreatedDate(i.created_at)}`.toLowerCase();
        const matchesSearch = searchstr.includes(search.toLowerCase());
        return matchesSearch;
    });


    const startIndex = (currentPage - 1) * perPage;
    const currentPageData = filterContinent.slice(startIndex, startIndex + perPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };



    const handleRowsPerPageChange = (newPerPage) => {
        setPerPage(newPerPage);
        setCurrentPage(1);
    };

    const GetContinentList = async () => {
        await dispatch(reqtoSuperAdminGetContinents());
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
                            <div className="table-responsive">
                                <DataTableComponents
                                    columns={columns}
                                    currentPageData={currentPageData}
                                    loader={loader}
                                    filterDataLength={filterContinent?.length || 0}
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

export default Continent
