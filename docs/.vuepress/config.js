module.exports = {
    base: '/ts-study/',
    dest: 'dist',
    title: 'TypeScript入门',
    description: '学习使用TypeScript',
    themeConfig: {
        nav: [
            { text: '接口定义', link: '/apiword' },
            { text: '接口字段定义', link: '/api' },
            { text: '附录：错误码', link: '/error' }
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