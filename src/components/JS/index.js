import { createApp, h, ref } from 'vue'
export var messageBox = (function() {
    var defaults = {
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    };
    return function(opts) {
        for (var attr in opts) {
            defaults[attr] = opts[attr];
        };

        const app = createApp({
            setup(props) {
                const title = ref(defaults.title);
                const content = ref(defaults.content);
                const cancel = ref(defaults.cancel);
                const ok = ref(defaults.ok);
                return { title, content, cancel, ok };
            },
            methods: {
                handleCancel() {
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            },
            render() {
                return h('div', {
                    class: "messageBox",
                    style: {
                        width: '200px',
                        height: '120px',
                        border: '1px #ccc solid',
                        'border-radius': '4px',
                        background: 'white',
                        'box-shadow': '3px 3px 3px 3px #ccc',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        margin: '-60px 0 0 -100px'
                    }
                }, [h('h2', {
                    style: {
                        'text-align': 'center',
                        'line-height': '40px',
                        'font-size': '18px'
                    }
                }, this.title)], [h('p', {
                    style: {
                        'text-align': 'center',
                        'line-height': '40px'
                    }
                }, this.content)], [h('div', {
                    style: {
                        display: 'flex',
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        'border-top': '1px #ccc solid'
                    }
                }, [h('div', {
                    onClick: $event => this.handleCancel(),
                    style: {
                        flex: 1,
                        'text-align': 'center',
                        'line-height': '30px',
                        'border-right': '1px #ccc solid'
                    }
                }, this.cancel)], [h('div', {
                    onClick: $event => this.handleOk(),
                    style: {
                        flex: 1,
                        'text-align': 'center',
                        'line-height': '30px',
                        border: 'none'
                    }
                }, this.ok)])]);
            }
        });
        const parent = document.createElement('div');
        var vm = app.mount(parent);
        document.body.appendChild(vm.$el);
    };
})();