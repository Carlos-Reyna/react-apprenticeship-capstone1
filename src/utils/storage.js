const storage = {
  get(key) {
    try {
      const rawValue = window.localStorage.getItem(key);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key, value) {
    const items = this.get(key);
    let newArray = [];
    if (items !== null) {
      newArray = [...items, value];
      window.localStorage.setItem(key, JSON.stringify(newArray));
    } else {
      window.localStorage.setItem(key, JSON.stringify([value]));
    }
  },
  find(key, videoId) {
    console.log(key);
    const items = this.get(key);
    if (items !== null) {
      const favorite = items.find((video) => video.id.videoId === videoId);
      if (favorite === undefined) {
        return null;
      }
      return favorite;
    } else {
      return null;
    }
  },
  remove(key, videoId) {
    const items = this.get(key);
    if (items != null) {
      const filtered = items.filter((video) => video.id.videoId !== videoId);
      window.localStorage.setItem(key, JSON.stringify(filtered));
    }
  },
};

export { storage };
