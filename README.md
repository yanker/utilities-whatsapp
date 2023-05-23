# WhatsApp Floating Plugin

This project is a simple Floating Whatsapp chat whit JS

## Description

1. Multiple Whatsapp Number in chat box
2. Color control
3. Add User Profile image

## Getting Started

### Dependencies

- Bootstrap >= 4.4

## Integration

- Downloader repository
- Add link href css

```
   <!-- WhatsApp Plugin CSS -->
   <link rel="stylesheet" href="assets/plugins/whatsApp/css/whatsapp-chat-min.css" />
```

- Add reference before tag &lt;/html>

```
   <!-- Plugin WhatsApp -->
    <script type="text/javascript" src="assets/plugins/whatsApp/js/whatsapp-chat.js"></script>
    <script type="text/javascript" src="assets/plugins/whatsApp/config.js"></script>
    <script type="text/javascript">
        whatsappchat.configUser({
            selector: config.general.selector,
            users: usersWhats,
            headerMessage: config.msg.headerMsg,
            chatBoxMessage: config.msg.chatboxMsg,
            color: config.msg.colorMsg,
        });
    </script>
```

- Add div selector plugin

```
    <div id="pluginWhatsApp"></div>
```

## Configuration

- Edit file assets/plugins/whatsApp/config.js with your configuration

```
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
```

## Version History

- 1.0
  - Initial Release (23/05/2023)

## References

- [bootstrap](https://getbootstrap.com/)
