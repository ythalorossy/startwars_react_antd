import { useState } from "react";
import { PageHeader, Alert, Table } from "antd";
import { A } from "hookrouter";

import { useFetch } from "../../start-wars";

import "./Starships.less";
import NumberFormat from "react-number-format";

const Starships = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/starships`, pagination);

  function handleChange(pagination, filters, sorter, extra) {
    if (extra.action === "paginate") {
      setPagination({ ...pagination });
    }
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: {
        compare: (a, b) => a.name - b.name,
      },
      defaultSortOrder: "ascend",
      fixed: "left",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
      sorter: (a, b) => a.model.localeCompare(b.model),
    },
    {
      title: "Starship Class",
      dataIndex: "starship_class",
      key: "starship_class",
    },
    {
      title: "Cargo Capacity",
      dataIndex: "cargo_capacity",
      key: "cargo_capacity",
      render: (cargo_capacity) =>
        cargo_capacity === "unknown" ? (
          cargo_capacity
        ) : (
          <NumberFormat
            value={cargo_capacity}
            displayType="text"
            thousandSeparator={true}
            suffix="Kg"
          />
        ),
    },
    {
      title: "Crew",
      dataIndex: "crew",
      key: "crew",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      render: (text, record) => {
        const id = record.url.match(/(\d+)/gm)[0];
        const url = `/starships/${id}`;
        return <A href={url}>details</A>;
      },
    },
  ];

  if (data.error) return <Alert message="Error Text" type="error" />;
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Starships"
        subTitle="List of Star Wars Starship"
      />

      <Table
        dataSource={data.data.results}
        columns={columns}
        pagination={{
          ...pagination,
          total: data.data.count,
          pageSizeOptions: [10],
        }}
        onChange={handleChange}
        rowKey={(record) => record.url}
        loading={{
          spinning: data.isFetching,
          size: "large",
        }}
      />
    </div>
  );
};

export default Starships;
