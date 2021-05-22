module.exports = {
    devServer: {
        proxy: {
            '/api/cityList': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/cityList': '/data/cityList.json'
                }
            },
            '/api/movieOnInfoList': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/movieOnInfoList': '/data/movieOnInfoList.json'
                }
            },
            '/api/movieComingList': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/movieComingList': '/data/movieComingList.json'
                }
            },
            '/api/searchList': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/searchList': '/data/searchList.json'
                }
            },
            '/api/cinemaList': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/cinemaList': '/data/cinemaList.json'
                }
            },
            '/api': {
                target: 'http://39.97.33.178',
                changeOrigin: true
            }
        }
    }
}