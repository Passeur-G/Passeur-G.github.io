import { onMounted } from "vue";
import { defineClientConfig } from "vuepress/client";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import packageJson from '../../package.json';
import Layout from "./theme/layouts/Layout.vue";
import Wormhole from "./theme/components/Wormhole";
import Travelling from "./theme/components/Travelling";
import NotFound from "./theme/layouts/NotFound.vue";
export default defineClientConfig({
  //你可以在这里覆盖或新增布局
  layouts: {
    Layout,
    NotFound,
  },
  enhance: ({ app }) => {
    app.component("Wormhole", Wormhole);
    app.component("Travelling", Travelling);
  },
  setup: () => {
    onMounted(() => {
      console.log(
        `%c ✨知秋-凉介的博客 v${packageJson.version}✨ %c ✨GaLaXy✨ %c\n
               正在朝全栈方向努力的IT工程师\n
                  🍻对话自己似乎很容易上瘾🍻\n
                          ---- 
                          
                          我习惯深埋雾里\n
                                  自我较劲\n
                                      魂首分离`,
        `background: #eb507e; padding:5px; font-size:12px; color: #f9f4dc;`,
        `background: #030307; padding:5px; font-size:12px; color:#fff;`,
        `color: #51c4d3; font-size:12px;`
      );
    });
  }
});
