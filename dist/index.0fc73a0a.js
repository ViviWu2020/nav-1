(function () {
  const $3920c17d9f5276c54162013f7118516f$var$$siteList = $('.siteList');
  // 就是那个ul。const $siteList = $('.siteList')//找到这个元素，因为用jQuery找的，前面加$
  const $3920c17d9f5276c54162013f7118516f$var$$lastLi = $3920c17d9f5276c54162013f7118516f$var$$siteList.find('li.last');
  // 就是ul最后一个li。放到前面了.//要添加一个网站，搞一个div插到siteList里面
  // const $lastLi = $siteList.find('li.last')//插入一个卡片，用插值法${},这个$只是jquery的语法
  const $3920c17d9f5276c54162013f7118516f$var$x = localStorage.getItem('x');
  const $3920c17d9f5276c54162013f7118516f$var$xObject = JSON.parse($3920c17d9f5276c54162013f7118516f$var$x);
  // 就可以初始化哈希表了//如果xObject存在就用xObject的数据，如果不存在就····
  const $3920c17d9f5276c54162013f7118516f$var$hasMap = $3920c17d9f5276c54162013f7118516f$var$xObject || [{
    logo: 'A',
    url: 'https://www.acfun.cn'
  }, {
    logo: 'B',
    url: 'https://www.bilibili.com'
  }];
  const $3920c17d9f5276c54162013f7118516f$var$simplifyUrl = url => {
    return url.replace('https://', '').replace('https://', '').replace('www.', '').// 优化site里面那个网址
    replace(/\/.*/, '');
  };
  // 你发现哈希表可以存储这些节点，可以直接在js里储存起来👇👇👇
  const $3920c17d9f5276c54162013f7118516f$var$render = () => {
    // 这结束之后要重新渲染哈希表，但是之前的A、B网页会复制两遍，所以每次渲染啊都要把之前的删掉
    $3920c17d9f5276c54162013f7118516f$var$$siteList.find('li:not(.last)').remove();
    // 找到所有的li除了最后一项
    $3920c17d9f5276c54162013f7118516f$var$hasMap.forEach((node, index) => {
      // 遍历哈希表，foreach会把每一项作为参数告诉你，每一项叫做节点node，
      const $li = $(`<li>
      <div class="site">
        <div class="logo">${node.logo}</div>
        <div class="link">${$3920c17d9f5276c54162013f7118516f$var$simplifyUrl(node.url)}</div>
        <div class="close">
          <svg class="icon">
            <use xlink:href="#icon-close"></use>
          </svg>
        </div> 
      </div>
  </a>
</li>`).insertBefore($3920c17d9f5276c54162013f7118516f$var$$lastLi);
      // 记得添加close之后，css那的site要相对定位，close要绝对定位
      $li.on('click', () => {
        window.open(node.url);
      });
      $li.on('click', '.close', e => {
        e.stopPropagation();
        // 监听close按钮//阻止冒泡，点击不会告诉a标签//但是实践证明跟a标签矛盾了。把a标签删了。
        console.log($3920c17d9f5276c54162013f7118516f$var$hasMap);
        // 里面那么多网站，想要找到当前点击的那一个，然后删掉。但不知道第几个？在上面node那里（）起来加一个index，拿到索引
        $3920c17d9f5276c54162013f7118516f$var$hasMap.splice(index, 1);
        // 从index那里删掉一个
        // 莫得反应？记得重新渲染一下
        $3920c17d9f5276c54162013f7118516f$var$render();
      });
    });
  };
  $3920c17d9f5276c54162013f7118516f$var$render();
  // 刷新之后就没有了，要用数据结构存下来，用哈希表
  $('.addButton').on('click', () => {
    let url = window.prompt('请问你要添加的网站是啥？');
    if (url.indexOf('http') !== 0) {
      url = 'https://' + url;
    }
    console.log(url);
    $3920c17d9f5276c54162013f7118516f$var$hasMap.push({
      logo: $3920c17d9f5276c54162013f7118516f$var$simplifyUrl(url)[0].toUpperCase(),
      url: url
    });
    // 这结束之后要重新渲染哈希表，但是之前的A、B网页会复制两遍，所以每次渲染啊都要把之前的删掉
    $3920c17d9f5276c54162013f7118516f$var$render();
  });
  // 页面关闭的时候把哈希表存到local storage里面，但local storage只能存字符串
  window.onbeforeunload = () => {
    // console.log('页面要关闭了')
    const string = JSON.stringify($3920c17d9f5276c54162013f7118516f$var$hasMap);
    // 把对象变成字符串
    localStorage.setItem('x', string);
  };
  // 存进去了，就能读
  $(document).on('keypress', e => {
    const {key} = e;
    for (let i = 0; i < $3920c17d9f5276c54162013f7118516f$var$hasMap.length; i++) {
      if ($3920c17d9f5276c54162013f7118516f$var$hasMap[i].logo.toLowerCase() === key) {
        window.open($3920c17d9f5276c54162013f7118516f$var$hasMap[i].url);
      }
    }
  });
})();

//# sourceMappingURL=index.0fc73a0a.js.map
