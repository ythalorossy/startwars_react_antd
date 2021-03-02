import { useState } from "react";
import { PageHeader, Alert, Table } from "antd";
import { A } from "hookrouter";
import { format, parse } from "date-fns";

import { useFetch } from "../../start-wars";

import "./Films.less";

const Films = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/films`, pagination);

  function handleChange(pagination, filters, sorter, extra) {
    if (extra.action === "paginate") {
      setPagination({ ...pagination });
    }
  }

  const columns = [
    {
      title: "Episode",
      dataIndex: "episode_id",
      key: "episode_id",
      sorter: {
        compare: (a, b) => a.episode_id - b.episode_id,
      },
      defaultSortOrder: "ascend",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Director",
      dataIndex: "director",
      key: "director",
    },
    {
      title: "Producer",
      dataIndex: "producer",
      key: "producer",
    },
    {
      title: "Release Date",
      dataIndex: "release_date",
      key: "release_date",
      render: (text, record) =>
        format(
          parse(record.release_date, "yyyy-MM-dd", new Date()),
          "MMM dd, yyyy"
        ),
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      render: (text, record) => {
        const id = record.url.match(/(\d+)/gm)[0].replaceAll("/", "");

        const url = `/films/${id}`;
        return <A href={url}>details</A>;
      },
    },
  ];

  if (data.error) return <Alert message="Error Text" type="error" />;
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Films"
        subTitle="List of Star Wars Films"
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

export default Films;
