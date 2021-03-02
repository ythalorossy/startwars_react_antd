import React, { useState } from "react";
import { PageHeader, Descriptions, Spin, Alert, Badge } from "antd";
import NumberFormat from 'react-number-format';
import { useFetch } from "../../start-wars";
import PeopleItemDetails from "../PeopleDetails/PeopleItemDetails";

import "./PlanetDetails.less";

const PlanetDetails = ({ id }) => {
  const [pagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/planets/${id}`, pagination);

  if (data.isFetching) return <Spin />;
  if (data.error) return <Alert message="Error Text" type="error" />;

  const planet = data.data;

  console.log(planet.terrain.split(",").map((t) => <Badge text={`${t}`} />));

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={`${planet.name}`}
        subTitle={`Details about the Planet`}
        onBack={() => window.history.back()}
      />
      <Descriptions layout="vertical" column={4} bordered>
        <Descriptions.Item label="Diameter">
          {planet.diameter === 'unknown' ? planet.diameter : <NumberFormat value={planet.diameter} displayType="text" suffix="Km"/>}
        </Descriptions.Item>
        <Descriptions.Item label="Rotation Period">
          {`${planet.rotation_period} hours`}
        </Descriptions.Item>
        <Descriptions.Item label="Orbital Period">
          {`${planet.orbital_period} days`}
        </Descriptions.Item>
        <Descriptions.Item label="Gravity">{planet.gravity}</Descriptions.Item>
        <Descriptions.Item label="Population">
        {planet.population === 'unknown'
          ? planet.population
          : <NumberFormat value={planet.population} defaultChecked={true} displayType="text" thousandSeparator={true} />
        }
        </Descriptions.Item>
        <Descriptions.Item label="Climate">{planet.climate}</Descriptions.Item>
        <Descriptions.Item label="Terrain">
          {planet.terrain.split(",").map((t) => (
            <>
              <Badge status="default" size="small" text={`${t}`} />
              <br />
            </>
          ))}
        </Descriptions.Item>
        <Descriptions.Item label="Surface Water">
          {`${planet.surface_water}%`}
        </Descriptions.Item>
        <Descriptions.Item label="Residents" span={1}>
          {planet.residents.map((item) => {
            const id = item.match(/(\d+)/gm)[0];
            return <PeopleItemDetails id={id} />;
          })}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default PlanetDetails;
