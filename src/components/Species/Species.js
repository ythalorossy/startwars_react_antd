import { useState } from "react";
import { PageHeader, Alert, Table } from "antd";
import { A } from "hookrouter";

import { useFetch } from "../../start-wars";
import "./Species.less";

const Species = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Classification",
      dataIndex: "classification",
      key: "classification",
      sorter: (a, b) => a.classification.localeCompare(b.classification),
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
      render: (designation) => `${designation}`,
    },
    {
      title: "language",
      dataIndex: "language",
      key: "language",
      render: (language) => `${language}`,
    },
    {
      title: "Hair Color",
      dataIndex: "hair_colors",
      key: "hair_colors",
    },
    {
      title: "Skin Color",
      dataIndex: "skin_colors",
      key: "skin_colors",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      render: (text, record) => {
        const id = record.url.match(/(\d+)/gm)[0].replaceAll("/", "");

        const url = `/species/${id}`;
        return <A href={url}>details</A>;
      },
    },
  ];

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/species`, pagination);

  function handleChange(pagination, filters, sorter, extra) {
    if (extra.action === "paginate") {
      setPagination({ ...pagination });
    }
  }

  if (data.isError) return <Alert message="Error Text" type="error" />;
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Species"
        subTitle="List of Star Wars Species"
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
    </>
  );
};

export default Species;
