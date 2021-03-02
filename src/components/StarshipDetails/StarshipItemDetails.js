import { useState } from "react";
import { useFetch } from "../../start-wars";
import { Skeleton, Badge } from "antd";
import { A } from "hookrouter";

const StarshipItemDetails = ({ id }) => {
  const [pagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/starships/${id}`, pagination);

  const starship = data.data;

  return (
    <>
      <Skeleton loading={data.isFetching} active>
        <A href={`/starships/${id}`}>
          <Badge status="default" size="small" text={`${starship.name}`} />
        </A>
        <br />
      </Skeleton>
    </>
  );
};

export default StarshipItemDetails;
