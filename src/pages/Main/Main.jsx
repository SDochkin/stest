import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Table } from "antd";

import { getColumnSearchProps } from "../../utils/getColumnSearchProps";
import { getData } from "../../api";

export const Main = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({
    searchText: "",
    searchedColumn: "",
  });
  const history = useHistory();

  useEffect(() => {
    getData().then(setData);
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearch({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearch({ searchText: "" });
  };

  const columns = [
    {
      title: "Регион",
      dataIndex: "territory",
      key: "territory",
      ...getColumnSearchProps("territory", handleSearch, handleReset),
    },
    {
      title: "Кол-во библиотек",
      dataIndex: "libraries",
      key: "libraries",
      sorter: (a, b) => a.libraries - b.libraries,
    },
  ];

  return (
    <Layout>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        rowKey={(record) => record.order}
        onRow={(record, rowIndex) => {
          return {
            onClick: () =>
              history.push({
                pathname: record.territory,
                state: { data: record },
              }),
          };
        }}
      />
    </Layout>
  );
};
