var config = {
  general: {
    selector: '#pluginWhatsApp', // name div
  },
  msg: {
    headerMsg: 'Pregúntanos lo que necesites', // header msg
    chatboxMsg: 'El equipo responderá en pocos minutos', // subheader msg
    colorMsg: '#25D366', // color chatbox
  },
  // Data contact users chatbox
  support1: {
    name: 'At. Cliente',
    phone: '6XXXXXXXXX',
    depart: 'Depart',
    image: 'assets/plugins/whatsApp/img/profile/profile-pic1.png',
    active: true,
  },
  support2: {
    name: 'At. Cliente 2',
    phone: '6XXXXXXXXX',
    depart: 'Depart 2',
    image: 'assets/plugins/whatsApp/img/profile/profile-pic2.png',
    active: false,
  },
};

// Users for whatsapp contact
var usersWhats = [
  {name: config.support1.name,phone: config.support1.phone,depart: config.support1.depart,image: config.support1.image,active: config.support1.active},
  {name: config.support2.name,phone: config.support2.phone,depart: config.support2.depart,image: config.support2.image,active: config.support2.active}
];