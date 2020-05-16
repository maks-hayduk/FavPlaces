export const parseGetAllPlacesResponse = (arr: any[]) => {
  const hashMap: { [key: number]: any } = {};

  const deleteUnusedProps = (id: number) => {
    delete hashMap[id].label;
    delete hashMap[id].tagid;
  };

  arr.forEach(place => {
    const tag = { 
      id: place.tagid, 
      label: place.label,
      value: place.label
    };

    if (hashMap[place.id] && place.tagid) {
      hashMap[place.id].tags = [...hashMap[place.id].tags, tag];
      return;
    }

    if (place.tagid) {
      hashMap[place.id] = place;
      hashMap[place.id].tags = [tag];
      deleteUnusedProps(place.id);

      return;
    }

    hashMap[place.id] = place;
    hashMap[place.id].tags = null;
    deleteUnusedProps(place.id);
  });

  return Object.values(hashMap);
};
