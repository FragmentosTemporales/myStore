
const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      cart: [
        {
          nombre: "v6 Pro",
          precio: 40000
        },
        {
          nombre: "v6 Pro Kit",
          precio: 76000
        },
        {
          nombre: "v7",
          precio: 50000
        }
      ]
    },
    actions: {},
  };
};

export default getState;