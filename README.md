# uni-time-line 时间轴组件

> 使用Vue开发的时间轴组件，同时适用于移动端和PC端

## 演示效果 the preview

![](http://qiniu.iborge.cn/1547277185433.jpg)

## 如何使用 How to use

```bash
npm install -g uni-time-line -S
```

```vue
//main.js
import TimeLine from 'uni-time-line';
Vue.use(TimeLine);
```



```vue
<time-line space="60px" icon="http://xxx.png" :uni-data="data"></time-line>
```



## 属性介绍 Props

```javascript
uni_data: {//数据列表 data list
      type: Array,
      default() {
        return [
          {
            title: "this is title",
            content: "this is content"
          },
          {
            title: "标题过长会显示省略号",
            content: "内容过长会隐藏"
          },
          {
            title: "更多效果可以自定义",
            content: "更多效果可以自定义"
          }
        ];
      }
    },
    space: {//两个条目之间的间距 the space between two items
      type: String,
      default: "100px"
    },
    uni_icon: {// icon图形的地址 the icon url
      type: String,
      default: "http://qiniu.iborge.cn/dian.png"
    }
```

