const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      products: [
        {
          id: 1,
          name: "V6 Pro",
          brand: "EJEAS",
          price: "36.000",
          description: "Intercomunicador v6 Pro, paquete unitario. ",
          first:
            "https://i.postimg.cc/tC8wbwL7/1000009769-a1c5c7217e005d00174c1f2961d4c9ba-20-2-2023-23-23-37.jpg",
          second:
            "https://i.postimg.cc/tJTwRjqn/1000009770-a1c0668f628ef4db481f5f5780e61bb8-20-2-2023-23-26-20.jpg",
          third:
            "https://i.postimg.cc/ZnMgCMn7/1000009771-dd350e81fdc331ac24bcf4488779ca5a-20-2-2023-23-25-37.jpg",
          url: "",
          category: "Intercomunicador",
        },
        {
          id: 2,
          name: "V6 Pro Kit",
          brand: "EJEAS",
          price: "72.000",
          description:
            "Kit de intercomunicadores v6 Pro, paquete con dos unidades ",
          first:
            "https://i.postimg.cc/yNHGg96H/1000009732-d4abbc2549567c4aad980ce40e98aabb-20-2-2023-22-54-34.jpg",
          second:
            "https://i.postimg.cc/vBGCjnCz/1000009734-0e20eeeb55dce131298e721ecb7e99dd-20-2-2023-22-54-34.jpg",
          third:
            "https://i.postimg.cc/FHcqHG4p/1000009735-21d1bab667ce98368da4c321628af360-20-2-2023-22-54-34.jpg",
          url: "",
          category: "Intercomunicador",
        },
        {
          id: 3,
          name: "V7",
          brand: "EJEAS",
          price: "45.000",
          description: "Intercomunicador v7, paquete unitario. ",
          first:
            "https://i.postimg.cc/T3r76wVH/1000015166-81f307f0f7a005cdbdef71ee8d15a699-19-4-2023-13-53-46.jpg",
          second:
            "https://i.postimg.cc/pdCsm61f/1000015167-c21c538c191f67da2f8e4a63f6b73a6a-19-4-2023-13-53-54.jpg",
          third:
            "https://i.postimg.cc/jqFk6Bqv/1000015168-d5bf2938d0dfc0e411a0ef9bc7426db7-19-4-2023-13-54-01.jpg",
          url: "",
          category: "Intercomunicador",
        },
        {
          id: 4,
          name: "R1 Plus",
          brand: "FREEDCONN",
          price: "120.000",
          description: "Intercomunicador R1 Plus, paquete unitario. ",
          first:
            "https://i.postimg.cc/2670G1Nd/1000011618-25fdc26370302be7fa39b6d099404e91-9-3-2023-17-37-10.jpg",
          second:
            "https://i.postimg.cc/vT83NGGJ/1000011617-ca13d3c9cd1371c7512a1d8844e9e3a1-9-3-2023-17-36-34.jpg",
          third:
            "https://i.postimg.cc/SshZcW3N/1000011619-f5f25098798e6924a625d91c124fd65e-9-3-2023-17-37-34.jpg",
          url: "",
          category: "Intercomunicador",
        },
        {
          name: "Cargador",
          price: "7.000",
          brand: "EJEAS",
          id: 5,
          description: "Repuestos v6 Pro.",
          first:
            "https://i.postimg.cc/zBf0KF99/1000011622-68eede6c5fbf8e626f3961647cfd0649-9-3-2023-17-40-39.jpg",
          second:
            "https://i.postimg.cc/zBf0KF99/1000011622-68eede6c5fbf8e626f3961647cfd0649-9-3-2023-17-40-39.jpg",
          third:
            "https://i.postimg.cc/zBf0KF99/1000011622-68eede6c5fbf8e626f3961647cfd0649-9-3-2023-17-40-39.jpg",
          url: "",
          category: "Repuesto",
        },
        {
          name: "Auricular",
          price: "12.000",
          brand: "EJEAS",
          id: 6,
          description: "Auricular de repuesto para v6 Pro.",
          first:
            "https://i.postimg.cc/j2L304cz/1000011620-1102fedec24086004b33a227df3d57e2-9-3-2023-17-38-16.jpg",
          second:
            "https://i.postimg.cc/j2L304cz/1000011620-1102fedec24086004b33a227df3d57e2-9-3-2023-17-38-16.jpg",
          third:
            "https://i.postimg.cc/j2L304cz/1000011620-1102fedec24086004b33a227df3d57e2-9-3-2023-17-38-16.jpg",
          url: "",
          category: "Repuesto",
        },
        {
          name: "Soporte",
          price: "7.000",
          brand: "EJEAS",
          id: 7,
          description: "Soporte de repuesto de v6 Pro.",
          first:
            "https://i.postimg.cc/25rH8DTj/1000011621-52c2fa48548ad3d69305836e846671f7-9-3-2023-17-40-17.jpg",
          second:
            "https://i.postimg.cc/25rH8DTj/1000011621-52c2fa48548ad3d69305836e846671f7-9-3-2023-17-40-17.jpg",
          third:
            "https://i.postimg.cc/25rH8DTj/1000011621-52c2fa48548ad3d69305836e846671f7-9-3-2023-17-40-17.jpg",
          url: "",
          category: "Repuesto",
        },
        {
          name: "Guante Corto Negro",
          price: "32.000",
          brand: "FURYGAN",
          id: 8,
          description:
            "Guante corto de cuero y fibra de carbono. Disponible en blanco y negro.",
          first:
            "https://i.postimg.cc/CLVMMgmt/Whats-App-Image-2023-06-13-at-03-27-19.jpg",
          second:
            "https://i.postimg.cc/CLVMMgmt/Whats-App-Image-2023-06-13-at-03-27-19.jpg",
          third:
            "https://i.postimg.cc/CLVMMgmt/Whats-App-Image-2023-06-13-at-03-27-19.jpg",
          url: "",
          category: "Vestimenta",
        },
        {
          name: "Guante Largo Negro",
          price: "42.000",
          brand: "FURYGAN",
          id: 9,
          description:
            "Guante largo de cuero y fibra de carbono. Disponible en M y L.",
          first:
            "https://i.postimg.cc/J7X4WncZ/Whats-App-Image-2023-06-13-at-03-27-19-1.jpg",
          second:
            "https://i.postimg.cc/J7X4WncZ/Whats-App-Image-2023-06-13-at-03-27-19-1.jpg",
          third:
            "https://i.postimg.cc/J7X4WncZ/Whats-App-Image-2023-06-13-at-03-27-19-1.jpg",
          url: "",
          category: "Vestimenta",
        },
        {
          name: "MUSLERA",
          price: "16.000",
          brand: "GENERICO",
          id: 10,
          description: "Muslera impermeable de Nylon, resistente a la lluvia.",
          first:
            "https://i.postimg.cc/7YMHfWRL/Whats-App-Image-2023-06-13-at-03-27-20.jpg",
          second:
            "https://i.postimg.cc/7YMHfWRL/Whats-App-Image-2023-06-13-at-03-27-20.jpg",
          third:
            "https://i.postimg.cc/7YMHfWRL/Whats-App-Image-2023-06-13-at-03-27-20.jpg",
          url: "",
          category: "Vestimenta",
        },
        {
          name: "Soporte Celular",
          price: "26.000",
          brand: "MOTOWOLF",
          id: 11,
          description: "Soporte de aluminio para celular de alta resistencia.",
          first:
            "https://i.postimg.cc/gJCzZFdx/Whats-App-Image-2023-06-13-at-03-27-20-1.jpg",
          second:
            "https://i.postimg.cc/gJCzZFdx/Whats-App-Image-2023-06-13-at-03-27-20-1.jpg",
          third:
            "https://i.postimg.cc/gJCzZFdx/Whats-App-Image-2023-06-13-at-03-27-20-1.jpg",
          url: "",
          category: "Accesorio",
        },
        {
          id: 12,
          name: "Guante Corto Blanco",
          brand: "FURYGAN",
          price: "32.000",
          description: "Guante corto de cuero y fibra de carbono. Disponible en M y L.",
          first:
            "https://i.postimg.cc/Xv8DSfJx/20230619000915-IMG-8659-01.jpg",
          second:
            "https://i.postimg.cc/Mp1Ft2JC/20230619000934-IMG-8660-01.jpg",
          third:
            "https://i.postimg.cc/Mp1Ft2JC/20230619000934-IMG-8660-01.jpg",
          url: "",
          category: "Vestimenta",
        },
        {
          id: 15,
          name: "Guante Largo Blanco",
          brand: "FURYGAN",
          price: "42.000",
          description: "Guante largo de cuero y fibra de carbono. Disponible en M y L.",
          first:
            "https://i.postimg.cc/tgymMSXY/20230619000752-IMG-8656-01.jpg",
          second:
            "https://i.postimg.cc/CLBtBnPL/20230619000818-IMG-8657-01.jpg",
          third:
            "https://i.postimg.cc/CLBtBnPL/20230619000818-IMG-8657-01.jpg",
          url: "",
          category: "Vestimenta",
        },
        {
          id: 13,
          name: "Rollidera Racing",
          brand: "KOMINE",
          price: "42.000",
          description: "Rodillera con protección en dos puntos, Plástico y PVC.",
          first:
            "https://i.postimg.cc/d1VNqhZF/20230619001107-IMG-8662-01.jpg",
          second:
            "https://i.postimg.cc/hPZ2rDYZ/Whats-App-Image-2023-06-18-at-23-30-48-Peque-a.jpg",
          third:
            "https://i.postimg.cc/htJp3FWD/Whats-App-Image-2023-06-18-at-23-30-49-Peque-a.jpg",
          url: "",
          category: "Vestimenta",
        },
        {
          id: 14,
          name: "Llavero PLAY",
          brand: "TOP ONE",
          price: "2.700",
          description: "Llavero astronauta, variedad de colores.",
          first:
            "https://i.postimg.cc/7Yw9DCFW/20230619000606-IMG-8654-01.jpg",
          second:
            "https://i.postimg.cc/sxFn5w0j/20230619000528-IMG-8653-01.jpg",
          third:
            "https://i.postimg.cc/yYMGF6th/20230619000343-IMG-8649-01.jpg",
          url: "",
          category: "Accesorio",
        },
      ]
    },
    actions: {
      
    },
  };
};

export default getState;
