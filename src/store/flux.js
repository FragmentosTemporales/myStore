
const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      productos: [
        {
          id: 1,
          nombre: "V6 Pro",
          marca: "EJEAS",
          precio: "42.000",
          descripcion: "Intercomunicador v6 Pro, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329728077_5898131300299484_497858422900834979_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEfMB0Ghj8dHDgd14DL2djrtmVt-5652f-2ZW37nrnZ_6pl9kCycBlpmqb2_U1WtS1LVvtQttJC1jzHgcZhnfEs&_nc_ohc=nKJWA16V3l8AX8Qb1uF&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA9n1pZazQ536l8IiTe414c9m7o8M1QM2t3p9FZcprjhA&oe=6465AF45",
          alcance: "1200 mts",
          bateria: "850mh",
          cámara: "no",
          intercom: "si",
          flowurl: "https://www.flow.cl/btn.php?token=aemnde2",
          path: "/product"
        },
        {
          id: 2,
          nombre: "V6 Pro Kit",
          marca: "EJEAS",
          precio: "80.000",
          descripcion: "Kit de intercomunicadores v6 Pro, paquete con dos unidades ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329212775_5902133703205841_5193839040139355012_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEGT6_tmiCvtvmg-s8DmM1g1ZQWu9abjnrVlBa71puOep9D6S42-XOxz_yPud9EhVoNgn_IrPXn-1RloV5AcPI-&_nc_ohc=GHYwhrnBvCcAX93Lh-s&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA-UIBmrRlSV1FfYXsGkkTZCkkpmbKlW6O5fqgZCyA3fA&oe=646671F3",
          alcance: "1200 mts",
          bateria: "850mh",
          cámara: "no",
          intercom: "si",
          flowurl: "https://www.flow.cl/btn.php?token=2njsahq",
          path: "/product2"
        },
        {
          id: 3,
          nombre: "V7",
          marca: "EJEAS",
          precio: "50.000",
          descripcion: "Intercomunicador v7, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/341545530_6080935218650485_3929791252879881754_n.jpg?stp=dst-jpg_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGAw34cz9O72RB59RRdLmIH1nHxDvb2CejWcfEO9vYJ6PGQu7bvB6zX-w62W1FzNH7FI9oYq1WeZHNel_O_7ES-&_nc_ohc=raBxKeZoFTgAX-dGqBu&_nc_ht=scontent.fscl14-1.fna&oh=00_AfDqpMtT1Inkch1aiLAPYuboRWEAPUjPZcMQVy2VWSTvBw&oe=64658EC9",
          bateria: "750mh",
          cámara: "no",
          intercom: "si",
          flowurl: "https://www.flow.cl/btn.php?token=ayi93no",
          path: "/product3"
        },
        {
          id: 4,
          nombre: "R1 PLUS",
          marca: "FREEDCONN",
          precio: "120.000",
          descripcion: "Intercomunicador R1 Plus, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/332872833_6066070313470002_912978183887780328_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGPBD6ZX8Civr6UeDWiJJJiaE_E3bmFFXFoT8TduYUVcSW4UYxTotLTjE3EvVrPcod-opTQKwGGUHSItzsb5PTv&_nc_ohc=jRvC-nUu5tIAX8aX2VQ&_nc_ht=scontent.fscl14-1.fna&oh=00_AfB1OKS5OQm99Tq3oDXmkIKCE0uHm22pnn9_YdJxIkel7A&oe=6464A07D",
          alcance: "1000 mts",
          bateria: "1500mh",
          cámara: "Si",
          intercom: "Si",
          flowurl: "https://www.flow.cl/btn.php?token=exri4ni",
          path: "/product4"
        },
        {
          nombre: "CARGADOR",
          precio: "7.000",
          marca: "EJEAS",
          id: 5,
          descripcion: "Repuestos v6 Pro.",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/334028063_6074357139252670_1001953765484179976_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeH25EXN0IgjI4B4-ssERgahNG3kyWRoqiU0beTJZGiqJfhB8YfzZnEeD095UpP0Ntya7_DNqe2bIjZBc51DxRWV&_nc_ohc=Wet53ob3RiwAX8pOUpC&_nc_ht=scontent.fscl14-1.fna&oh=00_AfCvLKFiNkDkkNefGcvTXtedUaIjM8vMZXPv7Jw7fYhIkg&oe=6464AAAC",
          flowurl: "https://www.flow.cl/btn.php?token=y6mdzdm",
          path: "/product5"
        },
        {
          nombre: "AURICULAR",
          precio: "12.000",
          marca: "EJEAS",
          id: 6,
          descripcion: "Repuestos v6 Pro.",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333757060_5922222451230842_2315164112348441410_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEVDPox0Ph-Kcw3njXN10hgzWguFZYECQnNaC4VlgQJCaN1T3zhIeFZTvR5L1Mf3Jyom18c5-Tx3NO-rRNvhPMA&_nc_ohc=Bfk-q5pM3WIAX9srylB&_nc_ht=scontent.fscl14-1.fna&oh=00_AfBONWYJAGigXr_BFlqNtMtbzKKBf4JzPLiqgzdYkSkhnw&oe=64644B67",
          flowurl: "https://www.flow.cl/btn.php?token=uoupxfx",
          path: "/product6"
        },
        {
          nombre: "PINZA",
          precio: "7.000",
          marca: "EJEAS",
          id: 7,
          descripcion: "Repuestos v6 Pro.",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333734850_6141141112610358_7165301101975818749_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeHVQ_NR0UGU4SF5f042elQcN4TPqKl2rEg3hM-oqXasSCRrud18Fz2lGoSxpMf4FQzXFaXWn7I9GkIHqoLOKVjQ&_nc_ohc=9I2MxANrcEAAX8V4cMY&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA3OhYaU8nV67LSLf0iXd7ZeGGI2s_0G2ZNO641IZp-wA&oe=64658489",
          flowurl: "https://www.flow.cl/btn.php?token=crpzrdu",
          path: "/product7"
        }
      ],
    },
    actions: {
      addCart: (product) => {
        const { cart } = getStore();
      
        if (!cart.some(item => item.id === product.id)) {
          const newCart = [...cart, product];
          setStore({
            cart: newCart
          });
          console.log(newCart);
        }
      },
      removeFromCart: (product) => {
        const { cart } = getStore();
      
        const updatedCart = cart.filter(item => item.id !== product.id);
        setStore({
          cart: updatedCart
        });
        console.log(updatedCart);
      },
      clearCart: (e) => {
        const {cart} = getStore();
        const newCart = []
        setStore({
          cart: newCart
        })
        console.log(cart)
      }
    },
  };
};

export default getState;