import React, { useState } from "react";
import { Spin, Alert, PageHeader, Descriptions } from "antd";

import { useFetch } from "../../start-wars";

import "./VehicleDetails.less";
import NumberFormat from "react-number-format";
import PeopleItemDetails from "../PeopleDetails/PeopleItemDetails";

const VehicleDetails = ({ id }) => {
  const [pagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/vehicles/${id}`, pagination);

  if (data.isFetching) return <Spin />;
  if (data.error) return <Alert message={data.error} type="error" />;

  const vehicle = data.data;

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={`${vehicle.name}`}
        subTitle={`Details about the Vehicle`}
        onBack={() => window.history.back()}
      />
      <Descriptions layout="vertical" column={4} bordered>
        <Descriptions.Item label="Model">{vehicle.model}</Descriptions.Item>
        <Descriptions.Item label="Class">
          {vehicle.vehicle_class}
        </Descriptions.Item>
        <Descriptions.Item label="Manufacturer">
          {vehicle.manufacturer}
        </Descriptions.Item>
        <Descriptions.Item label="Length">
          {vehicle.length === "unknown" ? (
            vehicle.length
          ) : (
            <NumberFormat
              value={vehicle.length}
              displayType="text"
              thousandSeparator={true}
              suffix="m"
            />
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Cost in Credits">
          {vehicle.cost_in_credits === "unknown" ? (
            vehicle.cost_in_credits
          ) : (
            <NumberFormat
              value={vehicle.cost_in_credits}
              displayType="text"
              thousandSeparator={true}
            />
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Crew">{vehicle.crew}</Descriptions.Item>
        <Descriptions.Item label="Passengers">
          {vehicle.passengers}
        </Descriptions.Item>
        <Descriptions.Item label="Max. Atmospering speed">
          {vehicle.max_atmosphering_speed}
        </Descriptions.Item>
        <Descriptions.Item label="Cargo capacity">
          {vehicle.cargo_capacity === "unknown" ? (
            vehicle.cargo_capacity
          ) : (
            <NumberFormat
              value={vehicle.cargo_capacity}
              displayType="text"
              thousandSeparator={true}
              suffix="Kg"
            />
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Consumables">
          {vehicle.consumables}
        </Descriptions.Item>

        <Descriptions.Item label="Pilots" span={1}>
          {vehicle.pilots.map((item) => {
            const id = item.match(/(\d+)/gm)[0];
            return <PeopleItemDetails id={id} key={`people_${id}`} />;
          })}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
export default VehicleDetails;
