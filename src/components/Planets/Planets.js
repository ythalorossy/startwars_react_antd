import { useState } from "react";
import { PageHeader, Alert, Table } from "antd";
import { A } from "hookrouter";

import { useFetch } from "../../start-wars";
import NumberFormat from "react-number-format";

const Planets = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/planets`, pagination);

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
      title: "Diameter",
      dataIndex: "diameter",
      key: "diameter",
      sorter: (a, b) => a.diameter.localeCompare(b.diameter),
      render: (diameter) =>
        diameter === "unknown" ? (
          diameter
        ) : (
          <NumberFormat value={diameter} displayType="text" suffix="Km" />
        ),
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
      sorter: (a, b) => a.diameter.localeCompare(b.diameter),
      render: (population) =>
        population === "unknown" ? (
          population
        ) : (
          <NumberFormat
            value={population}
            defaultChecked={true}
            displayType="text"
            thousandSeparator={true}
          />
        ),
    },
    {
      title: "Terrain",
      dataIndex: "terrain",
      key: "terrain",
    },
    {
      title: "Climate",
      dataIndex: "climate",
      key: "climate",
    },
    {
      title: "Surface Water",
      dataIndex: "surface_water",
      key: "surface_water",
      render: (surface_water) =>
        surface_water === "unknown" ? (
          surface_water
        ) : (
          <NumberFormat
            value={surface_water}
            defaultChecked={true}
            displayType="text"
            thousandSeparator={true}
            suffix="%"
          />
        ),
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      render: (text, record) => {
        const id = record.url.match(/(\d+)/gm)[0].replaceAll("/", "");
        const url = `/planets/${id}`;
        return <A href={url}>details</A>;
      },
    },
  ];

  if (data.isError) return <Alert message="Error Text" type="error" />;

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Planets"
        subTitle="List of Star Wars planets"
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

export default Planets;
