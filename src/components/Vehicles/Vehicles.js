import { useState } from "react";
import { PageHeader, Alert, Table } from "antd";
import { A } from "hookrouter";

import { useFetch } from "../../start-wars";

const Vehicles = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/vehicles`, pagination);

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
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
      sorter: (a, b) => a.model.localeCompare(b.model),
    },
    {
      title: "Class",
      dataIndex: "vehicle_class",
      key: "vehicle_class",
    },
    {
      title: "Manufacturer",
      dataIndex: "manufacturer",
      key: "manufacturer",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      render: (text, record) => {
        const id = record.url.match(/(\d+)/gm)[0].replaceAll("/", "");

        const url = `/vehicles/${id}`;
        return <A href={url}>details</A>;
      },
    },
  ];

  // if (data.isFetching) return <Spin />;
  if (data.error) return <Alert message="Error Text" type="error" />;

  const vehicles = data.data.results;

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Vehicles"
        subTitle="List of Star Wars Vehicles"
      />

      <Table
        dataSource={vehicles}
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
    </>
  );
};

export default Vehicles;
