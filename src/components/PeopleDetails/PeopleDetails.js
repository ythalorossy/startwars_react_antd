import React, { useState } from "react";
import { Spin, Alert, PageHeader, Descriptions } from "antd";

import { useFetch } from "../../start-wars";

import "./PeopleDetails.less";
import SpecieItemDetails from "../SpecieDetails/SpecieItemDetails";
import StarshipItemDetails from "../StarshipDetails/StarshipItemDetails";
import PlanetItemDetails from "../PlanetDetails/PlanetItemDetails";

const PeopleDetails = ({ id }) => {
  const [pagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/people/${id}`, pagination);

  if (data.isFetching) return <Spin />;
  if (data.error) return <Alert message={data.error} type="error" />;

  const people = data.data;

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={`${people.name}`}
        subTitle={`Details about the Character`}
        onBack={() => window.history.back()}
      />
      <Descriptions layout="vertical" column={4} bordered>
        <Descriptions.Item label="Birth Year">
          {people.birth_year}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">{people.gender}</Descriptions.Item>
        <Descriptions.Item label="Mass">
          {`${people.mass} Kg`}
        </Descriptions.Item>
        <Descriptions.Item label="Height">
          {`${people.height} cm`}
        </Descriptions.Item>
        <Descriptions.Item label="Hair Color">
          {people.hair_color}
        </Descriptions.Item>
        <Descriptions.Item label="Eye Color">
          {people.eye_color}
        </Descriptions.Item>
        <Descriptions.Item label="Skin Color">
          {people.skin_color}
        </Descriptions.Item>

        <Descriptions.Item label="Home World">
          {people.homeworld.split(/\s/).map((planet) => {
            const id = planet.match(/(\d+)/gm)[0];
            return <PlanetItemDetails id={id} key={`planet_${id}`} />;
          })}
        </Descriptions.Item>

        <Descriptions.Item label="Species">
          {people.species.map((item) => {
            const id = item.match(/(\d+)/gm)[0];
            return <SpecieItemDetails id={id} key={`species_${id}`} />;
          })}
        </Descriptions.Item>

        <Descriptions.Item
          label="Starships"
          span={1}
          style={{ verticalAlign: "text-top" }}
        >
          {people.starships.map((startship) => {
            const id = startship.match(/(\d+)/gm)[0];
            return <StarshipItemDetails id={id} key={`starship_${id}`} />;
          })}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default PeopleDetails;
