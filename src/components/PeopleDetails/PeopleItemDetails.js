import { useState } from "react";
import { useFetch } from "../../start-wars";
import { Skeleton, Badge } from "antd";
import { A } from "hookrouter";

const PeopleItemDetails = ({ id }) => {
  const [pagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/people/${id}`, pagination);

  const character = data.data;

  return (
    <>
      <Skeleton loading={data.isFetching} active>
        <A href={`/people/${id}`}>
          <Badge status="default" size="small" text={`${character.name}`} />
        </A>
        <br />
      </Skeleton>
    </>
  );
};

export default PeopleItemDetails;
