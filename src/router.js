import React from "react";

import Films from "./components/Films/Films.lazy";
import FilmDetails from "./components/FilmDetails/FilmDetails.lazy";
import People from "./components/People/People.lazy";
import PeopleDetails from "./components/PeopleDetails/PeopleDetails.lazy";
import Species from "./components/Species/Species.lazy";
import SpecieDetails from "./components/SpecieDetails/SpecieDetails.lazy";
import Planets from "./components/Planets/Planets.lazy";
import PlanetDetails from "./components/PlanetDetails/PlanetDetails.lazy";
import Starships from "./components/Starships/Starships";
import StartshipDetails from "./components/StarshipDetails/StarshipDetails.lazy";
import Vehicles from "./components/Vehicles/Vehicles";
import VehicleDetails from "./components/VehicleDetails/VehicleDetails";

const routes = {
  "/films": () => <Films />,
  "/films/:id": ({ id }) => <FilmDetails id={id} />,
  "/people": () => <People />,
  "/people/:id": ({ id }) => <PeopleDetails id={id} />,
  "/species": () => <Species />,
  "/species/:id": ({ id }) => <SpecieDetails id={id} />,
  "/planets": () => <Planets />,
  "/planets/:id": ({ id }) => <PlanetDetails id={id} />,
  "/starships": () => <Starships />,
  "/starships/:id": ({ id }) => <StartshipDetails id={id} />,
  "/vehicles": () => <Vehicles />,
  "/vehicles/:id": ({ id }) => <VehicleDetails id={id} />,
};

export default routes;
