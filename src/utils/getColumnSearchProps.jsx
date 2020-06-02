import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const getColumnSearchProps = (dataIndex, handleSearch, handleReset) => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        style={{ width: 188, marginBottom: 8, display: "block" }}
      />
      <Button
        type="primary"
        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
        icon={<SearchOutlined />}
        size="small"
        style={{ width: 90, marginRight: 7 }}
      >
        Search
      </Button>
      <Button
        onClick={() => handleReset(clearFilters)}
        size="small"
        style={{ width: 90 }}
      >
        Reset
      </Button>
    </div>
  ),
  filterIcon: (filtered) => (
    <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
  ),
  onFilter: (value, record) =>
    record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
});
