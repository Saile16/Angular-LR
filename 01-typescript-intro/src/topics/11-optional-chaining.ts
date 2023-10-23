export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Alexander",
};

const passenger2: Passenger = {
  name: "Fernando",
  children: ["Natalia", "Elizabeth"],
};

const returnChildrenNumber = (passenger: Passenger): number => {
  const howManyChildren = passenger.children?.length || 0;
  //   const howManyChildren = passenger.children!.length; //el ! es para decir que estas seguro que siempre vendra ese valor

  console.log(passenger.name, howManyChildren);
  return howManyChildren;
};

returnChildrenNumber(passenger1);
