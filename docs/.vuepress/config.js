module.exports = {
    dest: 'dist',
    base: './',
    title: '靳强的博客',
    description: '靳强的博客',
    themeConfig: {
        nav: [
            { text: 'tool', link: '/guide' },
            { text: 'xbot', link: '/guide' },
            { text: '百度', link: 'https://www.baidu.com/' }
        ],
        sidebar: {
            '/guide/': [{
                    title: '栏目1',
                    collapsable: false,
                    children: [
                        ['chapter1/', 'Introduction'],
                        'chapter1/01_初识TS'
                    ]
                },
                {
                    title: '栏目2',
                    collapsable: false,
                    children: [
                        'chapter2/01_初识TS'
                    ]
                }
            ]

        }
    },
    markdown: {
        lineNumbers: true
    }
}