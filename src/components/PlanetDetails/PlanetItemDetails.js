import { useState } from "react";
import { useFetch } from "../../start-wars";
import { Skeleton, Badge } from "antd";
import { A } from "hookrouter";

const PlanetItemDetails = ({ id }) => {
  const [pagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/planets/${id}`, pagination);

  const planet = data.data;

  return (
    <>
      <Skeleton loading={data.isFetching} active>
        <A href={`/planets/${id}`}>
          <Badge status="default" size="small" text={`${planet.name}`} />
        </A>
        <br />
      </Skeleton>
    </>
  );
};

export default PlanetItemDetails;
