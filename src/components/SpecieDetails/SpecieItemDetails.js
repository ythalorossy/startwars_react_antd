import { useState } from "react";
import { useFetch } from "../../start-wars";
import { Skeleton, Badge } from "antd";
import { A } from "hookrouter";

const SpecieItemDetails = ({ id }) => {
  const [pagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const data = useFetch(`/species/${id}`, pagination);

  const specie = data.data;

  return (
    <>
      <Skeleton loading={data.isFetching} active>
        <A href={`/species/${id}`}>
          <Badge status="default" size="small" text={`${specie.name}`} />
        </A>
        <br />
      </Skeleton>
    </>
  );
};

export default SpecieItemDetails;
