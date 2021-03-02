import React, { useState } from "react";
import { PageHeader, Descriptions, Spin, Alert } from "antd";
import { parse, format } from 'date-fns'

import { useFetch } from "../../start-wars";
import PeopleItemDetails from "../PeopleDetails/PeopleItemDetails";
import SpecieItemDetails from "../SpecieDetails/SpecieItemDetails";
import PlanetItemDetails from "../PlanetDetails/PlanetItemDetails";

import "./FilmDetails.less";
import StarshipItemDetails from "../StarshipDetails/StarshipItemDetails";

const FilmDetails = ({ id }) => {
  const [pagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/films/${id}`, pagination);

  if (data.isFetching) return <Spin />;
  if (data.error) return <Alert message="Error Text" type="error" />;
  return (
    <>
      <PageHeader
        className="site-page-header"
        title={`${data.data.title}`}
        subTitle={`Details about the film`}
        onBack={() => window.history.back()}
      />
      <Descriptions layout="vertical" column={4} bordered>
        <Descriptions.Item label="Episode">
          {data.data.episode_id}
        </Descriptions.Item>
        <Descriptions.Item label="Director">
          {data.data.director}
        </Descriptions.Item>
        <Descriptions.Item label="Producer">
          {data.data.producer}
        </Descriptions.Item>
        <Descriptions.Item label="Release Date">
          { format(parse(data.data.release_date, 'yyyy-MM-dd', new Date()), "MMM dd, yyyy") }
        </Descriptions.Item>
        <Descriptions.Item label="Opening Crawl" span="4">
          {data.data.opening_crawl}
        </Descriptions.Item>

        <Descriptions.Item label="Characters" span={1}>
          <>
          {data.data.characters.map((item) => {
            const id = item.match(/(\d+)/gm)[0];
            return <PeopleItemDetails id={id} key={`character_${id}`}/>;
          })}
          </>
        </Descriptions.Item>

        <Descriptions.Item
          label="Species"
          span={1}
          style={{ verticalAlign: "text-top" }}
        >
          {data.data.species.map((item) => {
            const id = item.match(/(\d+)/gm)[0];
            return <SpecieItemDetails id={id} key={`specie_${id}`}/>;
          })}
        </Descriptions.Item>

        <Descriptions.Item
          label="Planets"
          span={1}
          style={{ verticalAlign: "text-top" }}
        >
          {data.data.planets.map((planet) => {
            const id = planet.match(/(\d+)/gm)[0];
            return <PlanetItemDetails id={id} key={`planet_${id}`} />;
          })}
        </Descriptions.Item>

        <Descriptions.Item
          label="Starships"
          span={1}
          style={{ verticalAlign: "text-top" }}
        >
          {data.data.starships.map((startship) => {
            const id = startship.match(/(\d+)/gm)[0];
            return <StarshipItemDetails id={id} key={`starship_${id}`} />;
          })}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default FilmDetails;
