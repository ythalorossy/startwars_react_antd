import React, { useState } from "react";
import { Spin, Alert, PageHeader, Descriptions } from "antd";

import { useFetch } from "../../start-wars";

import "./StarshipDetails.less";
import PeopleItemDetails from "../PeopleDetails/PeopleItemDetails";
import NumberFormat from "react-number-format";

const StarshipDetails = ({ id }) => {

  const [pagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/starships/${id}`, pagination);

  if (data.isFetching) return <Spin />;
  if (data.error) return <Alert message={data.error} type="error" />;

  const starship = data.data;

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={`${starship.name}`}
        subTitle={`Details about the starship`}
        onBack={() => window.history.back()}
      />
      <Descriptions layout="vertical" column={4} bordered>
        <Descriptions.Item label="Model">
          {starship.model}
        </Descriptions.Item>
        <Descriptions.Item label="Class">
          {starship.starship_class}
        </Descriptions.Item>
        <Descriptions.Item label="Manufacturer">
          {starship.manufacturer}
        </Descriptions.Item>
        <Descriptions.Item label="Cost in Credits">
          {starship.cost_in_credits}
        </Descriptions.Item>

        <Descriptions.Item label="Length">
        {starship.length === 'unknown'
          ? starship.length
          : <NumberFormat value={starship.length} displayType="text" thousandSeparator={true} suffix="m"/>
        }
          
        </Descriptions.Item>
        <Descriptions.Item label="Crew">
          {starship.crew}
        </Descriptions.Item>
        <Descriptions.Item label="Passengers">
          {starship.passengers}
        </Descriptions.Item>
        <Descriptions.Item label="Max atmosphering speed">
          {starship.max_atmosphering_speed}
        </Descriptions.Item>
        <Descriptions.Item label="Hyperdrive Rating">
          {starship.hyperdrive_rating}
        </Descriptions.Item>  
        <Descriptions.Item label="MGLT">
          {starship.MGLT}
        </Descriptions.Item>  
        <Descriptions.Item label="Cargo Capacity">
        {starship.cargo_capacity === 'unknown'
          ? starship.cargo_capacity
          : <NumberFormat value={starship.cargo_capacity} displayType="text" thousandSeparator={true} suffix="Kg"/>
        }
        </Descriptions.Item>  
        <Descriptions.Item label="Consumables" >
          {starship.consumables}
        </Descriptions.Item>  
        <Descriptions.Item label="Pilots" span={1}>
          {starship.pilots.map((item) => {
            const id = item.match(/(\d+)/gm)[0];
            return <PeopleItemDetails id={id} key={`people_${id}`} />;
          })   }
        </Descriptions.Item>        

      </Descriptions>
    </>
  );
};

export default StarshipDetails;
