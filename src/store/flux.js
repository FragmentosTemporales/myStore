
const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      intercomunicadores: [
        {
          nombre: "EJEAS v6 Pro",
          precio: "50.000",
          id: 1,
          descripcion: "Intercomunicador v6 Pro, paquete unitario, ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329398052_9744171245608822_2643052707542626726_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeHpeXrvlI-ugijoiIkceSP_Wd5CKrXdUxNZ3kIqtd1TE0KMQoJ6CsNAqbZZau97eEMNiBB62e8keB2oBC7JHWwx&_nc_ohc=LMzjLd79WRQAX8g8DbZ&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA9leJ57Xe7yWKDzXKre2CHbO7Dm-oQULUfvdiR7_MPCQ&oe=6465EA07"
        },
        {
          nombre: "EJEAS v6 Pro Kit",
          precio: "90.000",
          id: 2,
          descripcion: "Kit de intercomunicadores v6 Pro, paquete con dos unidades ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329674670_5145406055562389_6500725580204664977_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGt79nkDaQQrNVdgZpTyN8uTDDFldyVMZZMMMWV3JUxlvpATTJKN8vS_EnFG8K-VkXboY3NprV0iVHhbY9M8mY2&_nc_ohc=7euF8fQ7u-wAX_-ccN0&_nc_ht=scontent.fscl14-1.fna&oh=00_AfDCptABaqrcwY77RTHBIPfgoEXHLQ_Gv9REkfUmioSZgg&oe=64649737"
        },
        {
          nombre: "EJEAS v7",
          precio: "60.000",
          id: 3,
          descripcion: "Intercomunicador v7, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/341545530_6080935218650485_3929791252879881754_n.jpg?stp=dst-jpg_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGAw34cz9O72RB59RRdLmIH1nHxDvb2CejWcfEO9vYJ6PGQu7bvB6zX-w62W1FzNH7FI9oYq1WeZHNel_O_7ES-&_nc_ohc=raBxKeZoFTgAX-dGqBu&_nc_ht=scontent.fscl14-1.fna&oh=00_AfDqpMtT1Inkch1aiLAPYuboRWEAPUjPZcMQVy2VWSTvBw&oe=64658EC9"
        },
        {
          nombre: "FREEDCONN R1 PLUS",
          precio: "120.000",
          id: 4,
          descripcion: "Intercomunicador R1 Plus, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/332872833_6066070313470002_912978183887780328_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGPBD6ZX8Civr6UeDWiJJJiaE_E3bmFFXFoT8TduYUVcSW4UYxTotLTjE3EvVrPcod-opTQKwGGUHSItzsb5PTv&_nc_ohc=jRvC-nUu5tIAX8aX2VQ&_nc_ht=scontent.fscl14-1.fna&oh=00_AfB1OKS5OQm99Tq3oDXmkIKCE0uHm22pnn9_YdJxIkel7A&oe=6464A07D"
        },
      ],
      repuestos: [
        {
          nombre: "CARGADOR V6 PRO",
          precio: "10.000",
          id: 5,
          descripcion: "Repuestos v6 Pro, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/334028063_6074357139252670_1001953765484179976_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeH25EXN0IgjI4B4-ssERgahNG3kyWRoqiU0beTJZGiqJfhB8YfzZnEeD095UpP0Ntya7_DNqe2bIjZBc51DxRWV&_nc_ohc=Wet53ob3RiwAX8pOUpC&_nc_ht=scontent.fscl14-1.fna&oh=00_AfCvLKFiNkDkkNefGcvTXtedUaIjM8vMZXPv7Jw7fYhIkg&oe=6464AAAC"
        },
        {
          nombre: "AURICULAR V6 PRO",
          precio: "15.000",
          id: 5,
          descripcion: "Repuestos v6 Pro, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333757060_5922222451230842_2315164112348441410_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEVDPox0Ph-Kcw3njXN10hgzWguFZYECQnNaC4VlgQJCaN1T3zhIeFZTvR5L1Mf3Jyom18c5-Tx3NO-rRNvhPMA&_nc_ohc=Bfk-q5pM3WIAX9srylB&_nc_ht=scontent.fscl14-1.fna&oh=00_AfBONWYJAGigXr_BFlqNtMtbzKKBf4JzPLiqgzdYkSkhnw&oe=64644B67"
        },
        {
          nombre: "PINZA V6 PRO",
          precio: "7.000",
          id: 5,
          descripcion: "Repuestos v6 Pro, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333734850_6141141112610358_7165301101975818749_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeHVQ_NR0UGU4SF5f042elQcN4TPqKl2rEg3hM-oqXasSCRrud18Fz2lGoSxpMf4FQzXFaXWn7I9GkIHqoLOKVjQ&_nc_ohc=9I2MxANrcEAAX8V4cMY&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA3OhYaU8nV67LSLf0iXd7ZeGGI2s_0G2ZNO641IZp-wA&oe=64658489"
        }
      ],
      cascos: [],
      cart: [],
      guantes: [],
      chaquetas:[]
    },
    actions: {},
  };
};

export default getState;