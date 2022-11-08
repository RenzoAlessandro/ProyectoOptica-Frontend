const chatData = [
    {
        image: 'assets/images/users/avatar-2.jpg',
        name: 'John Howard',
        message: 'Hey! there I\'m available',
        time: '02 min',
        status:  'online',
    },
    {
        name: 'Galen Rizo',
        message: 'I\'ve finished it! See you so',
        time: '10 min',
        status: 'online',
        unread: '01',
    },
    {
        image: 'assets/images/users/avatar-3.jpg',
        name: 'Bernard Spencer',
        message: 'This theme is awesome!',
        time: '22 min',
        status: 'away',
    },
    {
        image: 'assets/images/users/avatar-4.jpg',
        name: 'Annie Holder',
        message: 'Nice to meet you',
        time: '01 hr',
        status: 'online',
    },
    {
        name: 'Vernon Smith',
        message: 'Wow that\'s great',
        time: '04 hrs',
        status: 'online',
    },
];

const chatMessagesData = [
    {
        name: 'John Howard',
        message: 'Good morning everyone !',
        time: '10:00'
    },
    {
        align: 'right',
        name: 'Marcus',
        message: 'Good morning everyone !',
        time: '10:02'
    },
    {
        name: 'Galen Rizo',
        message: 'Hello!',
        time: '10:04'
    },
    {
        name: 'Galen Rizo',
        message: 'What about our next meeting?',
        time: '10:04'
    },
    {
        name: 'John Howard',
        message: 'Next meeting tomorrow 10.00AM',
        time: '10:06'
    },
    {
        align: 'right',
        name: 'Marcus',
        message: 'Wow that\'s great',
        time: '10:02'
    },
    {
        name: 'John Howard',
        message: 'img-1.jpg & img-2.jpg images for a New Projects',
        time: '10:06',
        files: [{
            src: 'assets/images/small/img-1.jpg',
        },
        {
            src: 'assets/images/small/img-2.jpg'
        }]
    }
];

export { chatData, chatMessagesData };
