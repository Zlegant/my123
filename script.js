// 定义一个函数，根据传入的索引在鼠标悬停时显示相应的选项卡
function showTabOnHover(index) {
    // 获取所有具有 'tab-controller' 类的元素
    var tabs = document.querySelectorAll('.tab-controller');
    // 获取所有具有 'tb-' 开头 ID 的元素
    var contents = document.querySelectorAll('[id^=tb-]');

    // 遍历每个选项卡
    tabs.forEach(function (tab, i) {
        // 如果当前索引与传入的索引相同，则显示相应的内容和突出显示该选项卡
        if (i === index) {
            contents[i].classList.add('show');
            contents[i].classList.remove('hide');
            tab.classList.add('highlight');
        } else {
            // 如果不相同，则隐藏相应的内容并取消突出显示该选项卡
            contents[i].classList.remove('show');
            contents[i].classList.add('hide');
            tab.classList.remove('highlight');
        }
    });
}

// 等待文档完全加载后执行
document.addEventListener('DOMContentLoaded', function () {
    // 获取所有具有 'tab-controller' 类的元素
    var tabControllers = document.querySelectorAll('.tab-controller');

    // 遍历每个选项卡并添加鼠标悬停事件监听器
    tabControllers.forEach(function (tab, index) {
        tab.addEventListener('mouseover', function () {
            // 在悬停时调用 showTabOnHover 函数，并传入当前的索引
            showTabOnHover(index);
        });
    });
});
