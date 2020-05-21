export const parseGetAllPlacesResponse = (arr: any[]) => {
  const hashMap: { [key: number]: any } = {};

  const deleteUnusedProps = (id: number) => {
    delete hashMap[id].label;
    delete hashMap[id].tagid;
  };

  const deleteImgUnusedProps = (id: number) => {
    delete hashMap[id].imageid;
    delete hashMap[id].name;
    delete hashMap[id].type;
    delete hashMap[id].size;
    delete hashMap[id].base64;
  };

  arr.forEach(place => {
    const tag = { 
      id: place.tagid, 
      label: place.label,
      value: place.label
    };

    const imageInfo = {
      id: place.imageid,
      name: place.name,
      type: place.type,
      size: place.size,
      base64: place.base64
    };

    if (hashMap[place.id] && place.imageid) {
      if (!hashMap[place.id].images.find((image: any) => image.id === imageInfo.id)) {
        hashMap[place.id].images = [...hashMap[place.id].images, imageInfo];
      }
    }

    if (hashMap[place.id] && place.tagid) {
      if (!hashMap[place.id].tags.find((tagMap: any) => tagMap.id === tag.id)) {
        hashMap[place.id].tags = [...hashMap[place.id].tags, tag];
      }
      return;
    }

    if (place.imageid) {
      hashMap[place.id] = place;
      hashMap[place.id].images = [imageInfo];
      deleteImgUnusedProps(place.id);
    }

    if (place.tagid) {
      hashMap[place.id] = place;
      hashMap[place.id].tags = [tag];
      deleteUnusedProps(place.id);
      deleteImgUnusedProps(place.id);

      return;
    }

    hashMap[place.id] = place;
    hashMap[place.id].tags = null;
    deleteUnusedProps(place.id);
    deleteImgUnusedProps(place.id);
  });

  return Object.values(hashMap);
};
