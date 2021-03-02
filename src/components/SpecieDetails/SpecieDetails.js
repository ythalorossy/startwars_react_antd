import React, { useState } from "react";
import { Spin, Alert, PageHeader, Descriptions, Badge } from "antd";

import { useFetch } from "../../start-wars";

import "./SpecieDetails.less";
import PlanetItemDetails from "../PlanetDetails/PlanetItemDetails";

const SpecieDetails = ({ id }) => {
  const [pagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/species/${id}`, pagination);

  if (data.isFetching) return <Spin />;
  if (data.error) return <Alert message={data.error} type="error" />;

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={`${data.data.name}`}
        subTitle={`Details about the Specie`}
        onBack={() => window.history.back()}
      />
      <Descriptions layout="vertical" column={4} bordered>
        <Descriptions.Item label="Classification">
          {data.data.classification}
        </Descriptions.Item>
        <Descriptions.Item label="Designation">
          {data.data.designation}
        </Descriptions.Item>
        <Descriptions.Item label="Avarage Height">
          {data.data.average_height}
        </Descriptions.Item>
        <Descriptions.Item label="Average Lifespan">
          {data.data.average_lifespan}
        </Descriptions.Item>

        <Descriptions.Item label="Home World">
        {data.data.homeworld.split(/\s/).map((planet) => {
            const id = planet.match(/(\d+)/gm)[0];
            return <PlanetItemDetails id={id} key={`planet_${id}`} />;
          })}
        </Descriptions.Item>
        <Descriptions.Item label="Language">
          {data.data.language}
        </Descriptions.Item>
        <Descriptions.Item label="Hair Colors">
          {data.data.hair_colors.split(",").map((hc, i) => (
            <div  key={`hc_${i}`}>
              <Badge status="default" size="small" text={`${hc}`} color={`${hc}`}  />
              <br />
            </div>
          ))}
        </Descriptions.Item>
        <Descriptions.Item label="Eye Colors">
          {data.data.eye_colors.split(",").map((ec, i) => (
            <div key={`ec_${i}`}>
              <Badge status="default" size="small" text={`${ec}`} color={`${ec}`}/>
              <br />
            </div>
          ))}
        </Descriptions.Item>

        <Descriptions.Item label="Skin Colors" span={1}>
          {data.data.skin_colors.split(",").map((sc,i) => (
            <div key={`sc_${i}`}>
              <Badge status="default" size="small" text={`${sc}`} />
              <br />
            </div>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default SpecieDetails;
