
const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      intercomunicadores: [
        {
          nombre: "EJEAS v6 Pro",
          precio: "50.000",
          id: 1,
          descripcion: "Intercomunicador v6 Pro, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329728077_5898131300299484_497858422900834979_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEfMB0Ghj8dHDgd14DL2djrtmVt-5652f-2ZW37nrnZ_6pl9kCycBlpmqb2_U1WtS1LVvtQttJC1jzHgcZhnfEs&_nc_ohc=nKJWA16V3l8AX8Qb1uF&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA9n1pZazQ536l8IiTe414c9m7o8M1QM2t3p9FZcprjhA&oe=6465AF45",
          url2: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329398052_9744171245608822_2643052707542626726_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeHpeXrvlI-ugijoiIkceSP_Wd5CKrXdUxNZ3kIqtd1TE0KMQoJ6CsNAqbZZau97eEMNiBB62e8keB2oBC7JHWwx&_nc_ohc=LMzjLd79WRQAX8g8DbZ&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA9leJ57Xe7yWKDzXKre2CHbO7Dm-oQULUfvdiR7_MPCQ&oe=6465EA07",
          url3: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329231974_6195951457116246_3049513051746012957_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeHZOU19yaOcb-SqFxXpwShm0trnKH-wI-jS2ucof7Aj6MrN433inleHvq7ANdSLWk0DqS-Soc0puKEPDfBhacc5&_nc_ohc=X-HPjm7MCNwAX_ql8tz&_nc_ht=scontent.fscl14-1.fna&oh=00_AfC2I11DV5MZ-vEg3sl8C2wRMGz4mCWXX6YbInjVGKk55g&oe=646585E1",
          alcance: "1200 mts",
          bateria: "850mh",
          cámara: "no",
          intercom: "si"
        },
        {
          nombre: "EJEAS v6 Pro Kit",
          precio: "90.000",
          id: 2,
          descripcion: "Kit de intercomunicadores v6 Pro, paquete con dos unidades ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329212775_5902133703205841_5193839040139355012_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEGT6_tmiCvtvmg-s8DmM1g1ZQWu9abjnrVlBa71puOep9D6S42-XOxz_yPud9EhVoNgn_IrPXn-1RloV5AcPI-&_nc_ohc=GHYwhrnBvCcAX93Lh-s&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA-UIBmrRlSV1FfYXsGkkTZCkkpmbKlW6O5fqgZCyA3fA&oe=646671F3",
          url2: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329410550_5859531184128304_7472004959463933633_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGNsLgG2aqnUm99CN1-d6uBRSgcNr4Uf81FKBw2vhR_zQM85fSjGuDYZRG-KsM04kZKYmExTpDV9HP5vwBaaSKt&_nc_ohc=w-1zn5_WZrYAX8FH4Uo&_nc_ht=scontent.fscl14-1.fna&oh=00_AfCQ1MvXQ24FIbtVuIZKN1jGosENOv8DCSd2BkQeXjklbQ&oe=64666BD2",
          url3: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/329674670_5145406055562389_6500725580204664977_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGt79nkDaQQrNVdgZpTyN8uTDDFldyVMZZMMMWV3JUxlvpATTJKN8vS_EnFG8K-VkXboY3NprV0iVHhbY9M8mY2&_nc_ohc=7euF8fQ7u-wAX_-ccN0&_nc_ht=scontent.fscl14-1.fna&oh=00_AfCIYiev86kPSZi2cGWcuIzi0vUaw86BeHOu_IrK4nn6GA&oe=64669177",
        },
        {
          nombre: "EJEAS v7",
          precio: "60.000",
          id: 3,
          descripcion: "Intercomunicador v7, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/341545530_6080935218650485_3929791252879881754_n.jpg?stp=dst-jpg_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGAw34cz9O72RB59RRdLmIH1nHxDvb2CejWcfEO9vYJ6PGQu7bvB6zX-w62W1FzNH7FI9oYq1WeZHNel_O_7ES-&_nc_ohc=raBxKeZoFTgAX-dGqBu&_nc_ht=scontent.fscl14-1.fna&oh=00_AfDqpMtT1Inkch1aiLAPYuboRWEAPUjPZcMQVy2VWSTvBw&oe=64658EC9",
          url2: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/340502102_5916823648439364_670102641550302299_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEEmpkIXdkcvyX0oOv6Wtxi2keO-S9NafraR475L01p-h_kQuULndWjRzWRnDK7tgBREzfQwWUF-LuDhtRhq2Fe&_nc_ohc=PPBEoY45NaAAX8cWbpA&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA6PkFy9Aun-0yG7dkYsEviYJ-paIGtBqSaMBC7_BgLCA&oe=6466BE3F",
          url3: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/341944766_6144985798913105_5494203014352520525_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFTY2lsY31A4s5nCRRHm9F1luEyZs904s2W4TJmz3TizVi17SSER4gAAEl6nhQ_1eru2GrCBWmncC-kCvotdH6G&_nc_ohc=YYyrPPrl9l4AX_Bm0tm&_nc_ht=scontent.fscl14-1.fna&oh=00_AfBaMoX58ieq6ck8rRxary7u_ytd_WDLFebZ2PtaxrAZbg&oe=6466D8B5",
        },
        {
          nombre: "FREEDCONN R1 PLUS",
          precio: "120.000",
          id: 4,
          descripcion: "Intercomunicador R1 Plus, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/332872833_6066070313470002_912978183887780328_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeGPBD6ZX8Civr6UeDWiJJJiaE_E3bmFFXFoT8TduYUVcSW4UYxTotLTjE3EvVrPcod-opTQKwGGUHSItzsb5PTv&_nc_ohc=jRvC-nUu5tIAX8aX2VQ&_nc_ht=scontent.fscl14-1.fna&oh=00_AfB1OKS5OQm99Tq3oDXmkIKCE0uHm22pnn9_YdJxIkel7A&oe=6464A07D",
          url2: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333918888_5917321388363931_5446062080632748778_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEb2lTZaDgUxKTw94SS4PZADUP3_bkFDxINQ_f9uQUPErJwLUoa3cjIEuSkBG_TIqBhOgZ4bV80NEv4_WILNDIh&_nc_ohc=beAcBmZ1MmEAX_5VJ9n&_nc_ht=scontent.fscl14-1.fna&oh=00_AfAkcy05xahNZLi7qwOxW0xuGmSXn9DlDcRMD4QV6kcuKg&oe=64668A4C",
          url3: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333802502_8976655512409163_5722556285993626055_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeH5XZPbKXLy-36DF85ZLDqtrL0GwCFTGTqsvQbAIVMZOgQpXXJVUaeJWmiGpehMrgpb8wJP0rPUSnmUhatzR1r8&_nc_ohc=ZvrKPbPdGuYAX8MHhGj&_nc_ht=scontent.fscl14-1.fna&oh=00_AfB_VpprLC5sHBSNxk9nCb85SwyKoUnRB9gmtlfJk556sw&oe=646679AB",
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
          id: 6,
          descripcion: "Repuestos v6 Pro, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333757060_5922222451230842_2315164112348441410_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEVDPox0Ph-Kcw3njXN10hgzWguFZYECQnNaC4VlgQJCaN1T3zhIeFZTvR5L1Mf3Jyom18c5-Tx3NO-rRNvhPMA&_nc_ohc=Bfk-q5pM3WIAX9srylB&_nc_ht=scontent.fscl14-1.fna&oh=00_AfBONWYJAGigXr_BFlqNtMtbzKKBf4JzPLiqgzdYkSkhnw&oe=64644B67"
        },
        {
          nombre: "PINZA V6 PRO",
          precio: "7.000",
          id: 7,
          descripcion: "Repuestos v6 Pro, paquete unitario. ",
          url: "https://scontent.fscl14-1.fna.fbcdn.net/v/t45.5328-4/333734850_6141141112610358_7165301101975818749_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeHVQ_NR0UGU4SF5f042elQcN4TPqKl2rEg3hM-oqXasSCRrud18Fz2lGoSxpMf4FQzXFaXWn7I9GkIHqoLOKVjQ&_nc_ohc=9I2MxANrcEAAX8V4cMY&_nc_ht=scontent.fscl14-1.fna&oh=00_AfA3OhYaU8nV67LSLf0iXd7ZeGGI2s_0G2ZNO641IZp-wA&oe=64658489"
        }
      ],
      cascos: [],
      cart: [],
      
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