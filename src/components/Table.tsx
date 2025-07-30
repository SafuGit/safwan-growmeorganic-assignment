import { Column } from "primereact/column";
import { DataTable, type DataTablePageEvent } from "primereact/datatable";
import { useCallback, useEffect, useState } from "react";

const Table = () => {
  const API_URL = "https://api.artic.edu/api/v1/artworks";
  const [data, setData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);
  const rowsPerPage = 12;

  const fetchData = useCallback((targetPage: number) => {
    fetch(`${API_URL}?page=${targetPage}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setTotalRecords(data.pagination.total);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetchData(page);
  }, [fetchData, page]);

  const handleOnPage = (e: DataTablePageEvent) => {
    if (typeof e.page === "number") {
      const newPage = e.page + 1;
      setPage(newPage);
      fetchData(newPage);
    }
  };

  return (
    <div>
      <DataTable
        lazy
        value={data}
        paginator
        rows={rowsPerPage}
        totalRecords={totalRecords}
        onPage={handleOnPage}
        first={(page - 1) * rowsPerPage}
      >
        <Column
          field="title"
          header="Title"
          bodyStyle={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "200px",
          }}
        />
        <Column
          field="place_of_origin"
          header="Place of Origin"
          bodyStyle={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "200px",
          }}
        />
        <Column
          field="artist_display"
          header="Artist Display"
          bodyStyle={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "200px",
          }}
        />
        <Column
          field="inscriptions"
          header="Inscriptions"
          bodyStyle={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "200px",
          }}
        />
        <Column field="date_start" header="Date Start" />
        <Column field="date_end" header="Date End" />
      </DataTable>
    </div>
  );
};

export default Table;
