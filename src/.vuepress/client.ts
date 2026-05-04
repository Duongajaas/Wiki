import { onMounted } from "vue";
import { defineClientConfig } from "vuepress/client";
import NotFound from "./theme/layouts/NotFound.vue";
import Layout from "./theme/layouts/Layout.vue";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import packageJson from '../../package.json';
export default defineClientConfig({
  // ä½ å¯ä»¥åœ¨è¿™é‡Œè¦†ç›–æˆ–æ–°å¢å¸ƒå±€
  layouts: {
    Layout,
    NotFound,
  },
  enhance: ({ app }) => {
  },
  setup: () => {
    onMounted(() => {
      console.log(
        "%c ✨Blog của Thượng Đông Thập Nhị v" + packageJson.version + "✨ %c ✨Duongajaas's Blog✨ %c\n" +
        "Bạn, đúng rồi, chính là bạn\n" +
        "🍻 ( ´ ω ` )つ🍻 Cạn ly nào~\n" +
        "---- Gió xuân đẹp nhất là không thể giữ lại, chỉ còn ta cô độc.\n" +
        "Muốn gửi thư tình cũng không biết gửi nơi đâu,\n" +
        "núi dài sông rộng, biết tìm ở đâu đây?",
        "color: #ff6bcb; font-size: 14px;",
        "color: #00c2ff; font-size: 14px;",
        "color: #aaa; font-size: 12px;"
      );
    });
  }
});

