export default {
    path: '/cinema',
    component: () =>
        import ("@/views/Cinema"),
    children: [{
            path: 'ciList',
            component: () =>
                import ("@/components/CiList")
        },
        {
            path: 'brList',
            component: () =>
                import ("@/components/BrList")
        },
        {
            path: 'feList',
            component: () =>
                import ("@/components/FeList")
        },
        {
            path: '/cinema',
            redirect: '/cinema/ciList'
        }
    ]
}