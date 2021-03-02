import { useState } from "react";
import { PageHeader, Alert, Table } from "antd";
import { A } from "hookrouter";

import { useFetch } from "../../start-wars";

import "./People.less";

const People = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: "Mass",
      dataIndex: "mass",
      key: "mass",
      render: (mass) => `${mass} Kg`,
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
      render: (height) => `${height} cm`,
    },
    {
      title: "Hair Color",
      dataIndex: "hair_color",
      key: "hair_color",
    },
    {
      title: "Skin Color",
      dataIndex: "skin_color",
      key: "skin_color",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      render: (text, record) => {
        const id = record.url.match(/(\d+)/gm)[0].replaceAll("/", "");

        const url = `/people/${id}`;
        return <A href={url}>details</A>;
      },
    },
  ];

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/people`, pagination);

  function handleChange(pagination, filters, sorter, extra) {
    if (extra.action === "paginate") {
      setPagination({ ...pagination });
    }
  }

  if (data.isError) return <Alert message="Error Text" type="error" />;
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Characters"
        subTitle="List of Star Wars Characters"
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

export default People;
