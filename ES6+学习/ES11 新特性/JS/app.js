// 静态import
// import * as m1 from "./hello.js"

// 动态import
// 获取元素
const btn = document.querySelector('#btn');

// 动态的表现: 只有当按钮被点击的时候, hello模块才会被加载
btn.addEventListener('click', function () {
    import('./hello.js').then(module => {
        module.hello();
    })
})